import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Minter = () => {
  const [positivePrompt, setPositivePrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [AIImage, setAIImage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const url = import.meta.env.VITE_AI_IMAGE_GENERATOR_API_URL;
  const rapidapi_key = import.meta.env.VITE_X_RapidAPI_Key;
  const rapidapi_host = import.meta.env.VITE_X_RapidAPI_Host;

  const generateAIImage = async () => {
    const options = {
      method: "POST",
      url: url,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": rapidapi_key,
        "X-RapidAPI-Host": rapidapi_host,
      },
      data: {
        prompt: positivePrompt,
        negativePrompt: negativePrompt,
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      console.log(response.data);
      setAIImage(response.data.ImageUrl);
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async () => {
    if (positivePrompt === "") {
      toast.error("positive prompts cannot be empty");
    }
    // setLoading(true);
    try {
      await generateAIImage();
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="flex md:flex-row flex-col">
      {/* Left half */}
      <div className="w-full md:w-1/2 md:p-10 p-4 md:pl-24">
        <h2 className="text-lg font-semibold mb-4">
          Enter Prompts to generate AI Image
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Positive Prompt
          </label>
          <textarea
            id="name"
            name="name"
            className="mt-1 block w-full h-32 text-black p-2 border-gray-300 rounded-md shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setPositivePrompt(e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Negative Prompt
          </label>
          <textarea
            id="email"
            name="email"
            className="mt-1 block w-full text-black p-2 border-gray-300 rounded-md shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setNegativePrompt(e.target.value)
            }
          />
        </div>
        <button
          disabled={loading}
          onClick={onSubmit}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded relative"
        >
          {loading && "Loading.."}
          {!loading && "Generate"}
        </button>
      </div>

      {/* Right half */}
      <div className="w-full md:w-1/2 h-[400px] mt-10 md:mt-0">
        {loading && <div className="loader mt-40 ml-20"></div>}
        {!loading && (
          <img
            src={AIImage ? AIImage : "https://via.placeholder.com/500"}
            alt="Placeholder"
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default Minter;

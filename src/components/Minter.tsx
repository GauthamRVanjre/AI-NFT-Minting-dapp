import { useState } from "react";

const Minter = () => {
  const [positivePrompt, setPositivePrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");

  const onSubmit = () => {
    if (positivePrompt === "" || negativePrompt === "") {
      throw new Error("States cannot be empty");
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
          onClick={onSubmit}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate
        </button>
      </div>

      {/* Right half */}
      <div className="w-full md:w-1/2 h-[400px] mt-10 md:mt-0">
        <img
          src="https://via.placeholder.com/500"
          alt="Placeholder"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Minter;

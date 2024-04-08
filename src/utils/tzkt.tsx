import axios from "axios";

// storage interaction
export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.ghostnet.tzkt.io/v1/contracts/KT1TnTvAimFyhxvRv1dPjptuDrmdNMtVu9J9/storage"
  );
  return res.data;
};

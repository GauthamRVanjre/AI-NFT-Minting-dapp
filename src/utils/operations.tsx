import { tezos } from "./tezos";

export const uploadImage = async (
  name: string,
  imageUrl: string,
  address: string
) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1TnTvAimFyhxvRv1dPjptuDrmdNMtVu9J9"
    );
    const op = await contract.methods.mint(address, name, imageUrl).send();
    return op.confirmation();
  } catch (error) {
    console.error(error);
  }
};

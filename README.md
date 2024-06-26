# NFT Minting Project Readme

This project is a AI NFT minting platform where users can generate AI images based on positive and negative prompts and later mint them as NFTs. The platform is built using SmartPy for the smart contracts and React Vite App for the user interface.

Here are the links to the contract and UI:

- Smart contract: [https://better-call.dev/ghostnet/KT1TnTvAimFyhxvRv1dPjptuDrmdNMtVu9J9/operations](https://better-call.dev/ghostnet/KT1TnTvAimFyhxvRv1dPjptuDrmdNMtVu9J9/operations)
- User interface: [https://ai-nft-minting-dapp.vercel.app/](https://ai-nft-minting-dapp.vercel.app/)

## Output Screen

![Image Title](/public/cute_dog.PNG)

## How it works

The platform allows users to generate their AI generated images through prompts given by them and later mint them as NFTs. Here's a brief overview of how the platform works:

1. The user enters two prompts - a positive and an negative prompt
2. Based on the prompts given by user, an appropriate image is generated by stable diffusion(Hugging face) API
3. After the image generation, user has choice to mint the image or modify his prompt to generate another image
4. If the user mints the Image, the image is stored on IPFS.
5. The user mints the NFT.
6. The NFT is created and stored on the Tezos blockchain.

## Features

The platform has the following features:

- Stable Diffusion AI images: Users can give prompts for AI to generate appropriate images to them
- IPFS integration: Images are stored on IPFS for efficient and decentralized storage.
- Meta-data: Users can enter meta-data for their NFTs, such as name, description, and tags.

## Technologies Used

The platform is built using the following technologies:

- Stable Diffusion AI API: The Image generation algorithm is through stable diffusion (hugging face) AI API.
- SmartPy: The smart contracts are written in SmartPy.
- React.js: The user interface is built using React.js.
- Tailwind CSS: This Library is used to style our User Interface
- IPFS: Images are stored on IPFS for efficient and decentralized storage of images.
- Taquito: This library is used to interact with our smart contract through React App
- Better Call Dev: This platform is used to deploy and interact with the smart contract.

## Getting Started

To run the platform locally, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the application using `npm start`.

## Conclusion

This is a AI NFT minting platform that allows users to generate their images through prompts to AI Agnet and mint them as NFTs. The platform uses SmartPy for the smart contracts and React.js for the user interface. It also integrates with IPFS for efficient and decentralized storage of images, and is deployed on the Tezos blockchain.

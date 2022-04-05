const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "CryptoMofayas";
const description = "A community-driven NFT project based on the epic, true-life Mermans Mosengo documentary, 2 1/2 years in the making.";
const baseUri = "https://ipfs.io/ipfs/Qme86pVR9beaiDMh2QSbrzJTdYMRUSVRHBwMWm4xmVGhtF";
const externalurl = "https://ipfs.io/ipfs/Qmf23xmVBZF7LiRhJTq8tAk6Dm2tdAL7YsQfoo2KDjC1g9";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1,
    layersOrder: [
      { name: "Background"},
      { name: "Left Arm", options: {bypassDNA: true}},
      { name: "Shirt"},
      { name: "Head", options: {bypassDNA: true}},
      { name: "Necklace"},
      { name: "Pants"},
      { name: "Guitar One", options: {displayName: "Guitar"}},
      { name: "Right Arm", options: {bypassDNA: true}},
      { name: "Left Hand", options: {bypassDNA: true}},
      { name: "Eyes", options: {bypassDNA: true}},
      { name: "Shades"},
      { name: "Hair"},
      { name: "Beard"},
      { name: "Head Gear"},
    ],
  },
  {
    growEditionSizeTo: 2,
    layersOrder: [
      { name: "Background"},
      { name: "Left Arm", options: {bypassDNA: true}},
      { name: "Shirt"},
      { name: "Head", options: {bypassDNA: true}},
      { name: "Necklace"},
      { name: "Pants"},
      { name: "Guitar Two", options: {displayName: "Guitar"}},
      { name: "Right Arm", options: {bypassDNA: true}},
      { name: "Left Hand", options: {bypassDNA: true}},
      { name: "Eyes", options: {bypassDNA: true}},
      { name: "Shades"},
      { name: "Hair"},
      { name: "Beard"},
      { name: "Head Gear"},
    ],
  },
  {
    growEditionSizeTo: 26,
    layersOrder: [
      { name: "Mars Background", options: {displayName: "Background"}},
      { name: "Left Arm", options: {bypassDNA: true}},
      { name: "Mars Shirt", options: {displayName: "Shirt"}},
      { name: "Head", options: {bypassDNA: true}},
      { name: "Necklace"},
      { name: "Mars Pants", options: {displayName: "Pants"}},
      { name: "Guitar"},
      { name: "Right Arm", options: {bypassDNA: true}},
      { name: "Left Hand", options: {bypassDNA: true}},
      { name: "Eyes", options: {bypassDNA: true}},
      { name: "Shades"},
      { name: "Mars Hair", options: {displayName: "Hair"}},
      { name: "Mars Beard", options: {displayName: "Beard"}},
      { name: "Mars Head Gear", options: {displayName: "Head Gear"}},
    ],
  },
  {
    growEditionSizeTo: 226,
    layersOrder: [
      { name: "Background"},
      { name: "Left Arm", options: {bypassDNA: true}},
      { name: "Shirt"},
      { name: "Head", options: {bypassDNA: true}},
      { name: "Necklace"},
      { name: "Pants"},
      { name: "Guitar"},
      { name: "Right Arm", options: {bypassDNA: true}},
      { name: "Left Hand", options: {bypassDNA: true}},
      { name: "Eyes", options: {bypassDNA: true}},
      { name: "Afro", options: {displayName: "Hair"}},
      { name: "Beard"},
      { name: "Afro Gear", options: {displayName: "Head Gear"}},
      { name: "Shades"},
    ],
  },
  {
    growEditionSizeTo: 626,
    layersOrder: [
      { name: "Background"},
      { name: "Left Arm", options: {bypassDNA: true}},
      { name: "Shirt"},
      { name: "Head", options: {bypassDNA: true}},
      { name: "Necklace"},
      { name: "Pants"},
      { name: "Guitar"},
      { name: "Right Arm", options: {bypassDNA: true}},
      { name: "Left Hand", options: {bypassDNA: true}},
      { name: "Eyes", options: {bypassDNA: true}},
      { name: "Shades"},
      { name: "Rasta Hair", options: {displayName: "Hair"}},
      { name: "Beard"},
      { name: "Rasta Head Gear", options: {displayName: "Head Gear"}},
    ],
  },
  {
    growEditionSizeTo: 1999,
    layersOrder: [
      { name: "Background"},
      { name: "Left Arm", options: {bypassDNA: true}},
      { name: "Shirt"},
      { name: "Head", options: {bypassDNA: true}},
      { name: "Necklace"},
      { name: "Pants"},
      { name: "Guitar"},
      { name: "Right Arm", options: {bypassDNA: true}},
      { name: "Left Hand", options: {bypassDNA: true}},
      { name: "Eyes", options: {bypassDNA: true}},
      { name: "Shades"},
      { name: "Hair"},
      { name: "Beard"},
      { name: "Head Gear"},
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

// 2968 3840
//2550 3300
//834 1080
const format = {
  width: 835,
  height: 1081,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

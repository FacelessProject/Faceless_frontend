import icon from "@/assets/images/eth.png";

// 模拟代币列表mocks，字段为name,icon,blockchain
// icon为图片路径
// name为代币名称
// blockchain为所在区块链
// 模拟总条数为15条

const mocks = [
  {
    icon,
    name: "ETH",
    blockchain: "Ethereum",
  },

  {
    icon,
    name: "BTC",
    blockchain: "Bitcoin",
  },

  {
    icon,
    name: "USDT",
    blockchain: "Tether",
  },

  {
    icon,
    name: "BNB",
    blockchain: "Binance Coin",
  },

  {
    icon,
    name: "XRP",
    blockchain: "XRP",
  },

  {
    icon,
    name: "ADA",
    blockchain: "Cardano",
  },

  {
    icon,
    name: "DOGE",
    blockchain: "Dogecoin",
  },

  {
    icon,
    name: "DOT",
    blockchain: "Polkadot",
  },

  {
    icon,
    name: "UNI",
    blockchain: "Uniswap",
  },

  {
    icon,
    name: "LTC",
    blockchain: "Litecoin",
  },

  {
    icon,
    name: "LINK",
    blockchain: "Chainlink",
  },

  {
    icon,
    name: "BCH",
    blockchain: "Bitcoin Cash",
  },

  {
    icon,
    name: "XLM",
    blockchain: "Stellar",
  },

  {
    icon,
    name: "USDC",
    blockchain: "USD Coin",
  },

  {
    icon,
    name: "THETA",
    blockchain: "Theta",
  },
];

// 模拟社交平台列表medias，字段为avatar,username,platform,amount,coin,key
// avatar为头像路径
// username为用户名
// platform为社交平台名称
// amount为代币数量，取值为1-10,精度为小数点后两位（必须）
// coin为代币名称，取值为mocks中的name
// key为唯一标识，取值为随机数
// 模拟总条数为15条

const medias = [
  {
    avatar: "https://avatars.githubusercontent.com/u/2106987?v=4",
    username: "@Hellohuman",
    platform: "GitHub",
    amount: 1.23,
    coin: "ETH",
    key: 1,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/6128107?v=4",
    username: "facebook",
    platform: "GitHub",
    amount: 2.34,
    coin: "BTC",
    key: 2,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    username: "Meta",
    platform: "GitHub",
    amount: 3.45,
    coin: "USDT",
    key: 3,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/1335026?v=4",
    username: "+39-339***0318",
    platform: "GitHub",
    amount: 4.56,
    coin: "BNB",
    key: 4,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/317889?v=4",
    username: "twitter",
    platform: "GitHub",
    amount: 5.67,
    coin: "XRP",
    key: 5,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/10639145?v=4",
    username: "@Hellohuman",
    platform: "GitHub",
    amount: 6.78,
    coin: "ADA",
    key: 6,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/2106987?v=4",
    username: "@Hellohuman",
    platform: "GitHub",
    amount: 7.89,
    coin: "DOGE",
    key: 7,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/6128107?v=4",
    username: "facebook",
    platform: "GitHub",
    amount: 8.9,
    coin: "DOT",
    key: 8,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    username: "Meta",
    platform: "GitHub",
    amount: 9.01,
    coin: "UNI",
    key: 9,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/1335026?v=4",
    username: "+39-339***0318",
    platform: "GitHub",
    amount: 10.12,
    coin: "LTC",
    key: 10,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/317889?v=4",
    username: "twitter",
    platform: "GitHub",
    amount: 1.23,
    coin: "LINK",
    key: 11,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/10639145?v=4",
    username: "@Hellohuman",
    platform: "GitHub",
    amount: 2.34,
    coin: "BCH",
    key: 12,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/2106987?v=4",
    username: "@Hellohuman",
    platform: "GitHub",
    amount: 3.45,
    coin: "XLM",
    key: 13,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/6128107?v=4",
    username: "facebook",
    platform: "GitHub",
    amount: 4.56,
    coin: "USDC",
    key: 14,
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    username: "Meta",
    platform: "GitHub",
    amount: 5.67,
    coin: "THETA",
    key: 15,
  },
];

export { mocks, medias };

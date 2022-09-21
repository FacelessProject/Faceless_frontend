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

// 模拟社交平台列表medias，字段为avatar,username,platform,amount,coin
// avatar为头像路径
// username为用户名
// platform为社交平台名称
// amount为代币数量，取值为1-10,精度为小数点后两位（必须）
// coin为代币名称，取值为mocks中的name
// 模拟总条数为15条

const medias = [
  {
    avatar: "https://avatars.githubusercontent.com/u/2106987?v=4",
    username: "vuejs",
    platform: "GitHub",
    amount: 1.23,
    coin: "ETH",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/6128107?v=4",
    username: "facebook",
    platform: "GitHub",
    amount: 2.34,
    coin: "BTC",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    username: "reactjs",
    platform: "GitHub",
    amount: 3.45,
    coin: "USDT",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/1335026?v=4",
    username: "angular",
    platform: "GitHub",
    amount: 4.56,
    coin: "BNB",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/317889?v=4",
    username: "twitter",
    platform: "GitHub",
    amount: 5.67,
    coin: "XRP",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/10639145?v=4",
    username: "vuejs",
    platform: "GitHub",
    amount: 6.78,
    coin: "ADA",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/2106987?v=4",
    username: "vuejs",
    platform: "GitHub",
    amount: 7.89,
    coin: "DOGE",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/6128107?v=4",
    username: "facebook",
    platform: "GitHub",
    amount: 8.9,
    coin: "DOT",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    username: "reactjs",
    platform: "GitHub",
    amount: 9.01,
    coin: "UNI",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/1335026?v=4",
    username: "angular",
    platform: "GitHub",
    amount: 10.12,
    coin: "LTC",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/317889?v=4",
    username: "twitter",
    platform: "GitHub",
    amount: 1.23,
    coin: "LINK",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/10639145?v=4",
    username: "vuejs",
    platform: "GitHub",
    amount: 2.34,
    coin: "BCH",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/2106987?v=4",
    username: "vuejs",
    platform: "GitHub",
    amount: 3.45,
    coin: "XLM",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/6128107?v=4",
    username: "facebook",
    platform: "GitHub",
    amount: 4.56,
    coin: "USDC",
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    username: "reactjs",
    platform: "GitHub",
    amount: 5.67,
    coin: "THETA",
  },
];

export { mocks, medias };

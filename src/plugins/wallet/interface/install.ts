import bsc from "@/assets/images/bsc.svg";
import metamask from "@/assets/images/metamask.svg";
import coinbase from "@/assets/images/coinbase.svg";
import walletconnect from "@/assets/images/walletconnect.svg";

const install: any = {
  ethereum: {
    icon: bsc,
    name: "Binance Smart Chain",

    include: [
      {
        icon: metamask,
        name: "Metamask",
        symbol: "metamask",
      },

      {
        icon: walletconnect,
        name: "WalletConnect",
        symbol: "walletconnect",
      },

      {
        icon: coinbase,
        name: "Coinbase",
        symbol: "walletlink",
      },
    ],
  },
};

export { install };

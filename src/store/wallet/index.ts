import { defineStore } from "pinia";
import { randomString } from "@/utils/random";

interface Connect {
  [key: string]: any;
  signer: { signMessage: (content: string) => Promise<string> };
}

export const useWallet = defineStore("wallet", {
  state: () => ({
    connect: {} as Connect,

    auth: {
      signature: "",
      sign_content: randomString(),
    },
  }),

  getters: {},

  actions: {},
});

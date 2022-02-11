import ENV from "@/assets/env";
import { install } from "./install";

const build = install[ENV.walletChain];

export { build };

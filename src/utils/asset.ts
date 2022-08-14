import ENV from "@/assets/env";
import Avatar from "@/assets/images/avatar.svg";

const readAsset = (path: string) => {
  if (path) return path;
  return Avatar;
};

export { readAsset };

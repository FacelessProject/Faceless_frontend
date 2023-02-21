import { useSubstrate, initFaceless } from "@/store";
import { eras } from "@/components/community";
import { platform_id } from "@/utils/account";
import pinia from "@/utils/piniaInstance";
import phonePlatform from "@/assets/images/phonePlatform.png";

const createAccount = async (platform: string, username: string) => {
  let accountList = JSON.parse(window.sessionStorage.getItem("eras"));

  Object.entries(accountList).forEach(([key, value]) => {
    eras[key] = value;
  })

  const substrate = useSubstrate(pinia);

  substrate.client = await initFaceless();

  if (platform && username) {
    eras[platform_id(platform, username)] = { icon: phonePlatform, platform, username };
    await substrate.client.register(platform, username);
  }
}

export { createAccount };

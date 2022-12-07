const platform_id = (platform: string, username: string) => {
  return platform + ":" + username;
};

export { platform_id };

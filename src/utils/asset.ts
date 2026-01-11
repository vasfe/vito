export const getAssetPath = (path: string) => {
  return `${process.env.ASSET_PREFIX}${path}`;
};

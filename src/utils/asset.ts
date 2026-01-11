export const getAssetPath = (path: string) => {
  return `${process.env.NODE_ENV === "production" ? "/vito" : ""}${path}`;
};

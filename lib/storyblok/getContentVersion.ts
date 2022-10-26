export const getContentVersion = () => {
  return process.env.NODE_ENV === "development" ? "draft" : "published";
};

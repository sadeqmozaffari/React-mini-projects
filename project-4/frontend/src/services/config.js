export const getApiPath = () => {
  let basePath;
  if (process.env.NODE_ENV === "development") {
    basePath = process.env.REACT_APP_DEV_API;
  } else {
    basePath = process.env.REACT_APP_PRO_API;
  }

  return basePath;
};

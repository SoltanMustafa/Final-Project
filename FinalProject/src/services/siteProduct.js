export const GetSiteProducts = async () => {
  try {
    const { data } = await API.get("/site/products");
    return data;
  } catch (error) {
    throw new Error("GetProducts Error: " + error.message);
  }
};

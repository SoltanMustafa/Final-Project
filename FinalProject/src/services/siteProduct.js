import { API } from "../config/axios";

export const GetSiteProducts = async () => {
  try {
    const { data } = await API.get("/site/products");
    return data;
  } catch (error) {
    throw new Error("GetProducts Error: " + error.message);
  }
};

export const GetSiteBrands = async () => {
  try {
    const { data } = await API.get("/site/brands");
    return data;
  } catch (error) {
    throw new Error("GetProducts Error: " + error.message);
  }
};

import { API } from "../config/axios";

export const GetSiteProducts = async ({ page, perPage }) => {
  try {
    const { data } = await API.get("/site/products", {
      params: {
        page: page,
        perPage: perPage,
      },
    });
    return data;
  } catch (error) {
    throw new Error("GetSiteProducts Error: " + error.message);
  }
};

export const GetSingleProduct = async (id) => {
  try {
    const { data } = await API.get(`/site/products/${id}`);
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

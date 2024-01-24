import { API } from "../config/axios";

export const CreateBrand = async (params) => {
  let { data } = await API.post("/dashboard/brands", params);
  return data;
};

export const GetBrands = async (params) => {
  let { data } = await API.get("/dashboard/brands", params);
  return data;
};

export const CreateProducts = async (params) => {
  let { data } = await API.post("/dashboard/products", params);
  return data;
};

export const GetProducts = async (params) => {
  let { data } = await API.get("/dashboard/products", params);
  return data;
};

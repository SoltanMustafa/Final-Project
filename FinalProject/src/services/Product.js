import { API } from "../config/axios";

export const CreateBrand = async (params) => {
  let { data } = await API.post("/dashboard/brands", params);
  return data;
};

export const GetBrands = async (params) => {
  let { data } = await API.get("/dashboard/brands", params);
  return data;
};

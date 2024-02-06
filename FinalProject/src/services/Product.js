import { API } from "../config/axios";

export const CreateBrand = async (params) => {
  try {
    const { data } = await API.post("/dashboard/brands", params);
    return data;
  } catch (error) {
    throw new Error("CreateBrand Error: " + error.message);
  }
};

export const GetBrands = async () => {
  try {
    const { data } = await API.get("/dashboard/brands");
    return data;
  } catch (error) {
    throw new Error("GetBrand Error: " + error.message);
  }
};

export const DeleteBrands = async (id) => {
  try {
    const { data } = await API.delete(`/dashboard/brands/${id}`);
    return data;
  } catch (error) {
    throw new Error("GetProducts Error: " + error.message);
  }
};

export const CreateProducts = async (params) => {
  try {
    const { data } = await API.post("/dashboard/products", params);
    return data;
  } catch (error) {
    throw new Error("CreateProducts Error: " + error.message);
  }
};

export const GetProducts = async ({ page, perPage }) => {
  try {
    const { data } = await API.get("/dashboard/products", {
      params: {
        page: page,
        perPage: perPage,
      },
    });
    return data;
  } catch (error) {
    throw new Error("GetProducts Error: " + error.message);
  }
};

export const UpdateProducts = async ({ productId, productUpdated }) => {
  console.log("UpdateProducts - id:", productId);
  console.log("UpdateProducts - requestData:", productUpdated);
  try {
    const { data } = await API.put(`/dashboard/products/${productId}`, {
      productUpdated,
    });
    return data;
  } catch (error) {
    throw new Error("UpdateProducts Error: " + error.message);
  }
};

export const DeleteProducts = async (id) => {
  try {
    const { data } = await API.delete(`/dashboard/products/${id}`);
    return data;
  } catch (error) {
    throw new Error("GetProducts Error: " + error.message);
  }
};

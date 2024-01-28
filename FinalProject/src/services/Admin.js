import { API } from "../config/axios";

export const SuperAdminLogin = async (params) => {
  try {
    const { data } = await API.post(`/login`, params);
    return data;
  } catch (error) {
    throw new Error("SuperAdminLogin Error: " + error.message);
  }
};

export const SuperAdminProfileCall = async () => {
  try {
    const { data } = await API.get("/profile");
    return data;
  } catch (error) {
    throw new Error("SuperAdminProfileCall Error: " + error.message);
  }
};

export const AdminRegister = async (params) => {
  try {
    const { data } = await API.post("/dashboard/register", params);
    return data;
  } catch (error) {
    throw new Error("AdminRegister Error: " + error.message);
  }
};

export const AdminCall = async () => {
  try {
    const { data } = await API.get("/dashboard/users");
    return data;
  } catch (error) {
    throw new Error("AdminCall Error: " + error.message);
  }
};

export const AdminDelete = async ({ id, requestData }) => {
  try {
    const { data } = await API.delete(`/dashboard/users/${id}`, {
      data: requestData,
    });
    return data;
  } catch (error) {
    throw new Error("AdminDelete Error: " + error.message);
  }
};

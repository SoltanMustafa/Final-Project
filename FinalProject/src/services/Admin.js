import { API } from "../config/axios";

export const SuperAdminLogin = async (params) => {
  let { data } = await API.post(`/login`, params);
  return data;
};

export const SuperAdminProfileCall = async () => {
  let { data } = await API.get("/profile");
  return data;
};

export const AdminRegister = async (params) => {
  let { data } = await API.post("/dashboard/register", params);
  return data;
};

export const AdminCall = async () => {
  let { data } = await API.get("/dashboard/users");
  return data;
};

export const AdminDelete = async ({ id, requesData }) => {
  let { data } = await API.delete(`/dashboard/users/${id}`, {
    data: requesData,
  });
  return data;
};

import { API } from "../config/axios";

export const SuperAdminLogin = async (params) => {
  let { data } = await API.post(`/login`, params);
  return data;
};

export const SuperAdminProfileCall = async () => {
  let { data } = await API.get("/profile");
  return data;
};

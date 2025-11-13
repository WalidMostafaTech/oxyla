import api from "./api";

export const getPages = async () => {
  const { data } = await api.get("/pages");
  return data?.data || [];
};

import api from "../configs/api";

const addCategory = async (data) => {
  const response = await api.post("category", data);
  const result = await response.data;
  return result;
};

const getCategory = () => {
  return api.get("category");
};

const removeCategory = (id) => {
  return api.delete(`category/${id}`);
};

export { addCategory, getCategory, removeCategory };

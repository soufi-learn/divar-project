import api from "../configs/api";

const fetchUser = () => api.get("user/whoami").then((res) => res || false);

const getPosts = () => api.get("post/my");

export { fetchUser , getPosts};

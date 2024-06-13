import api from "../configs/api";

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await api.post("auth/check-refresh-token", {
      refreshToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { refreshAccessToken };

import axiosClient from "./axios.client";

export const chatCompletion = async (params) => {
  try {
    const response = await axiosClient.post("chats", params);

    return { response };
  } catch (err) {
    return { err };
  }
};

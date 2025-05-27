import { post } from "../api.service";

export const sendEmail = async ({ data }) => {
  try {
    const res = await post({
      url: "send-email",
      data,
    });
    if (!res.success) throw res;
    return res;
  } catch (error) {
    throw error;
  }
};
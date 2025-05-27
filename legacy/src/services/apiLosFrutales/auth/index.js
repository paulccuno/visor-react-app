import { post } from "../api.service";

export const singIn = async ({ data }) => {
  try {
    const res = await post({
      url: "signin",
      data,
    });
    if (!res.success) throw res;
    return { ...res, data: { ...res.data, token: "fpadoshfe9o" } };
  } catch (error) {
    throw error;
  }
};

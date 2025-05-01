import { get, put } from "../api.service";

export const getLotes = async () => {
  try {
    const res = await get({
      url: "lotes",
    });

    if (!res.success) throw res;
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateDisponibilityLotes = async ({ data }) => {
  try {
    const res = await put({
      url: "lotes/disponibilidad",
      data,
    });

    if (!res.success) throw res;
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateLotesVisibility = async ({ data }) => {
  try {
    const res = await put({
      url: "lotes/visibilidad",
      data,
    });

    if (!res.success) throw res;
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateLotePrecio = async ({ data }) => {
  try {
    const res = await put({
      url: "lotes/precio",
      data,
    });

    if (!res.success) throw res;
    return res;
  } catch (error) {
    throw error;
  }
};

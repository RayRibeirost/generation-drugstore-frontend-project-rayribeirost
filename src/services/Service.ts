/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const findItem = async (url: string, setData: Function) => {
  const response = await api.get(url);
  setData(response.data);
};

export const registerItem = async (url: string, data: Object, setData: Function) => {
  const response = await api.post(url, data);
  setData(response.data);
};

export const updateItem = async (url: string, data: Object, setData: Function) => {
  const response = await api.put(url, data);
  setData(response.data);
};

export const deleteItem = async(url: string) => {
    await api.delete(url)
}

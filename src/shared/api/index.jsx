import axios from "axios";

const api = axios.create({
  baseURL: `http://94.131.246.109:5555/v1/2/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const students_api = {
  getAllStudents: async () => {
    return (await api.get("Schoolboy")).data.Items;
  },
  getColumns: async () => {
    return (await api.get("Column")).data.Items;
  },
  getRates: async () => {
    return (await api.get("Rate")).data.Items;
  },
  markRate: async (data) => {
    return await api.post("Rate", data);
  },
  unMarkRate: async (data) => {
    return await api.post("UnRate", data);
  },
  getUserInfo: async (id) => {
    return await api.get("Schoolboy", id);
  },
};

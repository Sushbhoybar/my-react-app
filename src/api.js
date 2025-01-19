import axios from "axios";

const API = axios.create({ baseURL: "https://my-react-app-backend.onrender.com" });


export const getCategories = () => API.get("/categories");
export const getProducts = () => API.get("/products");
export const getTransactions = () => API.get("/transactions");

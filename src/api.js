import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const getCategories = () => API.get("/categories");
export const getProducts = () => API.get("/products");
export const getTransactions = () => API.get("/transactions");

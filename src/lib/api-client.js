import axios from "axios";
import { HOST } from "@/utils/constatnts";

export const apiClient = axios.create({
    baseURL: HOST,
});


import { AppConfig } from '@/AppConfig';
import axios from "axios";

const client = axios.create({
    baseURL: AppConfig.apiUrl,
    timeout: 1000,
});
export default client;
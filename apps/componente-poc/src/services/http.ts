import { AppConfig } from '@/AppConfig';
import axios from "axios";

const client = axios.create({
    baseURL: AppConfig.apiUrl,
    timeout: 1000,
    headers: {
        'Component-Key':'123'
    }
});
export default client;
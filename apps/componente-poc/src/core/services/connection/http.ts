import { AppConfig } from '@/AppConfig';
import axios from "axios";

const client = axios.create({
    baseURL: AppConfig.apiUrl,
    timeout: 5000,
    headers: {
        'Component-Key': document?.scripts['cb_lgpd_portnet']?.cb_id?.value as string || '234'
    }
});
export default client;
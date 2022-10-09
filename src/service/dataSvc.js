import axios from 'axios'
const API = 'http://localhost:8080/notifications';
export default {
    async getNotif (data){
        return await axios.post(`${API}`, data, null)
    }
}
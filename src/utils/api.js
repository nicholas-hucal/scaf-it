import axios from 'axios';
import { API_URL } from '../config';

const api = {
    authorization: () => axios.get(`${API_URL}/auth/profile`, { withCredentials: true }),
    logOut: `${API_URL}/auth/logout`,
    createComponent: (block) => axios.post(`${API_URL}/components/create`, block, { withCredentials: true }),
    getComponent: (block) => axios.post(`${API_URL}/components`, block, { withCredentials: true }),
    deleteComponent: (block_id) => axios.delete(`${API_URL}/components/${block_id}`, { withCredentials: true }),
    getComponentByUserId: () => axios.get(`${API_URL}/components`, { withCredentials: true }),
    createBlock: (block) => axios.post(`${API_URL}/block`, block, { withCredentials: true }),
    editBlock: (block) => axios.put(`${API_URL}/block`, block, { withCredentials: true }),
    deleteBlock: (block_id) => axios.delete(`${API_URL}/block/${block_id}`, { withCredentials: true }),
    createElement: (element) => axios.post(`${API_URL}/element`, element, { withCredentials: true }),
    editElement: (element) => axios.put(`${API_URL}/element`, element, { withCredentials: true }),
    deleteElement: (element_id) => axios.delete(`${API_URL}/element/${element_id}`, { withCredentials: true }),
}

export default api;
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const api = {
    authorization: () => axios.get(`${SERVER_URL}/auth/profile`, { withCredentials: true }),
    logOut: `${SERVER_URL}/auth/logout`,
    createComponent: (block) => axios.post(`${SERVER_URL}/components/create`, block, { withCredentials: true }),
    getComponent: (block) => axios.post(`${SERVER_URL}/components`, block, { withCredentials: true }),
    createBlock: (block) => axios.post(`${SERVER_URL}/block`, block, { withCredentials: true }),
    editBlock: (block) => axios.put(`${SERVER_URL}/block`, block, { withCredentials: true }),
    deleteBlock: (block_id) => axios.delete(`${SERVER_URL}/block/${block_id}`, { withCredentials: true }),
    createElement: (element) => axios.post(`${SERVER_URL}/element`, element, { withCredentials: true }),
    editElement: (element) => axios.put(`${SERVER_URL}/element`, element, { withCredentials: true }),
    deleteElement: (element_id) => axios.delete(`${SERVER_URL}/element/${element_id}`, { withCredentials: true }),
}

export default api;
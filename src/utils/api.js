import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const api = {
    authorization: () => axios.get(`${SERVER_URL}/auth/profile`, { withCredentials: true }),
    logOut: `${SERVER_URL}/auth/logout`,
    createZip: () => axios.get(`${SERVER_URL}`),
    submitComponent: (component) => axios.post(`${SERVER_URL}/components`, component),
    createBlock: (block) => axios.post(`${SERVER_URL}/block`, block),
    editBlock: (block) => axios.put(`${SERVER_URL}/block`, block),
    deleteBlock: (block) => axios.delete(`${SERVER_URL}/block/${block.id}`),
    createElement: (element) => axios.post(`${SERVER_URL}/element`, element),
    editElement: (element) => axios.post(`${SERVER_URL}/element`, element),
    deleteElement: (element_id) => axios.delete(`${SERVER_URL}/element/${element_id}`),
}

export default api;
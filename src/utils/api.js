import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const api = {
    authorization: () => axios.get(`${SERVER_URL}/auth/profile`, { withCredentials: true }),
    logOut: `${SERVER_URL}/auth/logout`,
    createZip: () => axios.get(`${SERVER_URL}`),
    submitComponent: (component) => axios.post(`${SERVER_URL}/components`, component)
}

export default api;
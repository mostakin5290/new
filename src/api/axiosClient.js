import axios from "axios"

const axiosClient =  axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://code-crack.onrender.com',
    // baseURL: 'http://192.168.217.174:3000',

    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;


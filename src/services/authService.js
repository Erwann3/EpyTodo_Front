import axios from 'axios';

const API_URL = "http://localhost:3000";

export async function register(email, password, firstname, name) {
    const response = await axios.post(`${API_URL}/register`, {
        email,
        password,
        firstname,
        name,
    });
    if (response.status !== 200) {
        throw new Error(response.data.msg);
    }
    return response.data.token;
}

export async function login(email, password) {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
    });
    console.log(response.status);
    if (response.status !== 200) {
        console.log(response.data.msg);
        throw new Error(response.data.msg);
    }
    return response.data.token;
}

import axios from "axios";

export const login = async (email, password) => {
    const response = await axios.post(process.env.API_URL + "/api/auth/login", {
        email,
        password
    });
    return response.data;
}

export const register = async ({email, password, firstName, lastName, age, role}) => {
    const response = await axios.post(process.env.API_URL + "/api/auth/register", {
        email,
        password,
        firstName,
        lastName,
        age,
        role
    });
    return response.data;
}

export const confirmRegistration = async (code) => {
    const response = await axios.get(process.env.API_URL + "/api/auth//register/confirmation/" + code);
    return response.data;
}

export const logout = async () => {
    const response = await axios.post(process.env.API_URL + "/api/auth/logout");
    return response.data;
}

export const checkAuth = async (token) => {
    axios.defaults.headers.common['Authorization'] = token;
    const response = await axios.get(process.env.API_URL + "/api/auth/checkAuth");
    return response.data;
}





import axios from "axios";

export const fetchCarDrivers = async (page) => {
    const response = await axios.get(process.env.API_URL + `/api/carDriver?page=${page}`);
    return response.data;
}

export const fetchNumberOfPages = async () => {
    const response = await axios.get(process.env.API_URL + `/api/carDriver/numberOfPages`);
    return response.data;
}

export const deleteCarDriver = async (carDriverId) => {
    const response = await axios.delete(process.env.API_URL + `/api/carDriver/${carDriverId}`);
    return response.data;
}

export const updateCarDriver = async (carDriver) => {
    const response = await axios.put(process.env.API_URL + `/api/carDriver/${carDriver.carDriverId}`, carDriver);
    return response.data;
}

export const createCarDriver = async (carDriver) => {
    const response = await axios.post(process.env.API_URL + `/api/carDriver`, carDriver);
    return response.data;
}

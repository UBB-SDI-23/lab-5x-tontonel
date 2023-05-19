import axios from "axios";

export const fetchDrivers = async (page, numberOfPages) => {
    const response = await axios.get(process.env.API_URL + `/api/driver?page=${page}` + `&numberOfPages=${numberOfPages}`);
    return response.data;
}

export const deleteDriver = async (driverId) => {
    const response = await axios.delete(process.env.API_URL + `/api/driver/${driverId}`);
    return response.data;
}

export const createDriver = async (driver) => {
    const response = await axios.post(process.env.API_URL + `/api/driver`, driver);
    return response.data;
}

export const updateDriver = async (driver) => {
    const response = await axios.put(process.env.API_URL + `/api/driver/${driver.driverId}`, driver);
    return response.data;
}

export const fetchNumberOfPages = async () => {
    const response = await axios.get(process.env.API_URL + `/api/driver/numberOfPages`);
    return response.data;
}

export const fetchDriversSuggestions = async (search) => {
    const response = await axios.get(process.env.API_URL + `/api/driver/autocomplete?name=${search}`);
    return response.data;
}

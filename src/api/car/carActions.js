import axios from 'axios';

export const fetchCars = async () => {
    const result = await axios.get(process.env.API_URL + '/api/car');
    return result.data;
}

export const deleteCar = async (id) => {
    return await axios.delete(process.env.API_URL + '/api/car/' + id);
}

export const updateCar = async (car) => {
    return await axios.put(process.env.API_URL + '/api/car/' + car.carId, car);
}

export const createCar = async (car) => {
    return await axios.post(process.env.API_URL + '/api/car', car);
}

export const filterCars = async (filter) => {
    const result = await axios.get(process.env.API_URL + '/api/car/filterByYear/' + filter);
    return result.data;
}
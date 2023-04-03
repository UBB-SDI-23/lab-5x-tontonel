import axios from 'axios';

export const fetchCars = async () => {
    const result = await fetch('/api/car');
    return result.data;
}

export const deleteCar = async (id) => {
    return await axios.delete('/api/car/' + id);
}

export const updateCar = async (car) => {
    return await axios.put('/api/car/' + car.carId, car);
}

export const createCar = async (car) => {
    return await axios.post('/api/car', car);
}

export const filterCars = async (filter) => {
    const result = await axios.get('/api/car/filterByYear/' + filter);
    return result.data;
}
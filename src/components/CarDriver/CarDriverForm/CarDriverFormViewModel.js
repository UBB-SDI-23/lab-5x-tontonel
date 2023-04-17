import { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import { fetchCarsSuggestions } from "../../../api/car/carActions";
import { fetchDriversSuggestions } from "../../../api/driver/driverActions";

export default function CarsModelView(props) {

    const [company, setCompany] = useState(props.data?.company === undefined ? "" : props.data.company);
    const [rating, setRating] = useState(props.data?.rating === undefined ? "" : props.data.rating);
    const [driver, setDriver] = useState(props.data?.driverId === undefined ? null : props.data.driverId);
    const [car, setCar] = useState(props.data?.carId === undefined ? null : props.data.carId);
    const [cars, setCars] = useState([]);
    const [drivers, setDrivers] = useState([]);

    const debouncedFetchCarsSuggestions = useCallback(debounce((search) => {
        fetchCarsSuggestions(search)
        .then((cars) => setCars(cars))
        .catch((err) => props.setError(err));
    }, 500), []);

    const debouncedFetchDriversSuggestions = useCallback(debounce((search) => {
        fetchDriversSuggestions(search)
        .then((drivers) => setDrivers(drivers))
        .catch((err) => props.setError(err));
    }, 500), []);

    const handleSave = () => {
        props.handleSave({
            carDriverId: props.data?.carDriverId,
            carId: car.carId,
            driverId: driver.driverId,
            company,
            rating,
        });
    }

    return {
        cars,
        drivers,
        company,
        rating,
        driver,
        car,
        setCompany,
        setRating,
        setDriver,
        setCar,
        handleSave,
        debouncedFetchCarsSuggestions,
        debouncedFetchDriversSuggestions,
    }
}
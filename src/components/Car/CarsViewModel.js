import { useEffect, useState } from "react";
import { fetchCars, fetchNumberOfCarPages } from "../../api/car/carActions";
import { MyContext } from "../context/Context";
import { useContext } from "react";

export default function CarsModelView(props) {

    const [cars, setCars] = useState([]);
    const [Error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedCarId, setSelectedCarId] = useState(null);
    const [numberOfPaginatedPages, setNumberOfPaginatedPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const { numberOfPages } = useContext(MyContext);

    useEffect(() => {
        fetchCars(currentPage, numberOfPages)
        .then((cars) => {
            cars.forEach((car) => {
                car.engineType = car.engineId?.type;
                car.id = car.carId;
                car.user = car.userId;
            })
            setCars(cars);
        })
        .catch((err) => setError(err));
        fetchNumberOfCarPages()
        .then((pages) => setNumberOfPaginatedPages(pages.numberOfPaginatedPages))
        .catch((err) => setError(err));
    }, [refresh, currentPage]);

    useEffect(() => {
        if(Error !== null)
            console.log(Error)
    }, [Error]);

    const onPageChanged = (event, value) => {
        setCurrentPage(value);
    }

    return {
        cars,
        editMode,
        refresh,
        selectedCarId,
        numberOfPaginatedPages,
        Error,
        setCars,
        setError,
        setRefresh,
        setEditMode,
        setSelectedCarId,
        onPageChanged
    }
}
import { useState, useEffect } from "react";
import { fetchCarDrivers} from "../../api/carDriver/carDriverActions";
import { fetchNumberOfPages } from "../../api/carDriver/carDriverActions";

export default function CarsModelView(props) {

    const [carDrivers, setCarDrivers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [selectedCarDriverId, setSelectedCarDriverId] = useState(null);
    const [Error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPaginatedPages, setNumberOfPaginatedPages] = useState(1);

    useEffect(() => {
        fetchCarDrivers(currentPage)
        .then((carDrivers) => {
            carDrivers.forEach((carDriver) => {
                carDriver.id = carDriver.carDriverId;
                carDriver.carMake = carDriver.carId.make;
                carDriver.driverName = carDriver.driverId.name;
            })
            setCarDrivers(carDrivers);
        })
        .catch((err) => setError(err));
        fetchNumberOfPages()
        .then((pages) => (setNumberOfPaginatedPages(pages.numberOfPaginatedPages)))
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
        carDrivers,
        editMode,
        refresh,
        selectedCarDriverId,
        currentPage,
        numberOfPaginatedPages,
        setEditMode,
        setRefresh,
        setError,
        setSelectedCarDriverId,
        onPageChanged,
    }
}
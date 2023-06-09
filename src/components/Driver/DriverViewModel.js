import { useEffect, useState } from "react";
import { fetchDrivers } from "../../api/driver/driverActions";
import { fetchNumberOfPages } from "../../api/driver/driverActions";
import { MyContext } from "../context/Context";
import { useContext } from "react";

export default function DriverTableViewModal () {

    const [drivers, setDrivers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [selectedDriverId, setSelectedDriverId] = useState(null);
    const [Error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPaginatedPages, setNumberOfPaginatedPages] = useState(1);
    const { numberOfPages } = useContext(MyContext);

    useEffect(() => {
        fetchDrivers(currentPage, numberOfPages)
        .then((drivers) => {
            drivers.forEach((driver) => {
                driver.id = driver.driverId;
                driver.user = driver.userId
            })
            setDrivers(drivers);
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
        drivers,
        editMode,
        refresh,
        selectedDriverId,
        currentPage,
        numberOfPaginatedPages,
        setEditMode,
        setRefresh,
        setError,
        setSelectedDriverId,
        onPageChanged,
    }

}
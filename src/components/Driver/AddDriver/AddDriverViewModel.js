import { useState } from "react";
import { createDriver } from "../../../api/driver/driverActions";

export default function DriverTableViewModal (props) {

    const {
        setRefresh,
        setError,
    } = props;

    const [isAddDriver, setIsAddDriver] = useState(false);

    const handleCancel = () => {
        setIsAddDriver(false);
    }

    const handleSave = (driver) => {
        createDriver(driver)
        .then(() => {
            setIsAddDriver(false);
            setRefresh(!props.refresh);
        })
        .catch((err) => {
            setError(err);
            setIsAddDriver(false);
        });
    }   

    const handleAddButtonPressed = () => {
        setIsAddDriver(true);
    }

    return {
        isAddDriver,
        handleCancel,
        handleSave,
        handleAddButtonPressed,
    }
}
import { createCarDriver } from "../../../api/carDriver/carDriverActions";
import { useState } from "react";

export default function AddCarDriverViewModel(props) {
    const {
        setRefresh,
        setError,
    } = props;

    const [isAddCarDriver, setIsAddCarDriver] = useState(false);

    const handleCancel = () => {
        setIsAddCarDriver(false);
    }

    const handleSave = (carDriver) => {
        createCarDriver(carDriver)
        .then(() => {
            setIsAddCarDriver(false);
            setRefresh(!props.refresh);
        })
        .catch((err) => {
            setError(err);
            setIsAddCarDriver(false);
        });
    }   

    const handleAddButtonPressed = () => {
        setIsAddCarDriver(true);
    }

    return {
        isAddCarDriver,
        handleCancel,
        handleSave,
        handleAddButtonPressed,
    }
}
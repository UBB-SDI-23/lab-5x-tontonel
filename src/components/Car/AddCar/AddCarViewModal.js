import React, { useState } from 'react';
import { createCar } from '../../../api/car/carActions';

export default function CarsModelView(props) {

    const {
        setError,
        setRefresh,
    } = props;

    const[isAddCar, setIsAddCar] = useState(false);

    const handleCancel = () => {
        setIsAddCar(false);
    }

    const handleSave = (car) => {
        createCar(car)
        .then(() => {
            setIsAddCar(false);
            setRefresh(!props.refresh);
        })
        .catch((err) => {
            setError(err);
            setIsAddCar(false);
        });
    }

    const handleAddButtonPressed = () => {
        setIsAddCar(true);
    }

    return {
        isAddCar,
        handleCancel,
        handleSave,
        handleAddButtonPressed,
    }
}
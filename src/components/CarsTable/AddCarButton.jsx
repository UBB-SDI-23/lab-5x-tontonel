import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import AddCarModal from "../CarModal/EditCarsModal";
import { createCar } from "../../api/car/carActions";

export default function AddCarButton(props) {
    const[isAddCar, setIsAddCar] = useState(false);

    const handleCancel = () => {
        setIsAddCar(false);
    }

    const handelSave = (car) => {
        createCar(car)
        .then(() => {
            setIsAddCar(false);
            props.setRefresh(!props.refresh);
        })
        .catch((err) => {
            console.log(err.response.data.message);
            setIsAddCar(false);
        });
    }

    return (
        <>
            <Container sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", p: "2rem"}}>
                <Button variant="contained" color="primary" onClick={() => setIsAddCar(true)}>Add Car</Button>
                <Button variant="contained" color="primary" onClick={() => props.setCars((prev) => [...prev].sort((car1, car2) => car1.price - car2.price))}>Sort cars</Button>
            </Container>
            <AddCarModal isOpen={isAddCar} handleSave={handelSave} handleCancel={handleCancel}/>
        </>
    )
}
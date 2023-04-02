import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

export default function CarsTableCell({setCarId, carId, value, ident, StyledTableCell, setEditMode, handleDeleteCar}) {
    return (
        ident !== "options" ?
        <StyledTableCell align="center">
                <Typography variant="h6" >
                  {value}
                </Typography>
        </StyledTableCell>
        :
        <StyledTableCell align="center">
            <Box sx={{ display: "flex", justifyContent: "space-around", width: "70%", mx: "auto"}}>
                <Button variant="contained" onClick={() => { setEditMode(true); setCarId(carId)}}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDeleteCar(carId)}>Delete</Button>
            </Box>
        </StyledTableCell>
    );
}
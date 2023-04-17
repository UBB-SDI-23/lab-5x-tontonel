import React from "react";
import useViewModal from "./CarDriverFormViewModel";
import { StyledTextField } from "../../../style/styledFormComponents";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";


export default function CarDriverForm(props) {
    
    const {
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
        debouncedFetchDriversSuggestions,
        debouncedFetchCarsSuggestions,
    } = useViewModal(props);

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: "2rem"}}>
            <Typography  variant="h6" sx={{ mx: "auto", mb: "1rem", display: "flex", justifyContent: "space-around"}} component={"div"}>Add/Edit carDrivers</Typography>
            <Autocomplete
                disablePortal
                id="free-solo-with-text-demo"
                selectOnFocus
                value={driver}
                onInputChange={(e, value) => debouncedFetchDriversSuggestions(value.split("|")[0])}
                onChange={(e, value) => setDriver(value)}
                options={drivers}
                sx={{ width: 300, mt: "2rem" }}
                getOptionLabel={((option) => option.name + " " + option.email)} 
                renderOption={(props, option) => <li {...props}>{option.name + " | " + option.email}</li>}
                freeSolo        
                renderInput={(params) => <TextField {...params} label="Drivers" variant="outlined" />
            }
            />
            <Autocomplete 
                disablePortal
                id="free-solo-with-text-demo"
                selectOnFocus
                value={car}
                onInputChange={(e, value) => debouncedFetchCarsSuggestions(value.split("|")[0])}
                onChange={(e, value) => setCar(value)}
                options={cars}
                sx={{ width: 300, m: "0.75rem" }}
                getOptionLabel={((option) => option.make +  " | " + option.model + " | " + option.color)} 
                renderOption={(props, option) => <li {...props}>{option.make + " " + option.model + " " + option.color}</li>}
                freeSolo        
                renderInput={(params) => <TextField {...params} label="Cars" variant="outlined" />
            }
            />
            <StyledTextField value={company} id="outlined-basic" type={"text"} label="Company" variant="outlined" onChange={(e) => setCompany(e.target.value)}/>
            <StyledTextField value={rating} id="outlined-basic" type={"number"} label="Rating" variant="outlined" onChange={(e) => setRating(e.target.value)}/>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start"}}>
                    <Button variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={handleSave}>Save</Button>
                    <Button color="secondary" variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={props.handleCancel}>Cancel</Button>
            </Box>
        </Container>
    )
}
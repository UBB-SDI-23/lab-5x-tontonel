import React from "react";
import { Typography, Box, Button, Container } from "@mui/material";
import { StyledTextField } from "../../../style/styledFormComponents";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import useViewModel from "./CarFormViewModel"

export default function CarForm(props) {

    const {
        engines,
        model,
        make,
        year,
        color,
        price,
        engine,
        setEngine,
        setModel,
        setMake,
        setYear,
        setColor,
        setPrice,
        handleSave,
        debounceFetchEngineSuggestions
    } = useViewModel(props);

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: "2rem"}}>
            <Typography  variant="h6" sx={{ mx: "auto", mb: "1rem", display: "flex", justifyContent: "space-around"}} component={"div"}>Add/Edit cars</Typography>
            <StyledTextField value={model} id="outlined-basic" type={"text"} label="Model" variant="outlined" onChange={(e) => setModel(e.target.value)}/>
            <StyledTextField value={make} id="outlined-basic" type={"text"} label="Make" variant="outlined" onChange={(e) => setMake(e.target.value)}/>
            <StyledTextField value={year} id="outlined-basic" type={"number"} label="Year" variant="outlined" onChange={(e) => setYear(parseInt(e.target.value))}/>
            <StyledTextField value={color} id="outlined-basic" type={"text"} label="Color" variant="outlined" onChange={(e) => setColor(e.target.value)}/>
            <StyledTextField value={price} id="outlined-basic" type={"number"} label="Price" variant="outlined" onChange={(e) => setPrice(parseInt(e.target.value))}/>
            <Autocomplete
                disablePortal
                id="free-solo-with-text-demo"
                selectOnFocus
                value={engine}
                onInputChange={(e, value) => debounceFetchEngineSuggestions(value)}
                onChange={(e, value) => setEngine(value)}
                options={engines}
                sx={{ width: 300 }}
                getOptionLabel={((option) => option.type)} 
                renderOption={(props, option) => <li {...props}>{option.type}</li>}
                freeSolo        
                renderInput={(params) => <TextField {...params} label="Engines" variant="outlined" />
            }
            />
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start"}}>
                    <Button variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={handleSave}>Save</Button>
                    <Button color="secondary" variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={props.handleCancel}>Cancel</Button>
            </Box>
        </Container>
    );
}
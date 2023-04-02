import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Container, FormControl } from "@mui/material";
import { StyledTextField, StyledFormControl } from "../../style/styledFormComponents";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { fetchEngines } from "../../api/engine/engineActions"

export default function CarForm(props) {

    useEffect(() => {
        fetchEngines()
        .then((engines) => setEngines(engines))
        .catch((err) => console.log(err));
    }, [])

    const [engines, setEngines] = useState([]);
    const [model, setModel] = useState(props.car?.model || "");
    const [make, setMake] = useState(props.car?.make || "");
    const [year, setYear] = useState(props.car?.year  || "");
    const [color, setColor] = useState(props.car?.color || "");
    const [price, setPrice] = useState(props.car?.price || "");
    const [engineId, setEngineId] = useState(props.car?.engineId?.engineId || "");


    const handleSave = () => {
        props.handleSave({
            ...props.car,
            engineId,
            model,
            make,
            year,
            color,
            price,
        });
    }

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: "2rem"}}>
            <Typography  variant="h6" sx={{ mx: "auto", mb: "1rem", display: "flex", justifyContent: "space-around"}} component={"div"}>Add/Edit cars</Typography>
            <StyledTextField value={model} id="outlined-basic" type={"text"} label="Model" variant="outlined" onChange={(e) => setModel(e.target.value)}/>
            <StyledTextField value={make} id="outlined-basic" type={"text"} label="Make" variant="outlined" onChange={(e) => setMake(e.target.value)}/>
            <StyledTextField value={year} id="outlined-basic" type={"number"} label="Year" variant="outlined" onChange={(e) => setYear(parseInt(e.target.value))}/>
            <StyledTextField value={color} id="outlined-basic" type={"text"} label="Color" variant="outlined" onChange={(e) => setColor(e.target.value)}/>
            <StyledTextField value={price} id="outlined-basic" type={"number"} label="Price" variant="outlined" onChange={(e) => setPrice(parseInt(e.target.value))}/>
            <StyledFormControl>
                <InputLabel id="demo-simple-select-label">EngineType</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={engines.find((engine) => engine.engineId === engineId)?.engineId || ""}
                    onChange={(e) => setEngineId(e.target.value)}
                >
                    {engines.map((engine) => (
                        <MenuItem key={engine.engineId} value={engine.engineId}>{engine.type}</MenuItem>
                    ))}
                </Select>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start"}}>
                    <Button variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={handleSave}>Save</Button>
                    <Button color="secondary" variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={props.handleCancel}>Cancel</Button>
                </Box>
            </StyledFormControl>
        </Container>
    );
}
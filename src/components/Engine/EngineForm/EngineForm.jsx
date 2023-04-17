import React from "react";
import useViewModal from "./EngineFormViewModal";
import { Button, Box, Container, Typography } from "@mui/material";
import { StyledTextField } from "../../../style/styledFormComponents";

export default function EngineForm(props) {

    const {
        name,
        type,
        capacity,
        consumtion,
        maxSpeed,
        setName,
        setType,
        setCapacity,
        setConsumtion,
        setMaxSpeed,
        handleSave
    } = useViewModal(props);

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: "2rem"}}>
            <Typography  variant="h6" sx={{ mx: "auto", mb: "1rem", display: "flex", justifyContent: "space-around"}} component={"div"}>Add/Edit engines</Typography>
            <StyledTextField value={name} id="outlined-basic" type={"text"} label="name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
            <StyledTextField value={type} id="outlined-basic" type={"text"} label="type" variant="outlined" onChange={(e) => setType(e.target.value)}/>
            <StyledTextField value={capacity} id="outlined-basic" type={"number"} label="capacity" variant="outlined" onChange={(e) => setCapacity(parseInt(e.target.value))}/>
            <StyledTextField value={consumtion} id="outlined-basic" type={"number"} label="consumtion" variant="outlined" onChange={(e) => setConsumtion(e.target.value)}/>
            <StyledTextField value={maxSpeed} id="outlined-basic" type={"number"} label="maxSpeed" variant="outlined" onChange={(e) => setMaxSpeed(parseInt(e.target.value))}/>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start"}}>
                    <Button variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={handleSave}>Save</Button>
                    <Button color="secondary" variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={props.handleCancel}>Cancel</Button>
            </Box>
        </Container>
    )
}
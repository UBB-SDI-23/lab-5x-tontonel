import React from "react";
import useViewModal from "./DriverFormViewModal";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { StyledTextField } from "../../../style/styledFormComponents";

export default function DriverForm(props) {
    const {
        name,
        email,
        phone,
        experience,
        setName,
        setEmail,
        setPhone,
        setExperience,
        handleSave,
    } = useViewModal(props);

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: "2rem"}}>
            <Typography  variant="h6" sx={{ mx: "auto", mb: "1rem", display: "flex", justifyContent: "space-around"}} component={"div"}>Add/Edit drivers</Typography>
            <StyledTextField value={name} id="outlined-basic" type={"text"} label="name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
            <StyledTextField value={email} id="outlined-basic" type={"email"} label="email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
            <StyledTextField value={phone} id="outlined-basic" type={"text"} label="phone" variant="outlined" onChange={(e) => setPhone(parseInt(e.target.value))}/>
            <StyledTextField value={experience} id="outlined-basic" type={"number"} label="experience" variant="outlined" onChange={(e) => setExperience(e.target.value)}/>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start"}}>
                    <Button variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={handleSave}>Save</Button>
                    <Button color="secondary" variant="contained" sx={{ mx: "auto", mt: "1rem", display: "flex", justifyContent: "space-around"}} onClick={props.handleCancel}>Cancel</Button>
            </Box>
        </Container>
    );
}
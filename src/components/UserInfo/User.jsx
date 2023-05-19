import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Avatar } from "@mui/material";
import useViewModel from "./UserViewModel";



export default function User(props) {

    const {
        user,
    } = useViewModel(props);

    return (
        <Container component="main" sx={{display: "flex", justifyContent:"center", }}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {user?.firstName?.charAt(0).toUpperCase() + user?.lastName?.charAt(0).toUpperCase()}
                </Avatar>
                <Box display={"flex"} alignContent={"center"} flexDirection={"column"} marginTop={"2rem"}>
                    <Typography variant="h4">{user?.firstName} {user?.lastName}</Typography>
                    <Typography variant="h6">Age: {user?.age}</Typography>
                    <Typography variant="h6">Cars: {user?.cars}</Typography>
                    <Typography variant="h6">Engines: {user?.engines}</Typography>
                    <Typography variant="h6">Drivers: {user?.drivers}</Typography>
                    <Typography variant="h6">CarDrivers: {user?.carDrivers}</Typography>
                </Box>
            </Box>
        </Container>
    );
}
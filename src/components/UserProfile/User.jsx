import React from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import useViewModel from "./UserViewModel";

export default function User(props) {

    const {
        user,
        setNrofPages,
        handleLogout,
        handleNumberOfPages,
    } = useViewModel(props);

    return (
        <Container component="main" sx={{display: "flex", justifyContent:"center", }}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {user?.firstName?.charAt(0).toUpperCase() + user?.lastName?.charAt(0).toUpperCase()}
                </Avatar>
                <Box display={"flex"} alignContent={"center"} flexDirection={"column"} marginTop={"2rem"}>
                    <Typography variant="h4">{user?.firstName} {user?.lastName}</Typography>
                    <TextField 
                        sx={{m: "1rem"}}
                        type="number"
                        name="numberOfPages"
                        onChange={(e) => setNrofPages(e.target.value)}
                        label="Number of pages"
                    />
                    <Button sx={{mb:"1rem"}} onClick={handleNumberOfPages}>setPages</Button>
                    <Button variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
                </Box>
            </Box>
        </Container>
    );
}
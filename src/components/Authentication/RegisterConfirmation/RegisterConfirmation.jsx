import React from "react";
import useViewModal from "./RegisterConfirmationViewModel";
import Container from '@mui/material/Container';
import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function RegisterConfirmation(props) {

    const navigate = useNavigate();

    const {
        activate,
        error,
        handleConfirmRegistration
    } = useViewModal(props);

    return (
        <>
        {!activate ?
        <Container component="main" maxWidth="xs">
            <Typography variant="h2" >
                Register Confirmation
            </Typography>
            <Box component="form" onSubmit={handleConfirmRegistration}>
                <TextField 
                    fullWidth
                    label="Confirmation Code"
                    variant="outlined"
                    margin="normal"
                    name="code"
                    id="code"
                    type="number"
                    autoFocus
                    error={error === true}
                    helperText={error === true ? "Confirmation code is incorrect" : ""} 
                />
                <Button type="submit">
                    Confirm Code
                </Button>
            </Box>
        </Container>
        :
        <Container component="main" maxWidth="xs">
            <Typography variant="h2" >
                Account activated
            </Typography>
            <Button onClick={navigate("/login")}>
                Login
            </Button>
        </Container>
        }   
        </>
    )
}
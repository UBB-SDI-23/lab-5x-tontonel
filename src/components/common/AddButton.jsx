import React from 'react';
import { Button } from '@mui/material';
import { Container } from '@mui/system';

export default function AddButton({ handleAddButtonPressed, message }) {
    return (
        <Container sx={{display: "flex", justifyContent: "center", mt: "1rem"}}>
            <Button variant="contained" color="primary" onClick={handleAddButtonPressed}>{message}</Button>
        </Container>
    )
}
import React, {useContext} from 'react';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useRole } from '../context/Context';
import { MyContext } from '../context/Context';

export default function AddButton({ handleAddButtonPressed, message }) {

    // const { role } = useRole();
    // console.log(role);

    const { user } = useContext(MyContext);
    const role = user?.role;
    console.log(role)

    return (
        <Container sx={{display: "flex", justifyContent: "center", mt: "1rem"}}>
            <Button disabled={(role !== "moderator" && role !== "admin" && role !== "regular")} variant="contained" color="primary" onClick={handleAddButtonPressed}>{message}</Button>
        </Container>
    )
}
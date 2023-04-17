import React from 'react';
import { Pagination } from '@mui/material';
import { Container } from '@mui/system';

export default function PaginationView({ count, onChange }) {
    return (
        <Container sx={{ display: "flex", justifyContent: "center", mt: "2rem", mb: "1rem"}}>
            <Pagination count={count} onChange={onChange}/>
        </Container>
    )
}

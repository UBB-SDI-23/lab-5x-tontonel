import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { StyledTableCell } from "../../style/styledComponents";

export default function ProjectTableCell({ setSelectedId, value, ident, setEditMode, handleDelete, id }) {
    return (
        ident !== "options" ?
        <StyledTableCell align="center">
                <Typography variant="h6" >
                  {value}
                </Typography>
        </StyledTableCell>
        :
        <StyledTableCell align="center">
            <Box sx={{ display: "flex", justifyContent: "space-around", width: "70%", mx: "auto"}}>
                <Button variant="contained" onClick={() => {setEditMode(true); setSelectedId(id)}}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(id)}>Delete</Button>
            </Box>
        </StyledTableCell>
    );
}
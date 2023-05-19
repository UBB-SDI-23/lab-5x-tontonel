import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { StyledTableCell } from "../../style/styledComponents";
import { Link } from "react-router-dom";
import { useRole } from "../context/Context";
import { checkAuth } from "../../api/auth/auth";
import { useAuth } from "../context/Context";

export default function ProjectTableCell({ setSelectedId, value, ident, setEditMode, handleDelete, id, user }) {

    const role  = useRole();
    const token = useAuth();

    const handleCheckRole = () => {
        if (role === "moderator" || role === "admin") {
            return false;
        } else if(role === "regular") {
            checkAuth(token).then((user) => {
                if (user.id === user) {
                    return false;
                } else {
                    return true;
                }
            });
        }
        return true;
    }
    return (
        ident === "options" ?
        <StyledTableCell align="center">
            <Box sx={{ display: "flex", justifyContent: "space-around", width: "70%", mx: "auto"}}>
                <Button disabled={handleCheckRole()} variant="contained" onClick={() => {setEditMode(true); setSelectedId(id)}}>Edit</Button>
                <Button disabled={handleCheckRole()} variant="contained" color="secondary" onClick={() => handleDelete(id)}>Delete</Button>
            </Box>
        </StyledTableCell>
        : ident === 'user' ?
        <StyledTableCell align="center">
            <Link to={`/user/${value}`}>
                <Typography variant="h6" >
                    user
                </Typography>
            </Link>
        </StyledTableCell>
        : 
        <StyledTableCell align="center">
            <Typography variant="h6" >
            {value}
            </Typography>
        </StyledTableCell>
    );
}
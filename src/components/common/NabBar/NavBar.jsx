import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useViewModel from "./NavBarViewModel";

export default function NavBar(props) {

  const {
    token,
    handleLogout
  } = useViewModel(props);

  const pages = ["Car", "Engine", "Driver", "Cardriver"];

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar variant="dense">
            {token === null ?
              <>
                <MenuItem>
                  <Link style={{textDecoration: "none", color: "white"}} to="/login">Login</Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{textDecoration: "none", color: "white"}} to="/register">Register</Link>
                </MenuItem>
              </>
            : <>  
                <MenuItem>
                  <Link style={{textDecoration: "none", color: "white"}} to="/profile">Profile</Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{textDecoration: "none", color: "white"}} to="/car" onClick={handleLogout}>Logout</Link>
                </MenuItem>
              </>
            }
            <Typography sx={{ mx: "auto" }} variant="h6" color="inherit" component="div">
                F1 Cars
            </Typography>
            {pages.map((page, index) => (
              <MenuItem>
                <Link style={{textDecoration: "none", color: "white"}} to={`/${page.toLowerCase()}`}>{page}</Link>
              </MenuItem>
            ))}
            </Toolbar>
        </AppBar>
    </Box>
  );
}
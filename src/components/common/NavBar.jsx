import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function NavBar() {

  const pages = ["Car", "Engine", "Driver", "Cardriver"];

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
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
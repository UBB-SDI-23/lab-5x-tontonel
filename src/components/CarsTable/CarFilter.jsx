import React, { useState } from "react";
import { Box, Typography, TextField, IconButton, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function CarFilter({ handleFilter }) {
    const [filter, setFilter] = useState("");

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "5px"}}>
            <Typography variant="h6" component="div">Cars Table</Typography>
            <Box>
                <TextField 
                    id="outlined-basic" 
                    type={"number"} 
                    label="Filter by year" 
                    variant="outlined" 
                    size="small" 
                    onChange={(e) => setFilter(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && handleFilter(filter)}
                />
                <IconButton 
                    aria-label="search" 
                    type="submit" 
                    onClick={() => handleFilter(filter)}
                    >
                    <SearchIcon style={{ fill: "blue" }}/>
                </IconButton>
            </Box>
        </Box>
    )
}
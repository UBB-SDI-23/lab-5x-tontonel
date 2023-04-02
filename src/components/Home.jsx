import React from "react";
import CarsTable from "./CarsTable/CarsTable";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import AddCarButton from "./CarsTable/AddCarButton";

export default function Home() {
    return (
        <Box>
            <NavBar />
            <CarsTable />
        </Box>
    );
}
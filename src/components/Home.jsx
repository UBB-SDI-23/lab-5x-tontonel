import React from "react";
import CarsTable from "./CarsTable/CarsTable";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";

export default function Home() {
    return (
        <Box>
            <NavBar />
            <CarsTable />
        </Box>
    );
}
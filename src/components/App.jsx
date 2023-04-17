import React from "react";
import Car from "./Car/Car";
import Engine from "./Engine/Engine";
import Driver from "./Driver/Driver";
import CarDriver from "./CarDriver/CarDriver";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route exact path="/car" element={<Car />} />
                    <Route path="/engine" element={<Engine />} />
                    <Route path="/driver" element={<Driver />} />
                    <Route path="/cardriver" element={<CarDriver />} />
                {/* <Route path="/engine">
                    <Engine />
                </Route>
                <Route path="/driver">
                    <Driver />
                </Route>
                <Route path="/cardriver">
                    <CarDriver />
                </Route> */}
                </Route>
            </Routes>
        </Router>
    );
}
    
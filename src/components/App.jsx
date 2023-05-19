import React from "react";
import Car from "./Car/Car";
import Engine from "./Engine/Engine";
import Driver from "./Driver/Driver";
import CarDriver from "./CarDriver/CarDriver";
import Login from "./Authentication/Login/Login";
import { MyProvider } from "./context/Context";
import Register from "./Authentication/Register/Register";
import ConfirmRegistration from "./Authentication/RegisterConfirmation/RegisterConfirmation";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import User from "./UserProfile/User";
import UserInfo from "./UserInfo/User";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


export default function App() {

    return (
        <MyProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route path="/profile" element={
                            <RequireAuth>
                                <User />
                            </RequireAuth>
                        }/>
                        <Route exact path="/car" element={<Car />} />
                        <Route path="/engine" element={<Engine />} />
                        <Route path="/driver" element={<Driver />} />
                        <Route path="/cardriver" element={<CarDriver />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/confirmRegistration" element={<ConfirmRegistration />} />
                        <Route path="/user/:userId" element={<UserInfo />} />              
                    </Route>
                </Routes>
            </Router>
        </MyProvider>
    );
}
    
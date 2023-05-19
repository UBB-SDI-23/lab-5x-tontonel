import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/Context";
import React from "react";

export default function RequireAuth({ children }) {

    const token = useAuth();

    if(token != null) {
        return children;
    }

    return <Navigate to="/login" />;
}

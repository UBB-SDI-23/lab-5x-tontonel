import { useState, useEffect } from "react";
import { useAuth } from "../context/Context";
import { checkAuth } from "../../api/auth/auth";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import { useContext } from "react";


export default function UserViewModel() {

    const navigate = useNavigate();

    const token = useAuth();

    const { setNumberOfPages } = useContext(MyContext);

    const [user, setUser] = useState({});

    const [nrofPages, setNrofPages] = useState(0);

    useEffect(() => {   
        checkAuth(token)
        .then((response) => {
            console.log(response);
            setUser({
                email: response.email,
                firstName: response.firstName,
                lastName: response.lastName,
                age: response.age,
            });
        })
        .catch(() => {
            setUser({
                isAuthenticated: false,
                token: null
            });
        })
    }, []);

    const handleLogout = () => {
        setUser({
            isAuthenticated: false,
            token: null
        });
        localStorage.removeItem("token");
        navigate("/login");
    }

    const handleNumberOfPages = () => {
        setNumberOfPages(nrofPages);
    }

    return {
        user,
        setUser,
        setNrofPages,
        handleLogout,
        handleNumberOfPages
    }
}
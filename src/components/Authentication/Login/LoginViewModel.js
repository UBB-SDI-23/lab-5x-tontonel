import { login } from "../../../api/auth/auth";
import { useContext, useState } from "react";
import { MyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function LoginViewModel(props) {

    const { setUser } = useContext(MyContext);
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");
        try {
            const response = await login(email, password);
            setUser({ 
                isAuthenticated: true,
                token: response.token,
                role: response.user.role
            });
            localStorage.setItem("token", response.token);
            localStorage.setItem("role", response.user.role);
            navigate("/car");
        } catch (error) {
            console.log(error);
            setErrorLogin(true);
        }
    }

    return {
        errorLogin,
        handleLogin,
    }
}

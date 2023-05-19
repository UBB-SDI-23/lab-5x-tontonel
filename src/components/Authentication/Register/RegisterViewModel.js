import { useState } from "react";
import { register } from "../../../api/auth/auth";
import { useNavigate } from "react-router-dom";

export default function RegisterViewModel(props) {

    const navigate = useNavigate();
    const [passwordStrength, setPasswordStrength] = useState(true);
    const [samePassword, setSamePassword] = useState(true);
    const [password, setPassword] = useState("");

    const handleRegister = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const confirmPassword = data.get("confirmPassword");
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const age = data.get("age");
        const role = data.get("role").toLowerCase();
        if(password !== confirmPassword) setSamePassword(false);
        if(passwordStrength === false || password !== confirmPassword) return;
        const user = {
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
            age,
            role
        }
        try {
            await register(user)
            navigate("/confirmRegistration");
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnPasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password);
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPasswordStrength(strongPasswordRegex.test(password));
    }

    return {
        samePassword,
        passwordStrength,
        password,
        setPasswordStrength,
        setPassword,    
        setSamePassword,
        handleRegister,
        handleOnPasswordChange
    }
}
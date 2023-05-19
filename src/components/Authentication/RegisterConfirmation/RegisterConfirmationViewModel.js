import { confirmRegistration } from "../../../api/auth/auth";
import { useState } from "react";

export default function RegisterConfirmationViewModel(props) {

    const [activate, setActivate] = useState(false);
    const [error, setError] = useState(false);

    const handleConfirmRegistration = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const code = data.get("code");
        try {
            await confirmRegistration(code);
            setActivate(true);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    return {
        activate,
        error,
        handleConfirmRegistration,
    }

}
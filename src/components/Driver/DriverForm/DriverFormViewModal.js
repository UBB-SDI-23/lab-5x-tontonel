import { useState } from "react";

export default function CarsModelView(props) {

    const [name, setName] = useState(props.data?.name === undefined ? "" : props.data.name);
    const [email, setEmail] = useState(props.data?.email === undefined ? "" : props.data.email);
    const [phone, setPhone] = useState(props.data?.phone === undefined ? "" : props.data.phone);
    const [experience, setExperience] = useState(props.data?.experience === undefined ? "" : props.data.experience);

    const handleSave = () => {
        props.handleSave({
            driverId: props.data?.id,
            name,
            email,
            phone,
            experience,
        });
    }

    return {
        name,
        email,
        phone,
        experience,
        setName,
        setEmail,
        setPhone,
        setExperience,
        handleSave,
    }
}
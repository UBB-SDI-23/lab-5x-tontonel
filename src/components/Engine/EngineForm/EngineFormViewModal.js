import { useState } from "react";

export default function CarsModelView(props) {

    const [name, setName] = useState(props.data?.name === undefined ? "" : props.data.name);
    const [type, setType] = useState(props.data?.type === undefined ? "" : props.data.type);
    const [capacity, setCapacity] = useState(props.data?.capacity === undefined ? "" : props.data.capacity);
    const [consumtion, setConsumtion] = useState(props.data?.consumtion === undefined ? "" : props.data.consumtion);
    const [maxSpeed, setMaxSpeed] = useState(props.data?.maxSpeed === undefined ? "" : props.data.maxSpeed);

    const handleSave = () => {
        props.handleSave({
            engineId: props.data?.id,
            name,
            type,
            capacity,
            consumtion,
            maxSpeed,
        });
    }

    return {
        name,
        type,
        capacity,
        consumtion,
        maxSpeed,
        setName,
        setType,
        setCapacity,
        setConsumtion,
        setMaxSpeed,
        handleSave,
    }
    
}
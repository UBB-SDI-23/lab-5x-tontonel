import { useState } from "react";
import { createEngine } from "../../../api/engine/engineActions";

export default function AddEngineModelView(props) {
    
    const {
        setError,
        setRefresh,
    } = props;

    const [isAddEngine, setIsAddEngine] = useState(false);

    const handleCancel = () => {
        setIsAddEngine(false);
    }

    const handleSave = (engine) => {
        createEngine(engine)
        .then(() => {
            setIsAddEngine(false);
            setRefresh(!props.refresh);
        })
        .catch((err) => {
            setError(err);
            setIsAddEngine(false);
        });
    }
    const handleAddButtonPressed = () => {
        setIsAddEngine(true);
    }

    return {
        isAddEngine,
        handleCancel,
        handleSave,
        handleAddButtonPressed,
    }
}
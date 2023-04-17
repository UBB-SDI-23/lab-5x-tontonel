import { updateEngine } from "../../../api/engine/engineActions";

export default function EditEngineModelView(props) {

    const {
        engines,
        editMode,
        selectedEngineId,
        setError,
        setRefresh,
        setEditMode,
    } = props;

    const handleSave = (engine) => {
        updateEngine(engine)
        .then(() => {
            setRefresh((prev) => !prev);
            setEditMode(false);
        })
        .catch((err) => {
            setError(err);
            setEditMode(false);
        });
    }

    const handleCancel = () => {
        setEditMode(false);
    }

    return {
        editMode,
        engine: engines.find((engine) => engine.id === selectedEngineId),
        handleSave,
        handleCancel,
    }
}
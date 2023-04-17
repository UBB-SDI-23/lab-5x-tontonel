import { deleteEngine } from "../../../api/engine/engineActions";

export default function EnginesTableModelView(props) {
    const {
        engines,
        setError,
        setRefresh,
        setEditMode,
        setSelectedEngineId,
    } = props;
    
    const handleDeleteEngine = (engineId) => {
        deleteEngine(engineId)
        .then(() => setRefresh((prev) => !prev))
        .catch((err) => setError(err));
    };
    
    return {
        engines,
        setEditMode,
        setSelectedEngineId,
        handleDeleteEngine,
    };
}
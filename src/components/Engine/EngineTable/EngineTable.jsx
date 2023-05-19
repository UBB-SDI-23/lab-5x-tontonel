import React from "react";
import useViewModal from "./EngineTableViewModel";
import ProjectTable from "../../common/ProjectTable";

export default function EngineTable(props) {
    const {
        engines,
        setEditMode,
        setSelectedEngineId,
        handleDeleteEngine,
    } = useViewModal(props);

    const attribuites = ["name", "type", "capacity", "consumtion", "maxSpeed", "user", "options"]

    return (
        <ProjectTable
            data={engines}
            attributes={attribuites}
            setSelectedId={setSelectedEngineId}
            setEditMode={setEditMode}
            handleDelete={handleDeleteEngine}
        />
    );
}
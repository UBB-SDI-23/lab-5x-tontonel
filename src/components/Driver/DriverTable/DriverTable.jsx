import React from "react";
import useViewModal from "./DriverTableViewModel";
import ProjectTable from "../../common/ProjectTable";

export default function DriverTable(props) {

    const {
        drivers,
        setEditMode,
        setSelectedDriverId,
        handleDeleteDriver,
    } = useViewModal(props);

    const driverAttribuites = ["name", "email", "phone", "experience", "options"];
    return (
        <ProjectTable
            data={drivers}
            attributes={driverAttribuites}
            setSelectedId={setSelectedDriverId}
            setEditMode={setEditMode}
            handleDelete={handleDeleteDriver}
        />
    );
}
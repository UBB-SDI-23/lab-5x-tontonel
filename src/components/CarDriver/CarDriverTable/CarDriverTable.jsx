import React from "react";
import useViewModal from "./CarDriverTableViewModel";
import ProjectTable from "../../common/ProjectTable";

export default function CarDriverTable(props) {
    const {
        carDrivers,
        setEditMode,
        setSelectedCarDriverId,
        handleDeleteCarDriver,
    } = useViewModal(props);

    const carDriverAttribuites = ["carMake", "driverName", "company", "rating", "user", "options"];
    return (
        <ProjectTable
            data={carDrivers}
            attributes={carDriverAttribuites}
            setSelectedId={setSelectedCarDriverId}
            setEditMode={setEditMode}
            handleDelete={handleDeleteCarDriver}
        />
    );
}
import React from "react";
import useViewModal from "./CarDriverViewModel";
import NavBar from "../common/NabBar/NavBar";
import CarDriverTable from "./CarDriverTable/CarDriverTable";
import EditCarDriverModal from "./CarDriverModal/EditCarDriverModal";
import AddCarDriver from "./AddCarDriver/AddCarDriver";
import Pagination  from "../common/Pagination";

export default function CarDriver(props) {
   
    const {
        carDrivers,
        editMode,
        selectedCarDriverId,
        numberOfPaginatedPages,
        setEditMode,
        setRefresh,
        setError,
        setSelectedCarDriverId,
        onPageChanged,
    } = useViewModal(props);

    return (
        <>
            <NavBar />
            <CarDriverTable
                carDrivers={carDrivers}
                selectedCarDriverId={selectedCarDriverId}
                setError={setError}
                setRefresh={setRefresh}
                setEditMode={setEditMode}
                setSelectedCarDriverId={setSelectedCarDriverId}
            />
            <EditCarDriverModal
                carDrivers={carDrivers}
                editMode={editMode}
                selectedCarDriverId={selectedCarDriverId}
                setEditMode={setEditMode}
                setRefresh={setRefresh}
                setError={setError}
            />
            <AddCarDriver 
                setRefresh={setRefresh}
                setError={setError}
            />
            <Pagination count={numberOfPaginatedPages} onChange={onPageChanged} />
        </>
    );

    
}
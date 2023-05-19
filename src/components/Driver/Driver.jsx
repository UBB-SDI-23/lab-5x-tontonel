import React from "react";
import useViewModal from "./DriverViewModel";
import NavBar from "../common/NabBar/NavBar";
import DriverTable from "./DriverTable/DriverTable";
import AddDriver from "./AddDriver/AddDriver";
import EditDriverModal from "./DriverModal/EditDriverModal";
import Pagination  from "../common/Pagination";

export default function Driver() {
  
    const {
        drivers,
        editMode,
        selectedDriverId,
        numberOfPaginatedPages,
        setEditMode,
        setSelectedDriverId,
        setError,
        setRefresh,
        onPageChanged
    } = useViewModal();

    return (
        <>
            <NavBar />
            <DriverTable 
                drivers={drivers}
                selectedDriverId={selectedDriverId}
                setError={setError}
                setRefresh={setRefresh}
                setEditMode={setEditMode}
                setSelectedDriverId={setSelectedDriverId}
            />
            <AddDriver
                setRefresh={setRefresh}
                setError={setError}
            />
            <EditDriverModal 
                 drivers={drivers}
                 editMode={editMode}
                 selectedDriverId={selectedDriverId}
                 setEditMode={setEditMode}
                 setRefresh={setRefresh}
                 setError={setError}
            />
            <Pagination count={numberOfPaginatedPages} onChange={onPageChanged} />
        </>

    )

}
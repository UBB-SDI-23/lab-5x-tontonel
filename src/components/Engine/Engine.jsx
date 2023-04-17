import React from "react";
import useViewModal from "./EngineViewModel";
import NavBar from "../common/NavBar";
import EngineTable from "./EngineTable/EngineTable";
import AddEngineModal from "./AddEngine/AddEngine";
import EditEngineModal from "./EngineModal/EditEngineModal";
import Pagination from "../common/Pagination";

export default function EngineView() {
    const {
        engines,
        editMode,
        selectedEngineId,
        numberOfPaginatedPages,
        setEditMode,
        setSelectedEngineId,
        setError,
        setRefresh,
        onPageChanged
    } = useViewModal();
    
    return (
        <>
            <NavBar />
            <EngineTable 
                engines={engines}
                selectedEngineId={selectedEngineId}
                setError={setError}
                setRefresh={setRefresh}
                setEditMode={setEditMode}
                setSelectedEngineId={setSelectedEngineId} 
            />
            <AddEngineModal
                setRefresh={setRefresh}
                setError={setError}
            />
            <EditEngineModal
                engines={engines}
                editMode={editMode}
                selectedEngineId={selectedEngineId}
                setEditMode={setEditMode}
                setRefresh={setRefresh}
                setError={setError}
            />
            <Pagination count={numberOfPaginatedPages} onChange={onPageChanged}/>
        </>
    );
    }

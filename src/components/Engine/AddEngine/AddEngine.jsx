import React from "react";
import useViewModal from "./AddEngineViewModal";
import AddModal from "../../common/AddModal";
import EngineForm from "../EngineForm/EngineForm";
import AddButton from "../../common/AddButton";

export default function AddEngineModal(props) {
    const {
        isAddEngine,
        handleSave,
        handleCancel,
        handleAddButtonPressed
    } = useViewModal(props);

    return (
        <>
            <AddButton handleAddButtonPressed={handleAddButtonPressed} message="Add engine"/>
            <AddModal
                isOpen={isAddEngine}
                handleCancel={handleCancel}
                handleSave={handleSave}
                Form={EngineForm}  
            />
        </>
    )
}
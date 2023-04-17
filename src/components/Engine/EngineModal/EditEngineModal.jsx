import React from "react";
import useViewModal from "./EditEngineModalViewModel";
import EditModal from "../../common/AddModal";
import EngineForm from "../EngineForm/EngineForm";

export default function EditEngineModal(props) {
    const {
        editMode,
        engine,
        handleCancel,
        handleSave,
    } = useViewModal(props);

    return (
        <EditModal
            isOpen = {editMode} 
            handleCancel = {handleCancel}
            handleSave = {handleSave}
            data = {engine}
            Form = {EngineForm}
        />
    )
}
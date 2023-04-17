import React from 'react';
import EditModal from "../../common/AddModal";
import CarForm from "../CarForm/CarForm";
import useViewModal from "./EditCarModalViewModel";


export default function EditCarModal(props) {
    const {
        editMode,
        car,
        handleCancel,
        handleSave,
    } = useViewModal(props);

    return (
        <EditModal
            isOpen = {editMode} 
            handleCancel = {handleCancel}
            handleSave = {handleSave}
            data = {car}
            Form = {CarForm}
        />
    )
}

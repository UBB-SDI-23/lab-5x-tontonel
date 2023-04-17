import React from "react";
import useViewModal from "./EditCarDriverModalViewModel";
import EditModal from "../../common/AddModal";
import CarDriverForm from "../CarDriverForm/CarDriverForm";

export default function EditCarDriverModal(props) {

    const {
        editMode,
        carDriver,
        handleCancel,
        handleSave,
    } = useViewModal(props);

    return (
        <>
            <EditModal 
                isOpen = {editMode}
                handleCancel = {handleCancel}
                handleSave = {handleSave}
                data = {carDriver}
                Form = {CarDriverForm}
            />
        </>
    )
}
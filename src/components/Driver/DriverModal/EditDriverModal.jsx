import React from "react";
import useViewModal from "./EditDriverModalViewModel";
import EditModal from "../../common/AddModal";
import DriverForm from "../DriverForm/DriverForm";

export default function DriverEdit(props) {

    const {
        editMode,
        driver,
        handleCancel,
        handleSave,
    } = useViewModal(props);

    return (
        <>
            <EditModal 
                isOpen = {editMode}
                handleCancel = {handleCancel}
                handleSave = {handleSave}
                data = {driver}
                Form = {DriverForm}
            />
        </>
    )
}
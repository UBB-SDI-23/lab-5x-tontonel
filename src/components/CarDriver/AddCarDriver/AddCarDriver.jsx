import React from "react";
import useViewModal from "./AddCarDriverViewModel";
import AddModal from "../../common/AddModal";
import CarDriverForm from "../CarDriverForm/CarDriverForm";
import AddButton from "../../common/AddButton";

export default function AddCarDriver(props) {
    
    const {
        isAddCarDriver,
        handleCancel,
        handleSave,
        handleAddButtonPressed
    } = useViewModal(props);

    return (
        <>
            <AddButton handleAddButtonPressed={handleAddButtonPressed} message="Add carDriver"/>
            <AddModal 
                isOpen = {isAddCarDriver}
                handleCancel = {handleCancel}
                handleSave = {handleSave}
                Form = {CarDriverForm}
            />
        </>
    )
}
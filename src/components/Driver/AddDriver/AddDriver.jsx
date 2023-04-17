import React from "react";
import useViewModal from "./AddDriverViewModel";
import AddButton from "../../common/AddButton";
import AddModal from "../../common/AddModal";
import DriverForm from "../DriverForm/DriverForm";

export default function AddDriver(props) {

    const {
        isAddDriver,
        handleSave,
        handleCancel,
        handleAddButtonPressed
    } = useViewModal(props);

    return (
        <>
            <AddButton handleAddButtonPressed={handleAddButtonPressed} message="Add driver"/>
            <AddModal
                isOpen={isAddDriver}
                handleCancel={handleCancel}
                handleSave={handleSave}
                Form={DriverForm}  
            />
        </>
    )
}
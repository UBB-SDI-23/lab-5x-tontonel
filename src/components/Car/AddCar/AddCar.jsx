import React from "react";
import AddModal from "../../common/AddModal";
import CarForm from "../CarForm/CarForm";
import useViewModal from "./AddCarViewModal";
import  AddButton  from "../../common/AddButton";

export default function AddCarButton(props) {
    
    const {
        isAddCar,
        handleSave,
        handleCancel,
        handleAddButtonPressed
    } = useViewModal(props);

    return (
        <>
            <AddButton handleAddButtonPressed={handleAddButtonPressed} message="Add car"/>
            <AddModal
                isOpen={isAddCar}
                handleCancel={handleCancel}
                handleSave={handleSave}
                Form={CarForm}  
            />
        </>
    )
}
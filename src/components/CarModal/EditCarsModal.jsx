import React from 'react';
import { Dialog } from '@mui/material';
import Form from './CarForm';

export default function EditCarsModal({ isOpen, handleCancel, handleSave, car}) {
    return (
        <Dialog 
            open={isOpen}
            onClose={() => {}}  
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Form 
                handleCancel={handleCancel}
                car={car}
                handleSave={handleSave}
             />
        </Dialog>
    )
}

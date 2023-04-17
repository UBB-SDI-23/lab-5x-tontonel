import React from 'react';
import { Dialog } from '@mui/material';


export default function EditModal({ isOpen, handleCancel, handleSave, data, Form}) {
    return (
        <Dialog 
            open={isOpen}
            onClose={() => {}}  
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Form 
                data={data}
                handleCancel={handleCancel}
                handleSave={handleSave}
             />
        </Dialog>
    )
}

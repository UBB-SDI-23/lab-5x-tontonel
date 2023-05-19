import React from 'react';
import NavBar from '../common/NabBar/NavBar';
import useViewModal from './CarsViewModel';
import CarsFilter from './CarFilter/CarFilter';
import CarsTable from './CarTable/CarTable';
import EditCarModal from './CarModal/EditCarModal';
import AddCar from './AddCar/AddCar';
import Pagination from '../common/Pagination';

export default function Car() {

    const { 
        cars,  
        editMode,
        selectedCarId,
        refresh, 
        numberOfPaginatedPages,
        setCars,
        setEditMode,
        setSelectedCarId,
        setError, 
        setRefresh,
        onPageChanged
    } =  useViewModal();

    return (
        <>
            <NavBar />
            <CarsFilter 
                setCars={setCars}
                setError={setError}
                setRefresh={setRefresh}
            />
            <CarsTable  
                cars={cars}
                editMode={editMode}
                refresh={refresh}
                selectedCarId={selectedCarId}
                setError={setError}
                setRefresh={setRefresh}
                setEditMode={setEditMode}
                setSelectedCarId={setSelectedCarId}
            />
            <AddCar 
                setRefresh={setRefresh}
                setError={setError}
            />
            <EditCarModal 
                cars={cars}
                editMode={editMode}
                selectedCarId={selectedCarId}
                setEditMode={setEditMode}
                setSelectedCarId={setSelectedCarId}
                setRefresh={setRefresh}
                setError={setError}
            />
            <Pagination count={numberOfPaginatedPages} onChange={onPageChanged}/>

        </>
    )
}


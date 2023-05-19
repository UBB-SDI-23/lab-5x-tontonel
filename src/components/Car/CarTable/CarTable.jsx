import React from 'react';
import useViewModal from './CarsTableViewModal';
import ProjectTableView from '../../common/ProjectTable';


export default function CarsTable(props) {

  const {
    cars,
    setSelectedCarId,
    setEditMode,
    handleDeleteCar,
  } = useViewModal(props);

  const carAttributes = ["model", "make", "color", "price", "engineType", "year", "user", "options"];

  return (
    <>
      <ProjectTableView
        data={cars}
        attributes={carAttributes}
        setSelectedId={setSelectedCarId}
        setEditMode={setEditMode}
        handleDelete={handleDeleteCar}
      />
    </>
  );
}
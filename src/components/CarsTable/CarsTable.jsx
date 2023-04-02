import {useEffect, useState} from 'react';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchCars, deleteCar, updateCar, filterCars } from '../../api/car/carActions';
import CarsTableCell from './CarsTableCell';
import { StyledTableCell, StyledTableRow } from '../../style/styledComponents';
import EditCarsModal from '../CarModal/EditCarsModal';
import AddCarButton from './AddCarButton';
import CarFilter from './CarFilter';

export default function CarsTable() {
  const [cars, setCars] = useState([]);
  const [Error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    fetchCars()
    .then((cars) => setCars(cars))
    .catch((err) => setError(err));
  }, [refresh]);

  useEffect(() => {
    if(Error !== null)
      console.log(Error)
  }, [Error]);

  const handleDeleteCar = (carId) => {
    deleteCar(carId)
    .then(() => setRefresh(!refresh))
    .catch((err) => setError(err));
  }

  const handleSave = (car) => {
    updateCar(car)
    .then(() => {
      setRefresh(!refresh);
      setEditMode(false);
    })
    .catch((err) => {
      setError(err);
      setEditMode(false);
    });
  }

  const handleCancel = () => {
    setEditMode(false);
  }

  const handleFilter = (year) => {
    if(year === "" || year === null) {
      setRefresh(!refresh);
      return;
    }
    filterCars(year)
    .then((cars) => setCars(cars))
    .catch((err) => setError(err));
  }

  const carAttributes = ["model", "make", "color", "price", "engineId", "year", "options"];
  const carAttributesLabels = ["Model", "Make", "Color", "Price", "EngineType", "Year", "Options"];

  return (
    <>
    <CarFilter handleFilter={handleFilter} />
    <TableContainer sx={{ marginTop: "1rem"}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {carAttributesLabels.map((attribute) => (
              <StyledTableCell align="center">{attribute}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cars != null && cars.map((car) => (
            <StyledTableRow key={car.carId}>
              { carAttributes.map((attribute) => {
                const value = attribute.includes("engineId") ? car.engineId.type : car[attribute];
                return <CarsTableCell key={car.carId + attribute}
                setCarId={setCarId}
                carId={car.carId}
                value={value} 
                ident={attribute} 
                StyledTableCell={StyledTableCell} 
                setEditMode={setEditMode} 
                handleDeleteCar={handleDeleteCar}  
              />})}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <EditCarsModal 
      isOpen={editMode} 
      handleCancel={handleCancel}
      handleSave={handleSave}
      car={cars.find((car) => car.carId == carId)}
    />
    <AddCarButton setRefresh={setRefresh}/>
    </>
  );
}
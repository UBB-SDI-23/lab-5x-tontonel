import { deleteCar} from '../../../api/car/carActions';


export default function CarsTableModelView(props) {

    const {
        cars,
        refresh,
        setError,
        setRefresh,
        setEditMode,
        setSelectedCarId
    } = props;
  
    const handleDeleteCar = (carId) => {
        deleteCar(carId)
        .then(() => setRefresh(!refresh))
        .catch((err) => setError(err));
    }

    
    return {
        cars,
        setEditMode,
        setSelectedCarId,
        handleDeleteCar,
    }
}
import { updateCar } from '../../../api/car/carActions';



export default function EditCarModalViewModel(props) {

    const {
        cars,
        selectedCarId,
        editMode,
        setEditMode,
        setRefresh,
        setError,
    } = props;

    const handleSave = (car) => {
        updateCar(car)
        .then(() => {
            setRefresh((prev) => !prev);
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

    return {
        editMode,
        car: cars.find((car) => car.id === selectedCarId),
        handleSave,
        handleCancel,
    }
}
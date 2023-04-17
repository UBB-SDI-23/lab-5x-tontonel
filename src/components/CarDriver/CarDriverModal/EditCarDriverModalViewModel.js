import { updateCarDriver } from '../../../api/carDriver/carDriverActions';

export default function EditCarDriverModalViewModel(props) {
    const {
        carDrivers,
        editMode,
        selectedCarDriverId,
        setError,
        setRefresh,
        setEditMode,
    } = props;

    const handleSave = (carDriver) => {
        updateCarDriver(carDriver)
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
        carDriver: carDrivers.find((carDriver) => carDriver.id === selectedCarDriverId),
        handleSave,
        handleCancel,
    }
}

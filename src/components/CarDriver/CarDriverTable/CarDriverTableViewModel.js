import { deleteCarDriver } from '../../../api/carDriver/carDriverActions';

export default function CarDriverTableViewModal(props) {
    const {
        carDrivers,
        setError,
        setRefresh,
        setEditMode,
        setSelectedCarDriverId,
    } = props;
    
    const handleDeleteCarDriver = (carDriverId) => {
        deleteCarDriver(carDriverId)
        .then(() => setRefresh((prev) => !prev))
        .catch((err) => setError(err));
    };
    
    return {
        carDrivers,
        setEditMode,
        setSelectedCarDriverId,
        handleDeleteCarDriver,
    };
}
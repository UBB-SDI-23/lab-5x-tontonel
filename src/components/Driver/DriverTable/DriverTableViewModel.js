import { deleteDriver } from "../../../api/driver/driverActions";

export default function DriverTableViewModal(props) {
    const {
        drivers,
        setError,
        setRefresh,
        setEditMode,
        setSelectedDriverId,
    } = props;
    
    const handleDeleteDriver = (driverId) => {
        deleteDriver(driverId)
        .then(() => setRefresh((prev) => !prev))
        .catch((err) => setError(err));
    };
    
    return {
        drivers,
        setEditMode,
        setSelectedDriverId,
        handleDeleteDriver,
    };
}
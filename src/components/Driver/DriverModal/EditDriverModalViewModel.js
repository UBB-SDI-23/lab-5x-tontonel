import { updateDriver } from "../../../api/driver/driverActions";

export default function DriverEditModalViewModel (props) {
    const {
        drivers,
        editMode,
        selectedDriverId,
        setError,
        setRefresh,
        setEditMode,
    } = props;

    const handleSave = (driver) => {
        updateDriver(driver)
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
        driver: drivers.find((driver) => driver.id === selectedDriverId),
        handleSave,
        handleCancel,
    }
}
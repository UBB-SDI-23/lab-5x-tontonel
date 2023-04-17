import { useState } from "react";
import { filterCars } from "../../../api/car/carActions";

export default function CarsModelView(props) {

    const {
        setCars,
        setError,
        setRefresh,
    } = props;

    const [filter, setFilter] = useState("");

    const handleFilter = (year) => {
        if(year === "" || year === null) {
          setRefresh((prev) => !prev);
          return;
        }
        filterCars(year)
        .then((cars) => {
            cars.forEach((car) => {
                car.engineType = car.engineId.type;
                car.id = car.carId;
            })
            setCars(cars);
        })
        .catch((err) => setError(err));
    }

    return {
        filter,
        setFilter,
        handleFilter,
    }
}
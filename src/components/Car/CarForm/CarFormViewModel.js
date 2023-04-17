import { fetchEngines } from "../../../api/engine/engineActions";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import { fetchEngineSuggestions } from "../../../api/engine/engineActions";

export default function CarsModelView(props) {

    useEffect(() => {
        fetchEngines(1)
        .then((engines) => setEngines(engines))
        .catch((err) => props.setError(err));
    }, [])

    const debounceFetchEngineSuggestions = useCallback(debounce((value) => {
        fetchEngineSuggestions(value)
        .then((engines) => setEngines(engines))
        .catch((err) => props.setError(err));
    }, 500), []);

    useEffect(() => {
        return () => {
            debounceFetchEngineSuggestions.cancel();
        }
    }, [debounceFetchEngineSuggestions]);

    const [engines, setEngines] = useState([]);
    const [engine, setEngine] = useState(props.data?.engineId !== undefined ? props.data?.engineId : null);
    const [model, setModel] = useState(props.data?.model !== undefined ? props.data?.model : "");
    const [make, setMake] = useState(props.data?.make !== undefined ? props.data?.make : "");
    const [year, setYear] = useState(props.data?.year  !== undefined ? props.data?.year : "");
    const [color, setColor] = useState(props.data?.color !== undefined ? props.data?.color : "");
    const [price, setPrice] = useState(props.data?.price !== undefined ? props.data?.price : "");

    const handleSave = () => {
        props.handleSave({
            carId: props.data?.carId,
            engineId: engine.engineId,
            model,
            make,
            year,
            color,
            price,
        });
    }
    return {
        engines,
        model,
        make,
        year,
        color,
        price,
        engine,
        setEngine,
        setModel,
        setMake,
        setYear,
        setColor,
        setPrice,
        setEngines,
        handleSave,
        debounceFetchEngineSuggestions,
    }
}
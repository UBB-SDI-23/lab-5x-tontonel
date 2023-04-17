import { fetchEngines } from "../../api/engine/engineActions";
import { useEffect, useState } from "react";
import { fetchNumberOfEnginePages } from "../../api/engine/engineActions";

export default function CarsModelView(props) {

    const [engines, setEngines] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [selectedEngineId, setSelectedEngineId] = useState(null);
    const [Error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPaginatedPages, setNumberOfPaginatedPages] = useState(1);
    
    useEffect(() => {
        fetchEngines(currentPage)
        .then((engines) => {
            engines.forEach((engine) => {
                engine.id = engine.engineId;
            });
            setEngines(engines)
        })
        .catch((err) => setError(err));
        fetchNumberOfEnginePages()
        .then((pages) => setNumberOfPaginatedPages(pages.numberOfPaginatedPages))
        .catch((err) => setError(err));
    }, [refresh, currentPage]);

    useEffect(() => {
        if(Error !== null)
            console.log(Error)
    }, [Error]);

    const onPageChanged = (event, value) => {
        setCurrentPage(value);
    }

    return {
        engines,
        editMode,
        refresh,
        selectedEngineId,
        numberOfPaginatedPages,
        setEditMode,
        setRefresh,
        setSelectedEngineId,
        setError,
        onPageChanged
    }
}
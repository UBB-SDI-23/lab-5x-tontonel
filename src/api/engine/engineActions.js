import axios from "axios";

export const fetchEngines = async (page) => {
    const result = await axios.get(process.env.API_URL + "/api/engine?page=" + page);
    return result.data;
}

export const fetchEngineSuggestions = async (filter) => {
    const result = await axios.get(process.env.API_URL + "/api/engine/autoComplete?search=" + filter);
    return result.data;
}

export const deleteEngine = async (id) => {
    return await axios.delete(process.env.API_URL + "/api/engine/" + id);
}

export const createEngine = async (engine) => {
    return await axios.post(process.env.API_URL + "/api/engine", engine);
}

export const updateEngine = async (engine) => {
    return await axios.put(process.env.API_URL + "/api/engine/" + engine.engineId, engine);
}

export const fetchNumberOfEnginePages = async () => {
    const result = await axios.get(process.env.API_URL + "/api/engine/numberOfPages");
    return result.data;
}
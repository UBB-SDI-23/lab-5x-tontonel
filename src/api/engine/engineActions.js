import axios from "axios";

export const fetchEngines = async () => {
    const result = await axios.get("/api/engine");
    return result.data;
}
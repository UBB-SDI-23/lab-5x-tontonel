import axios from "axios";

export const fetchEngines = async () => {
    const result = await axios.get(process.env.API_URL + "/api/engine");
    return result.data;
}
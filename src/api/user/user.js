import axios from 'axios';

export const getUser = async (param) => {
    const response = await axios.get(process.env.API_URL + `/api/user/${param}`);
    return response.data;
};

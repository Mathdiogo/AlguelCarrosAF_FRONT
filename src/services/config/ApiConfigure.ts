import axios from "axios";

export const instanceApi = axios.create({
    baseURL: 'http://localhost:3000/cars',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
});
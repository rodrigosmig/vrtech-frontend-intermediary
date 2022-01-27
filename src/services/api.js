import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokedex-api-three.vercel.app/api/',
})
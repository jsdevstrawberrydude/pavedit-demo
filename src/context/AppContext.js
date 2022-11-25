import {createContext} from 'react';
import data from '../assets/data.json';
export const AppContext = createContext({
    state: data,
    setState: () => { },
});
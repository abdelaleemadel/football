import axios from "axios";
import { createContext } from "react";


export default function FetchContextProvider(props) {
    const getPlayers = (countryName) => { return axios.get(`/players/${countryName}.txt`) }
    return <fetchContext.Provider value={getPlayers}>
        {props.children}
    </fetchContext.Provider>
}
export const fetchContext = createContext();

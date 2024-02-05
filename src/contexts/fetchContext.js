import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";


export default function FetchContextProvider(props) {
    const navigate = useNavigate();
    const getPlayers = (countryName) => {
        return axios.get(`/players/${countryName}.txt`).catch(error => {
            if (error.response.status == 404) return navigate('/notfound')
        })
    }
    return <fetchContext.Provider value={getPlayers}>
        {props.children}
    </fetchContext.Provider>
}
export const fetchContext = createContext();

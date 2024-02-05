import { createContext } from "react";

export default function ContinentsContextProvider(props) {
    const continents = [{ id: 1, name: `EUROPE`, code: `EU` }, { id: 2, name: `ASIA`, code: 'AS' }, { id: 3, name: `AFRICA`, code: 'AF' }, { id: 4, name: `OCEANIA`, code: 'OC' }, { id: 6, name: `NORTH AMERICA`, code: 'NA' }, { id: 7, name: `SOUTH AMERICA`, code: 'SA' }]

    return <continentContext.Provider value={continents}>
        {props.children}
    </continentContext.Provider>
}


export const continentContext = createContext();
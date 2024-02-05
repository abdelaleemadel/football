import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { continentContext } from "../../contexts/continentsContext";

function GoBack() {

    const continents = useContext(continentContext)
    const location = useLocation();
    const { continentId, countryName } = useParams();

    const navigate = useNavigate();

    const [continent, setContinent] = useState(null);
    const [country, setCountry] = useState(null);
    const [player, setPlayer] = useState(null);

    function prevComponent(steps) {
        let prevPath = location?.pathname?.split('/').slice(0, steps).join('/');
        console.log(prevPath);
        navigate(prevPath)
    }


    useEffect(() => {
        if (location?.pathname.includes('continents')) {
            // eslint-disable-next-line eqeqeq
            let currentContinent = continents.find(continent => continent.id == continentId)
            setContinent(currentContinent?.name);
        } else {
            setContinent(null)
        }

        location?.pathname.includes('countries') ? setCountry(countryName) : setCountry(null);
        location?.pathname.includes('players') ? setPlayer('player') : setPlayer(null);

    }, [location, continentId, continents, countryName])


    return (<>
        {continent ? <div className="text-white main-bg ">
            <div className="container pt-2 d-flex">
                {continent ? <p className={`my-0 fw-bold pe-2 ${country ? 'pointer-cursor' : 'context-menu'}`} onClick={() => prevComponent(3)}>{continent} </p> : ''}
                <p className="m-0 fw-bold">{country ? '|' : ''}</p>
                {country ? <p className={`my-0 fw-bold px-2 ${player ? 'pointer-cursor' : 'context-menu'}`} onClick={() => prevComponent(5)}> {country} </p> : ''}
            </div>
        </div> : ''}
    </>);
}

export default GoBack;
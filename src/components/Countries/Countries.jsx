import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import allCountries from './countries.txt';
import Country from "../country/country";

function Countries() {

    const { continentId } = useParams();
    function getCountries() {
        return axios.get(allCountries);
    }

    let { isLoading, isError, data } = useQuery('allCountries', getCountries);
    let countriesByContinent = data?.data.filter(country => country.continent_id == continentId);
    console.log(countriesByContinent);
    return (<>
        <div className="main-bg main-vh-100">
            <div className="container row mx-auto chess">
                {countriesByContinent?.map(country => <div className="col-6 col-md-4 col-lg-3  py-4" key={country.id}> <Country country={country}></Country></div>)}
            </div>

        </div>
    </>);
}

export default Countries;
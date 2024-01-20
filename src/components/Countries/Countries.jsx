import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import allCountries from './countries.txt';
import Country from "../country/country";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToPage, next, prev, start } from "../../Redux/paginationSlice";

const ItemsPerPage = 20;
function Countries() {
    let dispatch = useDispatch();
    const { continentId } = useParams();
    function getCountries() {
        return axios.get(allCountries);
    }

    let { displayed, initial, final } = useSelector(state => state.pagination);
    console.log(displayed);
    console.log(initial, final);
    let { data } = useQuery('allCountries', getCountries, {
        refetchOnMount: false
    });
    let countriesByContinent = data?.data.filter(country => country.continent_id == continentId);
    let initialCountries = countriesByContinent?.slice(0, ItemsPerPage)
    let NumOfPages = Math.ceil(countriesByContinent?.length / ItemsPerPage);
    let pages = [];
    for (let i = 1; i <= NumOfPages; i++) {
        pages.push(<li className="page-item" key={i}><button className="page-link" onClick={() => { dispatch(goToPage({ display: countriesByContinent, initial: ((i - 1) * 20), final: (i * 20) })) }}>{i}</button></li>)
    }
    useEffect(() => {
        dispatch(start())
    }, [continentId, dispatch])
    return (<>
        <div className="main-bg main-vh-100">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item  ">  {/* disabled */}
                        <button className="page-link" disabled={initial < ItemsPerPage}
                            onClick={() => { dispatch(prev({ display: countriesByContinent })) }}>Previous</button>
                    </li>
                    {pages}
                    <li className="page-item">
                        <button className="page-link" disabled={countriesByContinent?.length <= final}
                            onClick={() => { dispatch(next({ display: countriesByContinent })) }}>Next</button>
                    </li>
                </ul>
            </nav>
            <div className="container row mx-auto chess">
                {displayed.length ?
                    displayed.map(country => <div className="col-6 col-md-4 col-lg-3  py-4" key={country.id}> <Country country={country}></Country></div>)
                    : initialCountries?.map(country => <div className="col-6 col-md-4 col-lg-3  py-4" key={country.id}> <Country country={country}></Country></div>)}
            </div>


        </div>
    </>);
}

export default Countries;
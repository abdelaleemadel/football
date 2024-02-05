import axios from "axios";
import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom";
import allCountries from './countries.txt';
import Country from "../country/country";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToPage, next, prev, start } from "../../Redux/paginationSlice";
import Search from "../Search/Search";


function Countries() {
    let dispatch = useDispatch();

    const { continentId } = useParams();
    const allowedContinentIds = ["1", "2", "3", "4", "6", "7"];

    function getCountries() {
        return axios.get(allCountries);
    }

    let { displayed, countries, initial, final, itemsPerPage } = useSelector(state => state.pagination);

    let { data } = useQuery('allCountries', getCountries);



    let NumOfPages = Math.ceil(countries?.length / itemsPerPage);
    let pages = [];
    for (let i = 1; i <= NumOfPages; i++) {
        pages.push(<li className="page-item" key={i}><button className="page-link" onClick={() => { dispatch(goToPage({ initial: ((i - 1) * 20), final: (i * 20) })) }}>{i}</button></li>)
    }

    useEffect(() => {
        dispatch(start({ display: data?.data, continentId }))
    }, [dispatch, data, continentId])

    /* redirect to not found page when wrong Id is entered */
    if (!allowedContinentIds.includes(continentId)) return <Navigate to="/notfound" replace />

    return (<>
        <div className="main-bg min-vh-100">
            <div className="container overflow-auto d-flex">
                <Search></Search>
            </div>
            <div className="container row mx-auto chess">
                {
                    displayed?.map(country => <div className="col-6 col-md-4 col-lg-3  py-4" key={country.id}> <Country country={country}></Country></div>)
                }
            </div>
            <nav aria-label="..." className="my-5 overflow-auto">
                <ul className="pagination flex justify-content-center">
                    <li className={`page-item ${initial < itemsPerPage ? 'disabled' : ''}`}>  {/* disabled */}
                        <button className="page-link" disabled={initial < itemsPerPage}
                            onClick={() => { dispatch(prev()) }}>Previous</button>
                    </li>
                    {pages}
                    <li className={`page-item ${countries?.length <= final ? 'disabled' : ''}`}>
                        <button className="page-link"
                            onClick={() => { dispatch(next()) }}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </>);
}

export default Countries;
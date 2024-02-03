import { useEffect, useState } from "react";
import { searchPlayers } from "../../Redux/sortSlice";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/paginationSlice";


function Search() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        dispatch(searchPlayers({ searchTerm }));
        dispatch(searchCountries({ searchTerm }))
    }, [searchTerm, dispatch])
    return (<>
        <input type="text" className="form-control my-3" placeholder="Search by Name" onKeyUp={handleInputChange} />
    </>);
}

export default Search;
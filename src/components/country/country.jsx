import { Link } from "react-router-dom";


function Country({ country }) {
    return (<>

        <Link to={`/players/${country.id}`} className='text-decoration-none d-flex flex-wrap justify-content-center align-items-center'>
            {country["image_path"] ? <img src={country["image_path"]} alt={country.name} className='w-50' /> : ''}
            <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{country.name}</p>
        </Link>

    </>);
}

export default Country;
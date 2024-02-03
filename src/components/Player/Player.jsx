import { Link, useParams } from "react-router-dom"



export default function Player({ player }) {
    let params = useParams();
    return (<>


        <Link to={`${player.player_id}`} className="text-decoration-none py-4 d-flex flex-wrap justify-content-center align-items-center overflow-auto">
            {player["image_path"] ? <img src={player["image_path"]} alt={player.display_name} className='w-50' /> : ''}
            <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player.display_name}</p>
            <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player.birthdate}</p>
        </Link>
    </>

    )
}



export default function Player({ player }) {
    return (<>


        {player["image_path"] ? <img src={player["image_path"]} alt={player.name} className='w-50' /> : ''}
        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player.name}</p>
        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player.date_of_birth}</p>
    </>

    )
}

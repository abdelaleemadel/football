import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchContext } from "../../contexts/fetchContext";


function RandomPlayer() {

    const getPlayers = useContext(fetchContext)
    const { countryName, continentId } = useParams();

    const [randomPlayer, setRandomPlayer] = useState(null);
    const navigate = useNavigate();
    let { data: playersData } = useQuery(`${countryName}Players`, () => getPlayers(countryName),
        {
            refetchOnMount: false,
            staleTime: Infinity
        });

    const players = playersData?.data;
    function getRandomPlayer() {
        let player = null;
        do {

            const index = Math.floor(Math.random() * (players?.length));
            player = players[index];
            console.log(player?.image_path);
        } while (players && (!player || player?.player_id === randomPlayer || player?.image_path.includes('placeholder')));

        setRandomPlayer(player?.player_id);
        navigate(`/continents/${continentId}/countries/${countryName}/players/${player?.player_id}`)
    }


    return (<>
        <div className="my-3 text-center">
            <button className="btn main-button text-nowrap" onClick={getRandomPlayer}> Random Player
            </button></div></>);
}

export default RandomPlayer;
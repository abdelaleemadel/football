import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchContext } from "../../contexts/fetchContext";


function RandomPlayer({ fetchCountryPlayers }) {

    const getPlayers = useContext(fetchContext)
    const { countryName } = useParams();
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
        } while (players && (!player || player?.player_id === randomPlayer));

        setRandomPlayer(player?.player_id);
        navigate(`/players/${countryName}/${player?.player_id}`)
    }


    return (<>
        <div className="my-3">
            <button className="btn main-button text-nowrap" onClick={getRandomPlayer}> Random Player
            </button></div></>);
}

export default RandomPlayer;
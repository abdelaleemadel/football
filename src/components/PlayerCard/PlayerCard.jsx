import axios from "axios";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import RandomPlayer from "../RandomPlayer/RandomPlayer";
import { useContext } from "react";
import { fetchContext } from "../../contexts/fetchContext";

function PlayerCard() {
    const api_key = process.env.REACT_APP_API_KEY;
    const { playerId, countryName } = useParams();
    const getPlayers = useContext(fetchContext)

    const location = useLocation();

    function getPlayerTeam(teamId) {
        return axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${teamId}?api_token=${api_key}`)
    }

    let { data: playerData } = useQuery(`${countryName}Players`, () => getPlayers(countryName), {
        refetchOnMount: false,
        staleTime: Infinity,
    })


    let allPlayers = playerData?.data;
    let player = location.state || allPlayers?.find(player => {
        // eslint-disable-next-line eqeqeq
        return player.player_id == playerId
    });

    let teamId = player?.team_id;

    let { data: teamData } = useQuery([`team${teamId}`, teamId], () => getPlayerTeam(teamId), {
        enabled: !!teamId,
        refetchOnMount: false
    });

    let team = teamData?.data?.data;

    console.log(player);

    return (<>
        <div className="min-vh-100 main-bg d-flex flex-column justify-content-center align-items-center">

            <div className="container row align-items-center justify-content-center  overflow-auto mx-auto pt-2 ">
                <RandomPlayer></RandomPlayer>
                <div className="player-card col-12 col-sm-10 col-md-8 col-lg-6 py-3 d-flex flex-column justify-content-center align-items-center player-card rounded-4 my-5">
                    {player?.image_path ? <img src={player["image_path"]} alt={player.display_name} className='w-50 rounded-4' onError={(e) => {
                        e.target.onerror = null; e.target.src = "https://cdn.sportmonks.com/images/soccer/placeholder.png"
                    }} /> : ''}

                    {player ? <> <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 mt-3 w-100'>{player?.display_name}</p>
                        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.nationality}</p>
                        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{team?.name}</p>
                        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.birthdate}</p>
                        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.height}</p>
                        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.weight}</p></> :
                        <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>This Player Doesn't Exist</p>}

                </div>
            </div>

        </div>
    </>);
}

export default PlayerCard;
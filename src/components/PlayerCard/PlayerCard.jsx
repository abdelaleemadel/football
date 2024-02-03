import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import RandomPlayer from "../RandomPlayer/RandomPlayer";

function PlayerCard() {
    const api_key = process.env.REACT_APP_API_KEY;
    const { playerId, countryName } = useParams();

    function getPlayers() {
        return axios.get(`/players/${countryName}.txt`)
    }
    function getPlayerTeam(teamId) {
        return axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${teamId}?api_token=${api_key}`)
    }

    let { data: playerData } = useQuery(`${countryName}Players`, getPlayers, {
        refetchOnMount: false,
        staleTime: Infinity,
    })


    let allPlayers = playerData?.data;
    let player = allPlayers?.find(player => player.player_id == playerId);

    let teamId = player?.team_id;

    let { data: teamData } = useQuery([`team${teamId}`, teamId], () => getPlayerTeam(teamId), {
        enabled: !!teamId,
        refetchOnMount: false
    });

    let team = teamData?.data?.data;



    return (<>
        <div className="min-vh-100 main-bg d-flex flex-column justify-content-center align-items-center">
            <RandomPlayer></RandomPlayer>
            <div className="container row align-items-center justify-content-center  overflow-auto mx-auto ">
                <div className="player-card col-12 col-sm-10 col-md-8 col-lg-6 py-3 d-flex flex-column justify-content-center align-items-center player-card rounded-4 my-5">
                    {player?.image_path ? <img src={player["image_path"]} alt={player.display_name} className='w-50 rounded-4' onError={(e) => {
                        e.target.onerror = null; e.target.src = "https://cdn.sportmonks.com/images/soccer/placeholder.png"
                    }} /> : ''}

                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 mt-3 w-100'>{player?.display_name}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.nationality}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{team?.name}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.birthdate}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.height}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.weight}</p>

                </div>
            </div>

        </div>
    </>);
}

export default PlayerCard;
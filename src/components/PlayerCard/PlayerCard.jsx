import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function PlayerCard() {
    const { playerId, countryName } = useParams();

    function getPlayers() {
        return axios.get(`/players/${countryName}.txt`)
    }
    function getPlayerTeam(teamId) {
        return axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${teamId}?api_token=pDeUOhSWys06Y7cNNwPNOlquIqE0i3gXm2gedzPLnnAesOhRxVjzsJdUVNSB`)
    }
    let { data: playerData } = useQuery(`${countryName}Players`, getPlayers, {
        refetchOnMount: false
    })


    let allPlayers = playerData?.data;
    let player = allPlayers?.find(player => player.player_id == playerId);

    let teamId = player?.team_id;

    let { data: teamData } = useQuery([`team${teamId}`, teamId], () => getPlayerTeam(teamId), {
        enabled: !!teamId,
        refetchOnMount: false
    });

    let team = teamData?.data?.data;
    console.log(playerData, allPlayers?.length, player, teamId, team);



    return (<>
        <div className="min-vh-100 main-bg d-flex align-items-center">
            <div className="container row align-items-center justify-content-center  overflow-auto mx-auto ">
                <div className="player-card col-12 col-sm-10 col-md-8 col-lg-6 py-3 d-flex flex-column justify-content-center align-items-center player-card rounded-4 my-5">
                    {player?.image_path ? <img src={player["image_path"]} alt={player.display_name} className='w-50 rounded-4' /> : ''}

                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 mt-3 w-100'>{player?.display_name}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.nationality}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{team?.name}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>{player?.birthdate}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>Height: {player?.height}</p>
                    <p className='text-center mx-auto text-white fw-bold fs-3 mb-0 w-100'>Weight: {player?.weight}</p>
                </div>
            </div>

        </div>
    </>);
}

export default PlayerCard;
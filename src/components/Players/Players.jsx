import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import allPlayers from './players.txt';
import Player from "../Player/Player";

function Players() {
    const { countryId } = useParams();
    function getPlayers() {
        return axios.get(allPlayers);
    }
    let { isLoading, isError, data } = useQuery('allPlayers', getPlayers);
    let playersByCountry = data?.data.filter(player => player.country_id == countryId);
    console.log(playersByCountry);
    return (<>
        <div className="main-bg main-vh-100">
            <div className="container row mx-auto chess">
                {playersByCountry?.map(player => <div className="col-6 col-md-4 col-lg-3 py-4 d-flex flex-wrap justify-content-center align-items-center " key={player.id}> <Player player={player}></Player></div>)}
            </div>

        </div>
    </>);
}

export default Players;
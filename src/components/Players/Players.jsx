import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Player from "../Player/Player";
import { useSelector } from "react-redux";

function Players() {
    useSelector(state => { console.log(state); })
    const { countryName } = useParams();
    console.log(countryName);



    function getPlayers() {
        return axios.get(`/players/${countryName}.txt`);
    }

    let { isLoading, isError, data } = useQuery(`${countryName}Players`, getPlayers, {
        refetchOnMount: false
    });
    let playersByCountry = data?.data.slice(0, 20);
    console.log(playersByCountry);
    return (<>
        <div className="main-bg main-vh-100">
            <div className="container row mx-auto chess">
                {playersByCountry?.map(player => <div className="col-6 col-md-4 col-lg-3 py-4 d-flex flex-wrap justify-content-center align-items-center" key={player.player_id}> <Player player={player}></Player></div>)}
            </div>

        </div>
    </>);
}

export default Players;
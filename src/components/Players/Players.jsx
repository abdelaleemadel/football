import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import allPlayers from 'favicon';
import Player from "../Player/Player";
import { useEffect, useState } from "react";

function Players() {

    const { countryName } = useParams();
    console.log(countryName);
    /* import all from `./../../assets/players/${countryName}.txt`;
    console.log(all) */
    /*  const [country, setCountry] = useState(null);
     useEffect(() => {
         import(`./../../assets/players/${countryName}.txt`).then(module => setCountry(() => module.default)).catch(error => {
             console.log(`Failed to load module ${error}`);
         })
     }, [countryName]) */


    function getPlayers() {
        console.log(allPlayers);
        return fetch('./../../assets/players/Brazil.txt').then(response => response.text());
    }

    let { isLoading, isError, data } = useQuery('allPlayers', getPlayers);
    /*     let playersByCountry = data?.data.slice(0, 20);
     */    /* console.log(data); */
    /*  return (<>
         <div className="main-bg main-vh-100">
             <div className="container row mx-auto chess">
                 {playersByCountry?.map(player => <div className="col-6 col-md-4 col-lg-3 py-4 d-flex flex-wrap justify-content-center align-items-center" key={player.player_id}> <Player player={player}></Player></div>)}
             </div>
 
         </div>
     </>); */
}

export default Players;
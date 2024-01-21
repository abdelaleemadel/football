import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Player from "../Player/Player";
import { useEffect, useRef, useState } from "react";


function Players() {
    let ItemsPerPage = 30;
    const myRef = useRef();
    const { countryName } = useParams();
    let [NumOfPlayers, setNumOfPlayers] = useState(ItemsPerPage)
    function getPlayers() {
        return axios.get(`/players/${countryName}.txt`);
    }

    let { data } = useQuery(`${countryName}Players`, getPlayers, {
        refetchOnMount: false
    });
    let playersByCountry = data?.data
    let initialPlayersByCountry = playersByCountry?.slice(0, NumOfPlayers);


    useEffect(() => {

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = myRef.current;
            const isBottom = scrollTop + clientHeight + 50 >= scrollHeight;
            if (isBottom) {
                setNumOfPlayers(NumOfPlayers + ItemsPerPage);
            }
        };

        const scrollableElement = myRef.current;
        scrollableElement.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            scrollableElement.removeEventListener('scroll', handleScroll);
        };
    }, [NumOfPlayers, ItemsPerPage]);

    return (<>

        <div className="main-bg overflow-auto vh-100" ref={myRef}>

            <div className="container row mx-auto chess add-more">
                {initialPlayersByCountry?.map(player => <div className="col-6 col-md-4 col-lg-3 py-4 d-flex flex-wrap justify-content-center align-items-center" key={player.player_id}> <Player player={player}></Player></div>)}
            </div>
        </div>
    </>);
}

export default Players;

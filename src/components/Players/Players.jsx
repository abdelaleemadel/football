import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Player from "../Player/Player";
import { useEffect, useRef, useState } from "react";
import Sort from "../Sort/Sort";
import { startSorting } from "../../Redux/sortSlice";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";

function Players() {
    const dispatch = useDispatch();
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
    let playersByCountry = data?.data;
    let { displayed } = useSelector(state => state.sort)
    let initialPlayersByCountry = displayed?.slice(0, NumOfPlayers);


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

    useEffect(() => {
        dispatch(startSorting({ display: playersByCountry }))
    }, [playersByCountry, dispatch])
    return (<>

        <div className="main-bg overflow-auto vh-100 py-3" ref={myRef}>
            <div className="d-flex container">
                <Search></Search>

                <Sort />
            </div>

            <div className="container row mx-auto chess add-more">

                {initialPlayersByCountry?.map(player => <div className="col-6 col-md-4 col-lg-3 " key={player.player_id}> <Player player={player} ></Player></div>)}
            </div>
        </div>
    </>);
}

export default Players;

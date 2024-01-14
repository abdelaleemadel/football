import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function Players() {
    const { countryId } = useParams();
    function getPlayers() {
        return axios.get(``)
    }
    return (<>
        <div>
            Players</div>
    </>);
}

export default Players;
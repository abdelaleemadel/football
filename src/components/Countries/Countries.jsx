import { useParams } from "react-router-dom";


function Countries() {
    const { continentId } = useParams();
    return (<>
        <div>
            Countries
            <div>{continentId}</div>
        </div>
    </>);
}

export default Countries;
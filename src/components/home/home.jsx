import Continent from "../continent/continent";

function Home() {
    // eslint-disable-next-line no-undef
    const continents = [{ id: 1, name: `EUROPE`, code: `EU` }, { id: 2, name: `ASIA`, code: 'AS' }, { id: 3, name: `AFRICA`, code: 'AF' }, { id: 4, name: `OCEANIA`, code: 'OC' }, { id: 6, name: `NORTH AMERICA`, code: 'NA' }, { id: 7, name: `SOUTH AMERICA`, code: 'SA' }]
    return (<>
        {/* Showing All continents  */}
        <div className="main-bg min-vh-100 " >
            <div className='container row mx-auto main-chess'>
                {continents.map(continent => <div className="col-6 justify-content-center text-center" key={continent.id}> <Continent continent={continent}></Continent></div>)}
            </div>
        </div>

    </>);
}

export default Home;
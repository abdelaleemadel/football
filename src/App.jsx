import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';
import Layout from './components/Layout/Layout';
import Countries from './components/Countries/Countries';
import Players from './components/Players/Players';
import PlayerCard from './components/PlayerCard/PlayerCard';
import Loading from './components/Loading/Loading';


const routers = createBrowserRouter([
  {
    path: '', element: < Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'continents/:continentId', element: <Countries /> },
      { path: 'continents/:continentId/countries/:countryName', element: <Players /> },
      { path: 'continents/:continentId/countries/:countryName/players/:playerId', element: <PlayerCard /> }
    ]
  }
])
function App() {
  return (
    <>
      <Loading></Loading>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';
import Layout from './components/Layout/Layout';
import Countries from './components/Countries/Countries';
import Players from './components/Players/Players';
import PlayerCard from './components/PlayerCard/PlayerCard';
import FetchContextProvider from './contexts/fetchContext';
import Loading from './components/Loading/Loading';

const routers = createBrowserRouter([
  {
    path: '', element: < Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'countries/:continentId', element: <Countries /> },
      { path: 'players/:countryName', element: <Players /> },
      { path: 'players/:countryName/:playerId', element: <PlayerCard /> }

    ]
  }
])
function App() {
  return (
    <>

      <FetchContextProvider>
        <Loading></Loading>
        <RouterProvider router={routers} />
      </FetchContextProvider>
    </>
  );
}

export default App;

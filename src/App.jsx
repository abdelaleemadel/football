import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';
import Layout from './components/Layout/Layout';
import Countries from './components/Countries/Countries';
import Players from './components/Players/Players';

const routers = createBrowserRouter([
  {
    path: '', element: < Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'countries/:continentId', element: <Countries /> },
      { path: 'players/:countryName', element: <Players /> },

    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;

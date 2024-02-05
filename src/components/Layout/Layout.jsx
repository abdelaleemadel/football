import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import FetchContextProvider from "../../contexts/fetchContext";
import ContinentsContextProvider from "../../contexts/continentsContext";
import GoBack from "../GoBack/GoBack";

function Layout() {
    return (<>
        <FetchContextProvider>
            <ContinentsContextProvider>
                <NavBar></NavBar>
                <GoBack></GoBack>
                <Outlet></Outlet>
                <Footer />
            </ContinentsContextProvider>
        </FetchContextProvider>
    </>);
}

export default Layout;
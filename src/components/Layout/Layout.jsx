import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

function Layout() {
    return (<>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer />
    </>);
}

export default Layout;
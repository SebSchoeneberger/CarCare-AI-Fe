import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return ( 
        <>
            <Navbar />
            <h1>Car Care AI</h1>
            <Outlet />
        </>
     );
}

export default MainLayout;
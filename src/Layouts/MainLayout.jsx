import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return ( 
        <>
<div className="flex flex-col gap-6">
                <Navbar />
                <Outlet />
                <Footer />
</div>
        </>
     );
}

export default MainLayout;
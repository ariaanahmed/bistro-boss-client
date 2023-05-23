import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const MainLayout = () => {
    return (
        <div style={{minBlockSize: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
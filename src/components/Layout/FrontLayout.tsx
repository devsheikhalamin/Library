import { Outlet } from "react-router";
import FooterPage from "../modules/footer-05";
import NavbarPage from "../modules/navbar-02";

function FrontLayout() {
    return (
        <>

            <div className="flex flex-col min-h-screen">
                <NavbarPage />
                <div className="flex-1">
                    <Outlet />
                </div>
                <FooterPage />
            </div>
        </>
    );
}

export default FrontLayout;
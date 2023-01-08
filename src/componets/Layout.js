import { Outlet } from "react-router-dom";
import Nav from './nav'


function  Layout() {
    return (
        <>
        <Nav />
        <Outlet />
        </>
    );
}

export default Layout;
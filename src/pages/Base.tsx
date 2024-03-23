import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";

export default function Base() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

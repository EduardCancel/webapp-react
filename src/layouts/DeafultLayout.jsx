import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Loader />
            <main className="mb-5">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
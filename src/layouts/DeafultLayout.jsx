import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function DefaultLayout() {
    return (
        <>
            < Header />
            <main className="mb-5">
                <Outlet />
            </main>
            <Footer />

        </>
    )
}
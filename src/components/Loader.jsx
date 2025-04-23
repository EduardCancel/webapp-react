import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Loader() {
    const { isloading } = useContext(GlobalContext);

    if (!isloading) return null;

    return (
        <div className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-light bg-opacity-75" style={{ zIndex: 1050 }}>
            <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

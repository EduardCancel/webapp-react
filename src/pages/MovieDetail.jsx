import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
    const { id } = useParams();

    return (
        <div>
            <h1>Movie Detail</h1>
            <p>Details for movie ID: {id}</p>
        </div>
    );
}
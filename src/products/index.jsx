import React from "react";
import "./style.css";

export const Products = ({ result }) => {
    return (
        <>
            <section className="card-container">{result}</section>
        </>
    );
};

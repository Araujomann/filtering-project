import React from "react";
import { BsBagHeart } from "react-icons/bs";

export const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
    return (
        <section className="card">
            <img src={img} className="card-img" alt={title} />
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                    {star} {star} {star} {star} {star}
                    <span className="total-reviews">{reviews}</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>{prevPrice} </del>${newPrice}
                    </div>
                    <div className="bag">
                        <BsBagHeart className="bag-iconk" />
                    </div>
                </section>
            </div>
        </section>
    );
};

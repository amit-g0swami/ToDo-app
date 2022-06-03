import React from 'react'
import "./Card.css";

function Card({ src, title, description, price }) {
    return (
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
            <div className="card__button">
                <button>Book Now</button>
            </div>
        </div>
    )
}

export default Card
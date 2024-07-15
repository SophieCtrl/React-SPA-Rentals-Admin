import React from "react";
import { Link } from "react-router-dom";

export default function RentalsList({ rentals, likes, toggleLike }) {
  return (
    <div className="cards-container">
      {rentals.map((rental) => {
        const isLiked = likes[rental.id];

        return (
          <div className="card" key={rental.id}>
            <Link to={`/rentals/${rental.id}`} key={rental.id}>
              <img src={rental.picture_url} alt={rental.name} />
              <p className="list-title">{rental.name}</p>
            </Link>
            <div className="pad-top">
              <p className="list-text">€ {rental.price} night</p>
              <p className="list-text">
                Rating:{" "}
                {(
                  Math.round((rental.review_scores_rating / 100) * 5 * 100) /
                  100
                ).toFixed(2)}
              </p>
              <button
                className="like-btn"
                onClick={() => toggleLike(rental.id)}
              >
                {isLiked ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

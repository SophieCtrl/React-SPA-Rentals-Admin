import { useState } from "react";
import rentalsData from "../assets/rentals.json";
import { Link, useSearchParams } from "react-router-dom";

export default function RentalsList() {
  const [rentals, setRentals] = useState(rentalsData);
  const [searchParams, setSearchParams] = useSearchParams();
  const rentalID = searchParams.get("id");

  return (
    <>
      <h2>Rental List</h2>
      <div className="cards-container">
        {rentals.map((rental) => {
          return (
            <div className="card" key={rental.id}>
              <Link to={`/rentals/${rental.id}`} key={rental.id}>
                <img src={rental.picture_url} alt={rental.name} />
                <p> {rental.name} </p>
                <p> {rental.price} </p>
                <p> Rating: {(rental.review_scores_rating / 100) * 5} </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

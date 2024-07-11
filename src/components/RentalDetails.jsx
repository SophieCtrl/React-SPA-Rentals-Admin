import rentalsData from "../assets/rentals.json";

export default function RentalDetails({ rentalID }) {
  const rental = rentalsData.find((rental) => rental.id == rentalID);
  console.log(rental);
  return (
    <div className="rental-details">
      <img src={rental.picture_url.filename} alt={rental.name} />
      <h3>{rental.name}</h3>
      <p>
        {rental.property_type} in {rental.city}, {rental.country}
      </p>
      <p>
        {rental.accommodates} guests • {rental.bedrooms} bedrooms •{" "}
        {rental.beds} beds • {rental.bathrooms} baths{" "}
      </p>
      <p>
        <b>Rating: {(rental.review_scores_rating / 100) * 5}</b>
      </p>
      <p>
        <b>Hosted by {rental.host_name}</b>
      </p>
      <p>Hosting since {rental.host_since}</p>
      <p>Responds {rental.host_response_time} </p>
      <p>
        <b>
          {rental.cancellation_policy === "flexible"
            ? "Free cancellation until 24 hours before check-in"
            : rental.cancellation_policy === "moderate"
            ? "Free cancellation until 5 days before check-in"
            : "Free cancellation for 48 hours"}
        </b>
      </p>
      <p>{rental.description}</p>
      <p>Space: {rental.space}</p>
      <button onClick={() => clickToDelete(rental.id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

import { useState } from "react";
import rentalsData from "../assets/rentals.json";
import RentalsCard from "./RentalsCard";

export default function RentalsList() {
  const [rentals, setRentals] = useState(rentalsData);

  const deleteRental = (rentalId) => {
    const filteredRentals = rentals.filter((rental) => {
      return rental.id !== rentalId;
    });

    setRentals(filteredRentals);
  };

  return (
    <>
      <h2>Rental List</h2>
      {rentals.map((rental) => {
        return (
          <RentalsCard
            key={rental.id}
            rental={rental}
            clickToDelete={deleteRental}
          />
        );
      })}
    </>
  );
}

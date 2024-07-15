import React from "react";
import RentalsList from "../../components/RentalsList";

export default function DashboardPage({ rentals, likes, toggleLike }) {
  return (
    <div>
      <RentalsList rentals={rentals} likes={likes} toggleLike={toggleLike} />
    </div>
  );
}

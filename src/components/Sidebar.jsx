import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ likedCount, onShowFavorites, onShowAll }) {
  const handleShowAll = () => {
    onShowAll();
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" onClick={onShowFavorites}>
            {likedCount} Favorites
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleShowAll}>
            Show All
          </Link>
        </li>
      </ul>
    </div>
  );
}

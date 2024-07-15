import React from "react";

export default function FavoritesSummary({
  likedCount,
  onToggleShowFavorites,
}) {
  return (
    <div className="favorites-summary">
      <button onClick={onToggleShowFavorites}>{likedCount} Favorites</button>
    </div>
  );
}

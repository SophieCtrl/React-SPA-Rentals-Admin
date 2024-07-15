import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import AboutPage from "./pages/About";
import ItemsDetailPage from "./pages/ItemsDetail";
import NotFoundPage from "./pages/NotFound";
import rentalsData from "./assets/rentals.json";

import "./App.css";

function App() {
  const [rentals, setRentals] = useState(rentalsData);
  const [likes, setLikes] = useState({});
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const showAllRentals = () => {
    setShowFavorites(false);
  };

  const showFavoriteRentals = () => {
    setShowFavorites(true);
  };

  const likedRentals = rentals.filter((rental) => likes[rental.id]);

  return (
    <div className="layout">
      <Navbar onShowAll={showAllRentals} />
      <div className="container">
        <Sidebar
          likedCount={likedRentals.length}
          onShowFavorites={showFavoriteRentals}
          onShowAll={showAllRentals} // Pass showAllRentals/Favorites functions & num of favorites to Sidebar
        />
        <div className="main-container">
          <Routes>
            <Route
              path="/"
              element={
                <DashboardPage
                  rentals={showFavorites ? likedRentals : rentals}
                  likes={likes}
                  toggleLike={toggleLike} // Pass toggle function, current num of likes & view state to Dashboard
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rentals/:rentalID" element={<ItemsDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

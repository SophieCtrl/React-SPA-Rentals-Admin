import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import AboutPage from "./pages/About";
import ItemsDetailPage from "./pages/ItemsDetail";
import NotFoundPage from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="layout">
      <Navbar
        items={[
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
          { name: "More", link: "/not-found" },
        ]}
      />
      <div className="container">
        <Sidebar
          items={[
            { name: "link1", link: "/" },
            { name: "link2", link: "/" },
            { name: "link2", link: "/" },
          ]}
        />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
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

import { useState } from "react";
import ProfileModal from "./Profilemodal";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="logo-circle">M</div>
            <h1>MarketPlace</h1>
          </div>

          <nav>
            <ul className="navbar-menu">
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#contactos">Contactos</a></li>
              <li><a href="#perfil">Perfil</a></li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <button
              className="icon-btn"
              onClick={() => setShowProfile(true)}
            >
              👤
            </button>

            <button className="icon-btn cart-btn">
              🛒
              <span className="cart-badge">3</span>
            </button>
          </div>
        </div>
      </header>

      <ProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
};

export default Navbar;
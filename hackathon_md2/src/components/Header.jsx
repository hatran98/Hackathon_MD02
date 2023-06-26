import React, { useState } from "react";

function Header({ status, setStatus }) {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isCartActive, setIsCartActive] = useState(false);

  const handleHomeClick = () => {
    setIsHomeActive(true);
    setIsCartActive(false);
    setStatus(true);
  };

  const handleCartClick = () => {
    setIsHomeActive(false);
    setIsCartActive(true);
    setStatus(false);
  };

  return (
    <div>
      <div style={{ display: "flex", fontSize: "40px" }}>
        <div
          style={{
            margin: "20px",
            cursor: "pointer",
            color: isHomeActive ? "orange" : "inherit",
          }}
          onClick={handleHomeClick}
        >
          Home
        </div>
        <div
          style={{
            margin: "20px",
            cursor: "pointer",
            color: isCartActive ? "orange" : "inherit",
          }}
          onClick={handleCartClick}
        >
          Cart
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Header;

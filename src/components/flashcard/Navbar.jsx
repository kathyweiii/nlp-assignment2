import React from "react";

export default function Navbar({ onHomeClick, onFavClick }) {
  return (
    <>
      <ul className="navbar">
        <li className="nav-item">
          <button className="btn home-btn" onClick={onHomeClick}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className="btn fav-btn" onClick={onFavClick}>
            Favorite
          </button>
        </li>
      </ul>
    </>
  );
}

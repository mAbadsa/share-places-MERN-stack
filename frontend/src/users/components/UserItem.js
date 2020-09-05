import React from "react";

import "./UserItem.css";

function UserItem({ user: { id, name, image, places } }) {
  if (!id && !name && !image && !places) {
    return (
      <div className="center">
        <h2>...</h2>
      </div>
    );
  }
  return (
    <li className="user-item">
      <div className="user-list__content">
        <div className="user-list__image">
          <img src={image} alt={name} />
        </div>
        <div className="user-list__info">
          <h2>{name}</h2>
          <h3>
            {places} {places === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
}

export default UserItem;

import React from "react";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElement/Card";

import "./PlaceList.css";

function PlaceList({ items }) {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found, Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {items.map(
        ({ id, imageUrl, title, description, address, creator, location }) => (
          <PlaceItem
            key={id}
            id={id}
            image={imageUrl}
            title={title}
            description={description}
            address={address}
            creatorId={creator}
            coordinates={location}
          />
        )
      )}
    </ul>
  );
}

export default PlaceList;

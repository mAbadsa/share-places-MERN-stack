import React from "react";
import PlaceList from "../components/PlaceList";

function UserPlaces() {
  const DUMMY_PLACE = [
    {
      id: "p1",
      title: "Place One",
      description: "kdnvjfdngkf lgfgbfg knfkbgnfkbn",
      imageUrl: "kdmckm klvfdmlbkmfgkbmfgblmflbmflnmlkhn",
      address: "",
      location: {
        lat: 45.54545,
        lng: 32.2545,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Place Tne",
      description: "kdnvjfdngkf lgfgbfg knfkbgnfkbn",
      imageUrl: "kdmckm klvfdmlbkmfgkbmfgblmflbmflnmlkhn",
      address: "",
      location: {
        lat: 45.54545,
        lng: 32.2545,
      },
      creator: "u2",
    },
  ];
  return <PlaceList items={DUMMY_PLACE} />;
}

export default UserPlaces;

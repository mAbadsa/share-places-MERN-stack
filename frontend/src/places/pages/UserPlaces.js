import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACE = [
  {
    id: "p1",
    title: "Place One",
    description: "kdnvjfdngkf lgfgbfg knfkbgnfkbn",
    imageUrl: "kdmckm klvfdmlbkmfgkbmfgblmflbmflnmlkhn",
    address: "",
    location: {
      lat: 31.416,
      lng: 34.333,
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
      lat: 31.416,
      lng: 34.333,
    },
    creator: "u2",
  },
];

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlace = DUMMY_PLACE.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlace} />;
}

export default UserPlaces;

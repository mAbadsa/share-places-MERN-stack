import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import './PlaceForm.css';

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACE.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div>
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <Fragment>
      <form className="place-form">
        <Input
          id="title"
          elementType="input"
          label="Title"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Pleas enter a valid title"
          onInput={() => {}}
          initValue={identifiedPlace.title}
          valid={true}
        />
        <Input
          id="description"
          elementType="textarea"
          label="Description"
          type="text"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Pleas enter a valid description (min. 5 characters)"
          onInput={() => {}}
          initValue={identifiedPlace.description}
          valid={true}
        />
        <Button type="submit" disabled={true}>
          Update Place
        </Button>
      </form>
    </Fragment>
  );
};

export default UpdatePlace;

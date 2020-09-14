import React from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MAX,
} from "../../shared/util/validators";

import "./NewPlace.css";

function NewPlaces() {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        elementType="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
      />
    </form>
  );
}

export default NewPlaces;

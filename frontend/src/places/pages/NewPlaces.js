import React from "react";

import Input from "../../shared/components/FormElements/Input";

import "./NewPlace.css";

function NewPlaces() {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        elementType="input"
        validators={[]}
        errorText="Please enter a valid title."
      />
    </form>
  );
}

export default NewPlaces;

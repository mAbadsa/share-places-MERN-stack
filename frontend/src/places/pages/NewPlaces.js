import React, { useCallback } from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MAX,, VALIDATOR_MINLENGTH
} from "../../shared/util/validators";

import "./NewPlace.css";

function NewPlaces() {
  const titleInputHandler = useCallback((id, value, isValid) => {});
  const descriptionInputHandler = useCallback((id, value, isValid) => {});

  return (
    <form className="place-form">
      <Input
      id="title"
        type="text"
        label="Title"
        elementType="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        type="textarea"
        label="Title"
        elementType="input"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
}

export default NewPlaces;

import React from "react";

import Card from "../../shared/components/UIElement/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";

import "./Auth.css";

function Auth(props) {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h1>Login Required</h1>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          elementType="input"
          type="email"
          label="E-Mail"
          placeholder="Enter your email"
          errorText="Please enter a valid email address"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          id="password"
          elementType="input"
          type="password"
          label="Password"
          placeholder="Enter your password"
          errorText="Please enter a valid password, at least 5 characters."
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
}

export default Auth;

import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElement/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

import "./Auth.css";

function Auth(props) {
  const { login } = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
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
    login();
  };

  const switchModeHanler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h1 className="">Login Required</h1>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            elementType="input"
            type="text"
            label="Your Name"
            placeholder="Enter your name"
            errorText="Please enter your name"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
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
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button revers onClick={switchModeHanler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
}

export default Auth;

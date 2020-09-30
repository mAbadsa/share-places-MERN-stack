import React, { useReducer, useEffect } from "react";
import { validate } from "../../util/validators";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

function Input({
  type,
  label,
  id,
  elementType,
  placeholder,
  rows,
  errorText,
  validators,
  onInput,
  initialValue,
  initialValid,
}) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialValid || false,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    elementType === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
}

export default Input;

import React from "react";

import "./Input.css";

function Input({ type, label, id, elementType, placeholder, rows }) {
  const element =
    elementType === "input" ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3} />
    );
  return (
    <div className={`form-control`}>
      <label htmlFor={id}>{label}</label>
      {element}
    </div>
  );
}

export default Input;

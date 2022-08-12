import React from "react";

function CustomTextField(props) {
  return (
    <>
      <div>
        <label htmlFor="text-field" id="label">
          {props.label}
        </label>
        <input type="text" id="text-field" />
      </div>
    </>
  );
}

export default CustomTextField;

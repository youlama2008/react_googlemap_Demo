import React from "react";

const CustomInput = props => {
  return (
    <input
      className={
        props.className ? `${props.className} input-general` : `input-general`
      }
      onChange={props.handleInputChange}
      disabled={props.disabled}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default CustomInput;

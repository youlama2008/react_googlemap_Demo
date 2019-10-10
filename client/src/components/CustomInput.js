import React from "react";
import PropTypes from "prop-types";

const CustomInput = (props) => {
  const {
    className,
    disabled,
    type,
    placeholder,
    value,
    handleInputChange
  } = props;

  return (
    <input
      className={className ? `input-general ${className}` : `input-general`}
      onChange={handleInputChange}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

CustomInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleInputChange: PropTypes.func
};

export default CustomInput;

import React from "react";
import PropTypes from "prop-types";

const CustomButton = (props) => {
  const { className, disabled, text, handleBtnClick } = props;

  return (
    <button
      className={className ? `btn-general ${className}` : `btn-general`}
      disabled={disabled}
      onClick={handleBtnClick}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  handleBtnClick: PropTypes.func
};

export default CustomButton;

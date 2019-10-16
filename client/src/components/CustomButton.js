import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #b2b2b2;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 14px;
`;

const CustomButton = props => {
  const { className, disabled, text, handleBtnClick } = props;

  return (
    <Button
      className={className ? className : ``}
      disabled={disabled}
      onClick={handleBtnClick}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  handleBtnClick: PropTypes.func
};

export default CustomButton;

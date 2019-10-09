import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Common from "../utils/Common";

const CustomEditor = props => {
  const [isInputDisabled, enableInput] = useState(false);
  const [inputValue, changeInputValue] = useState("");
  const handleBtnClick = () => {
    enableInput(false);
  };
  const handleInputChange = event => {
    console.log(event);
    changeInputValue(event.target.value);
  };
  return (
    <React.Fragment>
      <CustomInput
        disabled={isInputDisabled}
        type={Common.textInput.type}
        placeholder={Common.textInput.placeholder}
        handleInputChange={handleInputChange}
      />
      <CustomButton
        disabled={!inputValue}
        text={Common.editBtn.text}
        handleBtnClick={handleBtnClick}
      />
    </React.Fragment>
  );
};

export default CustomEditor;

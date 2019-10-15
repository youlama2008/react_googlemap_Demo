import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Common from "../utils/Common";

const CustomEditor = () => {
  const [isInputDisabled, enableInput] = useState(false);
  const [inputValue, changeInputValue] = useState("");
  const handleBtnClick = () => {
    enableInput(false);
  };
  const handleInputChange = event => {
    changeInputValue(event.target.value);
  };
  return (
    <div className="custom-editor">
      <input
        className="input-general"
        onChange={handleInputChange}
        disabled={isInputDisabled}
        type={Common.textInput.type}
        placeholder={Common.textInput.placeholder}
        value={inputValue}
      />
      <p>{inputValue}</p>
      <CustomButton
        disabled={!inputValue}
        text={Common.editBtn.text}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
};

export default CustomEditor;

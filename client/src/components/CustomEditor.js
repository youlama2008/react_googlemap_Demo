import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Common from "../utils/Common";
import styled from "styled-components";

const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomEditor = () => {
  const [isInputDisabled, disableInput] = useState(true);
  const [isEditMode, enableEditMode] = useState(false);
  const [inputValue, changeInputValue] = useState("");
  const editBtnClick = () => {
    disableInput(false);
    enableEditMode(true);
  };
  const deleteBtnClick = () => {
    disableInput(true);
  };
  const saveBtnClick = () => {
    disableInput(true);
    enableEditMode(false);
  };
  const cancelBtnClick = () => {
    enableEditMode(false);
    disableInput(true);
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
      <ButtonLayout>
        {!isEditMode ? (
          <CustomButton
            disabled={false}
            text="Edit"
            handleBtnClick={editBtnClick}
          />
        ) : (
          <CustomButton
            disabled={false}
            text="Save"
            handleBtnClick={saveBtnClick}
          />
        )}
        <p>or</p>
        {!isEditMode ? (
          <CustomButton
            disabled={false}
            text="Delete"
            handleBtnClick={deleteBtnClick}
          />
        ) : (
          <CustomButton
            disabled={false}
            text="Cancel"
            handleBtnClick={cancelBtnClick}
          />
        )}
      </ButtonLayout>
    </div>
  );
};

export default CustomEditor;

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Common from "../utils/Common";
import styled from "styled-components";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

const CustomEditorContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  max-width: 150px;
  margin: 5px;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const CustomInput = styled.input`
  font-size: 14px;
  font-size: 24px;
  border: 1px solid #fff;
  color: #198bbb;
  padding: 0;
  font-weight: 600;
`;

const CustomEditor = inject("locationStore")(
  observer(props => {
    const [isInputDisabled, disableInput] = useState(true);
    const [isEditMode, enableEditMode] = useState(false);
    const [inputValue, changeInputValue] = useState(
      props.location.address || ""
    );
    const editBtnClick = () => {
      disableInput(false);
      enableEditMode(true);
    };
    const deleteBtnClick = event => {
      console.log(inputValue);
      disableInput(true);
    };
    const saveBtnClick = event => {
      disableInput(true);
      enableEditMode(false);
    };
    const cancelBtnClick = event => {
      enableEditMode(false);
      disableInput(true);
    };
    const handleInputChange = event => {
      changeInputValue(event.target.value);
    };
    return (
      <CustomEditorContainer>
        <CustomInput
          onChange={handleInputChange}
          disabled={isInputDisabled}
          type={Common.textInput.type}
          placeholder={Common.textInput.placeholder}
          value={inputValue}
        />
        <CustomText>{props.location.address}</CustomText>
        <CustomText>latitude: {props.location.latitude}</CustomText>
        <CustomText>langtitude: {props.location.langtitude}</CustomText>
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
          <CustomText>or</CustomText>
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
      </CustomEditorContainer>
    );
  })
);

CustomEditor.propTypes = {
  locationStore: PropTypes.object,
  address: PropTypes.string
};

export default CustomEditor;

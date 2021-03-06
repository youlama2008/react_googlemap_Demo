import React, { useState } from "react";
import CustomButton from "./CustomButton";
import styled from "styled-components";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

const CustomEditorContainer = styled.div`
  display: inline-block;
  text-align: left;
  margin: 5px 20px;
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
`;

const CustomText = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const ErrorMsg = styled(CustomText)`
  color: red;
  font-size: 14px;
`;

const CustomInput = styled.input`
  font-size: 20px;
  border: 1px solid #198bbb;
  color: #198bbb;
  padding: 0;
  font-weight: bold;
  width: 90%;

  &:disabled {
    border: none;
  }
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
    const deleteBtnClick = () => {
      disableInput(true);
      props.locationStore.deleteLocation(props.location.address);
    };
    const saveBtnClick = () => {
      if (props.location.address) {
        props.locationStore.updateLocation(props.location.address, inputValue);
      } else {
        props.locationStore.addLocation(inputValue);
      }
      disableInput(true);
      enableEditMode(false);
    };
    const cancelBtnClick = () => {
      enableEditMode(false);
      if (props.location.address) {
        changeInputValue(props.location.address);
        disableInput(true);
      } else {
        props.locationStore.locationList.shift();
      }
      props.location.valid= true;
    };
    const handleInputChange = event => {
      changeInputValue(event.target.value);
    };
    return (
      <CustomEditorContainer>
        {!props.location.valid && props.locationStore.errorMsg && (
          <ErrorMsg>{props.locationStore.errorMsg}</ErrorMsg>
        )}
        <CustomInput
          onChange={handleInputChange}
          disabled={isInputDisabled}
          type="text"
          placeholder="Please enter address"
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
              disabled={
                inputValue === "" || inputValue === props.location.address
              }
              text="Save"
              handleBtnClick={saveBtnClick}
            />
          )}
          <CustomText>or</CustomText>
          {!isEditMode? (
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

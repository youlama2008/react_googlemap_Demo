import React from "react";
import CustomEditor from "./../CustomEditor";
import { mount } from "./../../enzyme";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";

describe("render CustomEditor properly", () => {
  const customEditor = mount(<CustomEditor />);
  const customBtn = customEditor.find(CustomButton);
  const customInput = customEditor.find(CustomInput);

  it("should render CustomEditor", () => {
    expect(customEditor).toHaveLength(1);
  });

  it("should render CustomEditor with default class name", () => {
    expect(customEditor.find(".custom-editor")).toBeDefined();
  });

  it("should render CustomBtn with correct props", () => {
    expect(customBtn.props().disabled).toEqual(true);
    expect(customBtn.props().text).toEqual("Edit");
  });

  it("should render CustomInput with correct props", () => {
    expect(customInput.props().disabled).toEqual(false);
    expect(customInput.props().type).toEqual("input");
    expect(customInput.props().value).toEqual("");
    expect(customInput.props().placeholder).toEqual(
      "Please write your comments"
    );
  });
});

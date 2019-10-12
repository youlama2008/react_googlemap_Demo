import React from "react";
import CustomEditor from "./../CustomEditor";
import { mount } from "./../../enzyme";
import CustomButton from "../CustomButton";

describe("render CustomEditor properly", () => {
  const customEditor = mount(<CustomEditor />);
  const customBtn = customEditor.find(CustomButton);
  const customInput = customEditor.find("input");

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

  it("should render <input> with correct props", () => {
    expect(customInput.props().className).toEqual("input-general");
    expect(customInput.props().value).toEqual("");
    expect(customInput.props().disabled).toEqual(false);
  });
});

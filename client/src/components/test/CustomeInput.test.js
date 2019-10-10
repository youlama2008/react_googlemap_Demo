import React from "react";
import CustomInput from "./../CustomInput";
import { shallow } from "./../../enzyme";

describe("render CustomInput properly", () => {
  const wrapper = shallow(
    <CustomInput
      className="test-input"
      disabled={false}
      type="input"
      value="default"
      placeholder="test placeholder"
    />
  );
  let wrapperProp;
  beforeEach(() => {
    wrapperProp = wrapper.props();
  });

  it("should render CustomInput", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render CustomInput with default class name", () => {
    expect(wrapper.find(".custom-input")).toBeDefined();
  });

  it("should render CustomInput with added class name ", () => {
    expect(wrapperProp.className).toEqual("custom-input test-input");
  });

  it("should have a CustomInput without disabled prop", () => {
    expect(wrapperProp.disabled).toEqual(false);
  });

  it("should have a CustomInput with dafault value", () => {
    expect(wrapper.props().value).toEqual("default");
  });
});

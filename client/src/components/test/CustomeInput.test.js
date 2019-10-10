import React from "react";
import CustomInput from "./../CustomInput";
import { shallow } from "./../../enzyme";

describe("render <Input> properly", () => {
  const wrapper = shallow(
    <CustomInput
      className="input-test"
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

  it("should render <input>", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render <input> with default class name", () => {
    expect(wrapper.find(".input-general")).toBeDefined();
  });

  it("should render <input> with added class name ", () => {
    expect(wrapperProp.className).toEqual("input-general input-test");
  });

  it("should have a <input> without disabled prop", () => {
    expect(wrapperProp.disabled).toEqual(false);
  });

  it("should get value", () => {
    expect(wrapper.props().value).toEqual("default");
  });
});

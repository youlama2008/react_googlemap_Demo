import React from "react";
import CustomButton from "./../CustomButton";
import { shallow } from "./../../enzyme";

describe("render <button> properly", () => {
  const wrapper = shallow(
    <CustomButton className="test-btn" disabled={false} text="test button" />
  );

  let wrapperProp;
  beforeEach(() => {
    wrapperProp = wrapper.props();
  });

  it("should render <button>", () => {
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
  });

  it("should render <button> with default class name", () => {
    expect(wrapper.find(".custom-btn")).toBeDefined();
  });

  it("should render <button> with class name ", () => {
    expect(wrapperProp.className).toEqual("custom-btn test-btn");
  });

  it("should have a <button> without disabled prop", () => {
    expect(wrapperProp.disabled).toEqual(false);
  });

  it("should have a <button> with the properly text", () => {
    expect(wrapper.text()).toEqual("test button");
  });
});

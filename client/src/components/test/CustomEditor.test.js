import React from "react";
import CustomEditor from "./../CustomEditor";
import { mount } from "./../../enzyme";

describe("render CustomEditor properly", () => {
  const wrapper = mount(<CustomEditor />);
//   let wrapperProp;
//   beforeEach(() => {
//     wrapperProp = wrapper.props();
//   });

  it("should render CustomEditor", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render CustomEditor with default class name", () => {
    expect(wrapper.find(".custom-editor")).toBeDefined();
  });
});

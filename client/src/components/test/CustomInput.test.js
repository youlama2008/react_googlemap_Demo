import React from "react";
import CustomInput from "./../CustomInput";
import { shallow } from "./../../enzyme";

describe("render <button> properly", () => {
  const wrapper = shallow(
    <CustomInput
        disabled={false}
        type='input'
        placeholder='test placeholder'
      />
  );
  beforeEach(() => {
    let wrapperProp = wrapper.props();
  });

  it("should render <input>", () => {
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
  });
});

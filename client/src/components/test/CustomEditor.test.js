import React from "react";
import CustomEditor from "./../CustomEditor";
import { mount } from "./../../enzyme";
import CustomButton from "../CustomButton";
import { Provider } from "mobx-react";
import stores from "./../../stores";

describe("render CustomEditor properly", () => {
  const location = {
    address: "hamburg",
    latitude: "53.5510846",
    longtitude: "9.9936819"
  };
  const customEditor = mount(
    <Provider {...stores}>
      <CustomEditor locationStore={stores} location={location} />
    </Provider>
  );
  const customBtns = customEditor.find(CustomButton);
  const customInput = customEditor.find("input");

  it("should render CustomEditor", () => {
    expect(customEditor).toHaveLength(1);
  });

  it("should render CustomEditor with default class name", () => {
    expect(customEditor.find(".custom-editor")).toBeDefined();
  });

  it("should render 2 visible CustomBtn with correct props", () => {
    expect(customBtns.length).toEqual(2);
  });

  it("should render Edit button with correct props", () => {
    expect(customBtns.first().props().text).toEqual("Edit");
    expect(customBtns.first().props().disabled).toEqual(false);
  });

  it("should render Delete button with correct props", () => {
    expect(customBtns.at(1).props().text).toEqual("Delete");
    expect(customBtns.at(1).props().disabled).toEqual(false);
  });

  it("should render <input> with correct props", () => {
    expect(customInput.props().value).toEqual("hamburg");
    expect(customInput.props().disabled).toEqual(true);
  });
});

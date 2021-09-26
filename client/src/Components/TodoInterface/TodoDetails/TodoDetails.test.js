import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
// component to test
import TodoDetails from "./TodoDetails";
// utils
import { findByTestAtrr } from "../../../../utils/index";
import Providers from "../../../../utils/Providers";
import { jssPreset } from "@material-ui/core";

describe("<TodoDetails />", () => {
  let wrapWithProviders;
  let component;
  let props;
  let reduxState;
  beforeEach(() => {
    props = {
      classes: {},
      setSaving: jest.fn(),
    };
    // ALTER STATE USING REDUX TO TEST CONDITIONAL RENDERING
    // reduxState = {}

    wrapWithProviders = mount(Providers(TodoDetails, props));
    component = wrapWithProviders.find(TodoDetails);
  });
  it("Should Render", () => {
    expect(component).toHaveLength(1);
  });
  it("Should Match Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });
  it("Should Render With Children", () => {
    // CHECK ALL DEFUALT CHILDREN
  });
});
// CHECK INPUT VALUE CHANGES AND ENSURE INPUTS UPDATE

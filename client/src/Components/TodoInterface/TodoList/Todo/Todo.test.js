import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
// component to test
import Todo from "./Todo";
// utils
import { findByTestAtrr } from "../../../../../utils/index";
import Providers from "../../../../../utils/Providers";

describe("<Todo />", () => {
  let wrapWithProviders;
  let component;
  let props;
  let reduxState;
  beforeEach(() => {
    props = {
      classes: {},
      setSaving: jest.fn(),
      data: {
        id: 1,
        title: "title",
        content: "content",
        completed: false,
      },
    };
    // ALTER STATE USING REDUX TO TEST CONDITIONAL RENDERING
    // reduxState = {}

    wrapWithProviders = mount(Providers(Todo, props));
    component = wrapWithProviders.find(Todo);
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

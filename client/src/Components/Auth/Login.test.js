import React from "react";
import { act } from "react-dom/test-utils";

import { shallow, render, mount } from "enzyme";
// component to test
import Login from "./Login";
// child components
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

// utils
import Providers from "../../../utils/Providers";
import { findByTestAtrr } from "../../../utils/index";

describe("<Login/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Component Initial Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Login, props));
      component = wrapWithProviders.find(Login);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });

    it("Should Match Snapshot", () => {
      wrapWithProviders = mount(Providers(Login, props));
      component = wrapWithProviders.find(Login);
      expect(component).toMatchSnapshot();
    });
  });

  describe("Rendering Children", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Login, props));
      component = wrapWithProviders.find(Login);
    });
    it("Should Render 'form' Element", () => {
      expect(component.find("form")).toHaveLength(1);
    });
    it("Should Render Two Inputs on Mount", () => {
      expect(component.find("input")).toHaveLength(2);
    });
    it("Should Render Login Button on Mount", () => {
      let button = component.find(Button);
      expect(button).toBeDefined();
    });
  });

  describe("Form Input Values Are Updateable and Submittable", () => {
    beforeEach(() => {
      props = {
        classes: {},
        setDataLoading: jest.fn(),
        setModalOpen: jest.fn(),
      };
      wrapWithProviders = mount(Providers(Login, props));
      component = wrapWithProviders.find(Login);
    });
    it("Should Capture Email correctly onChange", () => {
      let emailWrapper = findByTestAtrr(component, "loginEmail").at(4);
      let emailInput = emailWrapper.find("input");
      expect(emailInput.props().value).toEqual("demo@bcf.com");
      emailInput.props().value = "mockEmail";
      expect(emailInput.props().value).toEqual("mockEmail");
    });
    it("Should Capture Password correctly onChange", () => {
      let passwordWrapper = findByTestAtrr(
        wrapWithProviders,
        "loginPassword"
      ).at(4);
      let passwordInput = passwordWrapper.find("input");
      expect(passwordInput.props().value).toEqual("password");
      passwordInput.props().value = "mockPassword";
      expect(passwordInput.props().value).toEqual("mockPassword");
    });
    it("When Form is Submitted, handleLogin is Called", () => {
      let button = component.find(Button);
      expect(button).toBeDefined();
      button.simulate("click");
      expect(props.setDataLoading).toBeCalledTimes(3);
      expect(props.setModalOpen).toBeCalledTimes(1);
    });
  });
});

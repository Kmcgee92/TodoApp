import React from "react";

import { mount } from "enzyme";
// component to test
import Signup from "./Signup";
// child components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// utils
import Providers from "../../../utils/Providers";
import { findByTestAtrr } from "../../../utils/index";
describe("<Signup/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Component Initial Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Signup, props));
      component = wrapWithProviders.find(Signup);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
    it("Should Match Snapshot", () => {
      expect(component).toMatchSnapshot();
    });

    describe("Rendering Children", () => {
      it("Should Render 'form' Element", () => {
        expect(component.find("form")).toHaveLength(1);
      });
      it("Should Render 3 'TextField' Components", () => {
        expect(component.find(TextField)).toHaveLength(4);
      });
      it("Should Render Create Account Button", () => {
        expect(component.find(Button).at(0)).toHaveLength(1);
      });
      it("Should Render Cancel Button", () => {
        expect(component.find(Button).at(1)).toHaveLength(1);
      });
    });
  });

  describe("Form Input Values are Updateable and Submittable", () => {
    beforeEach(() => {
      props = {
        classes: {},
        setModalOpen: jest.fn(),
      };
      wrapWithProviders = mount(Providers(Signup, props));
      component = wrapWithProviders.find(Signup);
    });
    it("Should AutoFocus Name Input on Signup Component Mount", () => {
      let nameWrapper = findByTestAtrr(wrapWithProviders, "nameField").at(4);
      let nameField = nameWrapper.find("input");
      expect(nameField.props().autoFocus).toBeTruthy();
      // console.log(nameField.props());
    });
    it("Should Update Name TextField when Value is Changed", () => {
      let nameWrapper = findByTestAtrr(wrapWithProviders, "nameField").at(4);
      let nameField = nameWrapper.find("input");
      nameField.props().value = "TEST";
      expect(nameField.props().value).toBe("TEST");
    });
    it("Should Update email TextField when Value is Changed", () => {
      let emailWrapper = findByTestAtrr(wrapWithProviders, "emailField").at(4);
      let emailField = emailWrapper.find("input");
      emailField.props().value = "TEST";
      expect(emailField.props().value).toBe("TEST");
    });
    it("Should Update password TextField when Value is Changed", () => {
      let passwordWrapper = findByTestAtrr(
        wrapWithProviders,
        "passwordField"
      ).at(4);
      let passwordField = passwordWrapper.find("input");
      passwordField.props().value = "TEST";
      expect(passwordField.props().value).toBe("TEST");
    });
    it("Should Update confirmPassword TextField when Value is Changed", () => {
      let confirmPasswordWrapper = findByTestAtrr(
        wrapWithProviders,
        "confirmPasswordField"
      ).at(4);
      let confirmPasswordField = confirmPasswordWrapper.find("input");
      confirmPasswordField.props().value = "TEST";
      expect(confirmPasswordField.props().value).toBe("TEST");
    });
    it("Should Close Modal When Cancel Button is Pressed", () => {
      let submitButton = component.find(Button).at(1);
      submitButton.simulate("click");
      expect(props.setModalOpen).toBeCalledTimes(1);
    });
  });
});

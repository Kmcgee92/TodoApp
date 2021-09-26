import React, { Component } from "react";
import { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";
// component to test
import SaveStatus from "./SaveStatus";
// utils
import { findByTestAtrr } from "../../../../utils/index";

describe("<SaveStatus />", () => {
  let component;
  let mockProps;
  describe("Component Initial Rendering", () => {
    beforeEach(() => {
      mockProps = {
        classes: {},
        saving: false,
        activeTodo: false,
        activeUser: { mockUser: "MOCKUSER" },
      };
      component = shallow(<SaveStatus {...mockProps} />);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
  });
  describe("Component Children on Mount", () => {
    beforeEach(() => {
      mockProps = {
        classes: {},
        saving: true,
        activeTodo: true,
        activeUser: { mockUser: "MOCKUSER" },
      };

      component = mount(<SaveStatus {...mockProps} />);
    });
    it("Should Render with Props classes, saving, activeTodo, activeUser", () => {
      expect(component.props().classes).toBe(mockProps.classes);
      expect(component.props().saving).toBe(mockProps.saving);
      expect(component.props().activeTodo).toBe(mockProps.activeTodo);
      expect(component.props().activeUser).toBe(mockProps.activeUser);
      // expect(mockProps.setModalOpen).toBeCalledTimes(1);
    });
    it("Should Render div With Text 'saved'", () => {
      expect(
        component
          .findWhere((div) => div.text() === "saved")
          .at(0)
          .text()
      ).toEqual("saved");
      expect(
        component.findWhere((div) => div.text() === "unsaved....")
      ).toHaveLength(0);
    });
    it("Should Render <span/> Displaying Time", () => {
      expect(findByTestAtrr(component, "time")).toHaveLength(1);
    });
  });
  describe("Component Children on State Change", () => {
    beforeEach(() => {
      mockProps = {
        classes: {},
        saving: false,
        activeTodo: true,
        activeUser: { mockUser: "MOCKUSER" },
      };

      component = mount(<SaveStatus {...mockProps} />);
    });
    it("Should Render div With Text 'unsaved...'", () => {
      expect(
        component
          .findWhere((div) => div.text() === "unsaved....")
          .at(0)
          .text()
      ).toEqual("unsaved....");
      expect(component.findWhere((div) => div.text() === "saved")).toHaveLength(
        0
      );
    });
  });
  describe("No Active User and No ActiveTodo", () => {
    beforeEach(() => {
      mockProps = {
        classes: {},
        saving: false,
        activeTodo: false,
        activeUser: {},
      };

      component = mount(<SaveStatus {...mockProps} />);
    });
    it("Should Not Render <span/> Displaying TIme", () => {
      expect(findByTestAtrr(component, "time")).toHaveLength(0);
    });
    it("Should Not Render 'saved' or 'unsaved... Text'", () => {
      expect(component.findWhere((div) => div.text() === "saved")).toHaveLength(
        0
      );
      expect(
        component.findWhere((div) => div.text() === "unsaved....")
      ).toHaveLength(0);
    });
  });
});

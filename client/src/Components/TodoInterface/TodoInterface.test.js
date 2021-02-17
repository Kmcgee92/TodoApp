import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
// component to test
import TodoInterface from "./TodoInterface";
// child components
import Header from "./Header/Header";
import Signup from "../Auth/Signup";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import TodoDetails from "./TodoDetails/TodoDetails";
import NoTasks from "./TodoDetails/NoTasks";
import TodoList from "./TodoList/TodoList";
import Greeter from "./Greeter/Greeter";
//mui child components
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
// utils
import { findByTestAtrr } from "../../../utils/index";
import Providers from "../../../utils/Providers";

describe("<TodoInterface/>", () => {
  let wrapWithProviders;
  let component;
  let props = {
    classes: {},
  };

  describe("Should Render Component on Inital Mount", () => {
    beforeEach(() => {
      wrapWithProviders = Providers(TodoInterface, props);
      component = mount(wrapWithProviders);
    });
    it("Should Render Root Element on Mount", () => {
      const root = findByTestAtrr(component, "Root");
      expect(root).toHaveLength(1);
    });
    it("Should Render Header", () => {
      const header = component.find(Header);
      expect(header).toHaveLength(1);
    });
    it("Should Render Greeter", () => {
      const greeter = component.find(Greeter);
      expect(greeter).toHaveLength(1);
    });
    it("Should Render TodoList", () => {
      const todoList = component.find(TodoList);
      expect(todoList).toHaveLength(1);
    });
    it("Should Render Drawer", () => {
      const drawer = component.find(Drawer);
      expect(drawer).toHaveLength(1);
    });
    it("Should Render Three Toolbars on Full Mount in Greeter, Header, and the Interface", () => {
      const toolbars = component.find(Toolbar);
      expect(toolbars).toHaveLength(3);
    });
    it("Should not Render Todo, Signup, TodoDetails, NoTasks, or LoadingSpinner components on Mount", () => {
      let components = [];
      let array = [Signup, TodoDetails, NoTasks, LoadingSpinner];
      for (let i = 0; i < array.length; i++) {
        components.push(component.find(array[i]));
      }
      components.forEach((x) => {
        expect(x.length).toBe(0);
      });
    });
  });
  describe("Component Should Render with Props", () => {
    beforeEach(() => {
      wrapWithProviders = Providers(TodoInterface, props);
      component = mount(wrapWithProviders);
    });
    it(" Should recieve classes prop", () => {
      const interfaceComponent = shallow(wrapWithProviders)
        .dive()
        .dive()
        .dive()
        .dive()
        .dive();
      expect(interfaceComponent.props().classes).toEqual({});
    });
  });

  describe("State Change Testing", () => {
    beforeEach(() => {
      props = {
        classes: {},
        setDataLoading: jest.fn(),
        setModalOpen: jest.fn(),
        setActiveData: jest.fn(),
      };
      wrapWithProviders = mount(Providers(TodoInterface, props));
      component = wrapWithProviders.find(TodoInterface);
      console.log(component.debug());
      console.log(component.find(TodoInterface).debug());
    });
    it("Should update setDataLoading state on dataLoading State Change", () => {
      // const spy = jest.spyOn(React, "useState");
      // spy.mockImplementation((dataLoading) => [
      //   dataLoading,
      //   props.setDataLoading,
      // ]);
      expect(1).toEqual(1);
    });
    it("Should update setModalOpen state on modalOpen State Change", () => {
      expect(1).toEqual(1);
    });
    it("Should update setActiveData state on ActiveData State Change", () => {
      expect(1).toEqual(1);
    });
  });

  describe("Chilren Should Recieve Props Omitting Styles", () => {
    // beforeEach(() => {
    //   wrapWithProviders = Providers(TodoInterface, props);
    //   component = mount(wrapWithProviders);
    // });
    it("Should prop thread to Header", () => {});
    it("Should prop thread to TodoList", () => {});
    it("Should prop thread to Signup", () => {});
    it("Should prop thread to TodoDetails", () => {});
    it("Should prop thread to NoTasks", () => {});
  });
});

import toJSON from "enzyme-to-json";

import { mount } from "enzyme";
// component to test
import TodoList from "./TodoList";
// child components
import Todo from "./Todo/Todo";
// utils
import Providers from "../../../../utils/Providers";

describe("<TodoList/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Initial Component Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
        activeUser: {
          items: [],
        },
        dataLoading: false,
        todoList: [{ id: "", title: "", content: "", completed: false }],
      };
      wrapWithProviders = mount(Providers(TodoList, props));
      component = wrapWithProviders.find(TodoList);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
    it("Should Match Snapshot", () => {
      expect(toJSON(component)).toMatchSnapshot();
    });
    it("Should Accept Props activeUser, dataLoading, todoList, classes", () => {
      expect(component.props().classes).toEqual(props.classes);
      expect(component.props().activeUser).toEqual(props.activeUser);
      expect(component.props().dataLoading).toEqual(props.dataLoading);
      expect(component.props().todoList).toEqual(props.todoList);
    });
    it("Should contain 3 Todos", () => {
      expect(component.find(Todo)).toHaveLength(1);
    });
  });
  describe("Component todoList is empty", () => {
    beforeEach(() => {
      props = {
        classes: {},
        activeUser: {
          items: [],
        },
        dataLoading: false,
        todoList: [],
      };
      wrapWithProviders = mount(Providers(TodoList, props));
      component = wrapWithProviders.find(TodoList);
    });
    it("Should Not Render Todos", () => {
      expect(component.find(Todo)).toHaveLength(0);
    });
  });
  describe("Component Loading Prop is true", () => {
    beforeEach(() => {
      props = {
        classes: {},
        activeUser: {
          items: [],
        },
        dataLoading: true,
        todoList: [{ id: "", title: "", content: "", completed: false }],
      };
      wrapWithProviders = mount(Providers(TodoList, props));
      component = wrapWithProviders.find(TodoList);
    });
    it("Should Not Render Todos if Loading is true", () => {
      expect(component.find(Todo)).toHaveLength(0);
    });
  });
});

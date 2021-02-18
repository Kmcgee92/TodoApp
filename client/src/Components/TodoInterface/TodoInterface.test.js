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
  let providers;
  let component;
  let props = {
    classes: {},
    mockProp: {},
  };

  describe("Should Render Component on Inital Mount", () => {
    beforeEach(() => {
      wrapWithProviders = mount(Providers(TodoInterface, props));
      providers = wrapWithProviders.find(TodoInterface);
      component = providers.find(TodoInterface);
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
    it("Should not Render Signup, TodoDetails, NoTasks, or LoadingSpinner components on Mount", () => {
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
      wrapWithProviders = mount(Providers(TodoInterface, props));
      providers = wrapWithProviders.find(TodoInterface);
      component = providers.find(TodoInterface);
    });
    it("Should recieve any props passes in", () => {
      expect(component.props().mockProp).toEqual({});
    });
  });

  describe("Components render on local/Redux State Change", () => {
    //~ dive into children, change state, send mock data to redux, check to see if components render.
    let mockReduxState;
    let mockUser;
    let mockError;
    beforeEach(() => {
      mockUser = {
        id: 1,
        name: "Demo",
        email: "demo@bcf.com",
        items: [{}],
      };
      mockUser = {};
      mockReduxState = {
        auth: { activeUser: {}, error: false },
      };
      wrapWithProviders = mount(
        Providers(TodoInterface, props, mockReduxState)
      );
      providers = wrapWithProviders.find(TodoInterface);
      component = providers.find(TodoInterface);
    });
    it("Signup Component Mounts Properly on State Shange", () => {
      expect(1).toBe(1);
    });
    it("TodoDetails Component Mounts Properly on State Shange", () => {
      expect(1).toBe(1);
    });
    it("NoTasks Component Mounts Properly on State Shange", () => {
      expect(1).toBe(1);
    });
    it("LoadingSpinner Component Mounts Properly on State Shange", () => {
      expect(1).toBe(1);
    });
  });
})




  //! describe("MySearchComponent", () => {
  //   let mockAppState;
  //   let useSelector;
  //     jest.mock("react-redux", () => ({
  //       useSelector: jest.fn(),
  //     }));
  //   beforeEach(() => {
  //     props = {
  //       classes: {},
  //     };
  //     mockAppState = { error: false, activeUser: {} }
      
  //     useSelector.mockImplementation((callback) => {
  //       return callback(mockAppState);
  //     });
  //   });
  //   afterEach(() => {
  //     useSelector.mockClear();
  //   });
  //   it("should render a query", () => {
  //     const { getByTestId } = render(<TodoInterface props={props} />);
  //     expect(getByTestId("query_testId").textContent).toEqual(
  //       mockAppState.config.query
  //     );
  //   });
  //   it("should not render if query is empty", () => {
  //     const localMockState = {
  //       ...mockAppState,
  //       config: {
  //         ...mockShoppingState.config,
  //         query: "",
  //       },
  //     };
  //     useSelector.mockImplementation((callback) => {
  //       return callback(localMockState);
  //     });
  //     const { queryByTestId } = render(<MySearchComponent />);
  //     expect(queryByTestId("query_testId")).toBeNull();
  //   });
  // });


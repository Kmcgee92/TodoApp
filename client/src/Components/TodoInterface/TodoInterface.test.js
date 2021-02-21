import React from "react";
import { mount } from "enzyme";
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
  beforeEach(() => {
    wrapWithProviders = mount(Providers(TodoInterface, props));
    component = wrapWithProviders.find(TodoInterface);
  });

  describe("Should Render Component on Inital Mount", () => {
    beforeEach(() => {
      wrapWithProviders = mount(Providers(TodoInterface, props));
      component = wrapWithProviders.find(TodoInterface);
    });
    it('Should Match Snapshot', () => {
      expect(component).toMatchSnapshot()
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
    it("Should recieve any props passed in", () => {
      expect(component.props().classes).toEqual({});
    });
  });

  describe("Signup/TodoDetails/NoTasks Render on State Changes", ()=> {
    
    describe("Signup Component render", () => {
      it("Signup Button Function is successfully called on onClick event", () => {
        let mockChildProps = {
          activeUser: {}, 
          modalOpen: false, 
          setModalOpen: jest.fn(), 
          classes: {}
        }
        const childComponentGreeter = mount(<Greeter {...mockChildProps}/>)
        findByTestAtrr(childComponentGreeter, "signupModalOpen").simulate("click")
        expect(mockChildProps.setModalOpen).toBeCalledTimes(1)
      });

      it("Should Mount Signup Component Properly on State Change", () => {
        let signupSpan = findByTestAtrr(component, "signupModalOpen");
        signupSpan.simulate("click")
        //! because TodoInterface is wrapped with providers, ONLY root will update
        expect(wrapWithProviders.find(Signup)).toHaveLength(1)
      });
    })

    describe("TodoDetails Component Render", () => {
      it("Should Mount TodoDetails Component Properly on State Change", () => {
        let mockUser = {
          activeUser: {},
          error: false,
        };
        let mockTodos = [
          {
            id: 1,
            title: "mock",
            content: "mock",
            completed: false,
            __typename: "Item",
          },
        ];
        let mockReduxState = {
          active: 1,
          auth: mockUser,
          todos: mockTodos,
        };
        wrapWithProviders = mount(
          Providers(TodoInterface, props, mockReduxState)
        );
        component = wrapWithProviders.find(TodoInterface);
        expect(component.find(TodoDetails)).toHaveLength(1);
      });
    });

    describe("NoTasks Component Render", () => {
      it("Should Mount NoTasks Component Properly on State Change", () => {
        let mockReduxState = {
          auth: {
            activeUser: {
              items: "mockTRUE",
            },
            error: false,
          },
          todos: []
        };
  
        wrapWithProviders = mount(
          Providers(TodoInterface, props, mockReduxState)
          );
        component = wrapWithProviders.find(TodoInterface);
        expect(component.find(NoTasks)).toHaveLength(1);
      });
    })
    describe("LOADING SPINNER COMPONENT NEEDS A TEST FROM PARENT", ()=> {
      it("NEEDS TO HAVE A TEST FOR THE SET TIMEOUT ON dataLoading STATE", () => {
        expect(1).toBe(1)
      })
    })
  })
})

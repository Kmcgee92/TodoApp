import toJSON from "enzyme-to-json";

import { mount } from "enzyme";
// component to test
import Header from "./Header";
// child components
import Login from "../../Auth/Login";
import Logout from "../../Auth/Logout";
import Add from "./Add";
import Delete from "./Delete";

// utils
import Providers from "../../../../utils/Providers";
import { findByTestAtrr } from "../../../../utils/index";

describe("<Header/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Initial Component Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Header, props));
      component = wrapWithProviders.find(Header);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
    it("Should Match Snapshot", () => {
      expect(toJSON(component)).toMatchSnapshot();
    });
  });
  describe("Should Alter Render on Login", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      let reduxState = {
        auth: {
          token: "MOCKTOKEN",
          activeUser: { mock: "MOCKUSER" },
        },
      };
      wrapWithProviders = mount(Providers(Header, props, reduxState));
      component = wrapWithProviders.find(Header);
    });
    it("Should Render With Add, Delete, and Logout Components after Login", () => {
      expect(component.find(Logout)).toHaveLength(1);
      expect(component.find(Add)).toHaveLength(1);
      expect(component.find(Delete)).toHaveLength(1);
    });
  });
  describe("Should Render Login", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Header, props));
      component = wrapWithProviders.find(Header);
    });
    it("Should Render With Login Component on Mount", () => {
      expect(component.find(Login)).toHaveLength(1);
    });
  });
});

import { mount } from "enzyme";
// component to test
import Logout from "./Logout";
// child components
import Button from "@material-ui/core/Button";
// utils
import Providers from "../../../utils/Providers";
describe("<Logout/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Component Initial Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Logout, props));
      component = wrapWithProviders.find(Logout);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
    it("Should Match Snapshot", () => {
      expect(component).toMatchSnapshot();
    });
    it("Should Render Cancel Button", () => {
      expect(component.find(Button)).toHaveLength(1);
    });
  });
  describe("Logout onClick Event", () => {
    beforeEach(() => {
      props = {
        handleLogout: jest.fn(),
        classes: {},
      };
      wrapWithProviders = mount(Providers(Logout, props));
      component = wrapWithProviders.find(Logout);
    });
    it("Should Trigger Callback on Button onClick", () => {
      expect(component.find(Button).props().onClick).toEqual(
        expect.any(Function)
      );
    });
  });
});

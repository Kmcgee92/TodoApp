import toJSON from "enzyme-to-json";

import { mount } from "enzyme";
// component to test
import NoTasks from "./NoTasks";
// child components
import BeenhereIcon from "@material-ui/icons/Beenhere";
// utils
import Providers from "../../../../utils/Providers";

describe("<NoTasks/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Initial Component Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(NoTasks, props));
      component = wrapWithProviders.find(NoTasks);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
    it("Should Match Snapshot", () => {
      expect(toJSON(component)).toMatchSnapshot();
    });
    it("Should Render BeenhereIcon", () => {
      let beenHereIcon = component.find(BeenhereIcon);
      expect(beenHereIcon).toHaveLength(1);
    });
    it("Should Render Text", () => {
      let div = component.findWhere(
        (div) => div.text() === "Looks like you dont have any tasks to do!"
      );
      expect(div.at(3).text()).toEqual(
        "Looks like you dont have any tasks to do!"
      );
    });
  });
});

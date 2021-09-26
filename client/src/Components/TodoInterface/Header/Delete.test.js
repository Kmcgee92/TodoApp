import toJSON from "enzyme-to-json";

import { mount } from "enzyme";
// component to test
import Delete from "./Delete";
// child components
import DeleteIcon from "@material-ui/icons/Delete";
// utils
import Providers from "../../../../utils/Providers";

describe("<Delete/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Initial Component Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Delete, props));
      component = wrapWithProviders.find(Delete);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
    it("Should Match Snapshot", () => {
      expect(toJSON(component)).toMatchSnapshot();
    });
    it("Should Render NoteAddIcon", () => {
      let deleteIcon = component.find(DeleteIcon);
      expect(deleteIcon).toHaveLength(1);
      expect(deleteIcon.props().onClick).toBeDefined();
    });
  });
});


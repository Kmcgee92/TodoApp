import { act } from "react-dom/test-utils";

import { shallow, render, mount } from "enzyme";
import toJSON from "enzyme-to-json";
// component to test
import Add from "./Add";
// child components
import NoteAddIcon from "@material-ui/icons/NoteAdd";

// utils
import Providers from "../../../../utils/Providers";
import { findByTestAtrr } from "../../../../utils/index";

describe("<Add/>", () => {
  let props;
  let wrapWithProviders;
  let component;
  describe("Initial Component Rendering", () => {
    beforeEach(() => {
      props = {
        classes: {},
      };
      wrapWithProviders = mount(Providers(Add, props));
      component = wrapWithProviders.find(Add);
    });
    it("Should Render", () => {
      expect(component).toHaveLength(1);
    });
    it("Should Match Snapshot", () => {
      expect(toJSON(component)).toMatchSnapshot();
    });
    it("Should Render NoteAddIcon", () => {
      let noteAddIcon = component.find(NoteAddIcon);
      expect(noteAddIcon).toHaveLength(1);
      expect(noteAddIcon.props().onClick).toBeDefined();
    });
  });
});

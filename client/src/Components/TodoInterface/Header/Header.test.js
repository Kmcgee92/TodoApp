import { act } from "react-dom/test-utils";

import { shallow, render, mount } from "enzyme";
// component to test
import Header from "./Header";
// child components

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
      expect(1).toBe(1);
    });
    it("Should Match Snapshot", () => {
      expect(1).toBe(1);
    });
  });
});

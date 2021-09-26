import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
// component to test
import Greeter from "./Greeter";
// utils
import { findByTestAtrr } from "../../../../utils/index";


describe("<Greeter />", () => {
  let greeter;

  let mockProps = {
    activeUser: {},
    modalOpen: false,
    setModalOpen: jest.fn(),
    classes: {},
  };
  beforeEach(() => {
    greeter = shallow(<Greeter {...mockProps} />);
  });
  it("Should Render", () => {
    expect(greeter).toHaveLength(1);
    expect(toJSON(greeter)).toMatchSnapshot();
  });
  it("Should Call Props Function 'SetModalOpen' utilizing onClick", () => {
    findByTestAtrr(greeter, "signupModalOpen").simulate("click");
    expect(mockProps.setModalOpen).toBeCalledTimes(1);
  });
  it("Should Not Render data-test='greeting' When There is an Active User", () => {
    mockProps.activeUser = { mockUser: {} };
    greeter = shallow(<Greeter {...mockProps} />);
    expect(findByTestAtrr(greeter, "greeting")).toHaveLength(0);
  });
});

import React from "react";
import { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { act } from "react-dom/test-utils";
// component to test
import { LoadingSpinnerUX } from "./LoadingSpinner";
// mui component
import CircularProgress from "@material-ui/core/CircularProgress";
import CachedIcon from "@material-ui/icons/Cached";
import CheckIcon from "@material-ui/icons/Check";

// utils
import { findByTestAtrr } from "../../../../utils/index";
import twoSecondTmer from "../../../../utils/twoSecondTimer";

describe("<LoadingSpinner />", () => {
  let loadingSpinnerUX;
  let mockProps = {
    classes: {},
    loading: false,
    setLoading: jest.fn(),
    success: false,
    setSuccess: jest.fn(),
  };
  describe("Static State Testing", () => {
    it("Should Render", () => {
      loadingSpinnerUX = shallow(<LoadingSpinnerUX {...mockProps} />);
      expect(loadingSpinnerUX).toHaveLength(1);
      expect(toJSON(loadingSpinnerUX)).toMatchSnapshot();
    });
    it("Should display <CircularProgress/> and <CachedIcon/> on Static State Mount", () => {
      mockProps = {
        classes: {},
        loading: true,
        setLoading: jest.fn(),
        success: false,
        setSuccess: jest.fn(),
      };
      loadingSpinnerUX = shallow(<LoadingSpinnerUX {...mockProps} />);
      expect(loadingSpinnerUX.find(CircularProgress)).toHaveLength(1);
      expect(loadingSpinnerUX.find(CachedIcon)).toHaveLength(1);
    });
  });
  describe("State Change Testing", () => {
    it("Should not display <CircularProgress/> After State Change", () => {
      mockProps = {
        classes: {},
        loading: false,
        setLoading: jest.fn(),
        success: true,
        setSuccess: jest.fn(),
      };
      loadingSpinnerUX = shallow(<LoadingSpinnerUX {...mockProps} />);
      expect(loadingSpinnerUX.find(CircularProgress)).toHaveLength(0);
      expect(loadingSpinnerUX.find(CachedIcon)).toHaveLength(0);
      expect(loadingSpinnerUX.find(CheckIcon)).toHaveLength(1);
    });
    it("Should Trigger React useEffect on Mount and Execute Timeout", async () => {
      loadingSpinnerUX = mount(<LoadingSpinnerUX {...mockProps} />);
      expect(mockProps.setLoading).toBeCalledTimes(1);
      expect(mockProps.setSuccess).toBeCalledTimes(1);
      await twoSecondTmer();
      expect(mockProps.setLoading).toBeCalledTimes(2);
      expect(mockProps.setSuccess).toBeCalledTimes(2);
    });
  });
});

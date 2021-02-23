import { SET_ACTIVE } from "../actions/activeActions";

import { active } from "./active";

describe("Active Reducer", () => {
  it("Should Return 1 when 1 is Passed Through Action", () => {
    let mockState = "";
    let mockAction = {
      type: SET_ACTIVE,
      id: 1,
    };
    let returnedState = active(mockState, mockAction);
    expect(returnedState).toEqual(1);
  });
  it("Should Return 2 when 2 is Passed Through Action", () => {
    let mockState = "";
    let mockAction = {
      type: SET_ACTIVE,
      id: 2,
    };
    let returnedState = active(mockState, mockAction);
    expect(returnedState).toEqual(2);
  });
  it("Should Return Previous State if no action.type Matches", () => {
    let mockState = "";
    let mockAction = {
      type: "MOCK_ACTION",
      id: 2,
    };
    let returnedState = active(mockState, mockAction);
    expect(returnedState).toEqual("");
  });
});

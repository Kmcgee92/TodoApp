import {
  REFRESH_LIST,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  CLEAR_TODOS,
  UPDATE_TODOS,
} from "../actions/userTodoActions";

import { todos } from "../reducers/Todos";

describe("Todos Reducer", () => {
  describe("Initial State", () => {
    it("Should return Initial State", () => {
      let action = { type: "MOCK_ACTION" };
      let mockInitialState = [];
      expect(todos(undefined, action)).toEqual(mockInitialState);
    });
  });
  describe("REFRESH_LIST Action", () => {
    it("Should Expect RefreshList Case to Return Proper State Update", () => {
      let mockState = [];
      let mockAction = {
        type: "REFRESH_LIST",
        data: "MOCKDATA",
      };
      let expectedStateReturn = mockAction.data;
      let returnedState = todos(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
  });
  describe("ADD_TO_LIST Action", () => {
    it("Should Expect addToList Case to Return Proper State Update", () => {
      let mockState = [];
      let mockAction = {
        type: "ADD_TO_LIST",
        item: "MOCKDATA",
      };
      let expectedStateReturn = [mockAction.item, ...mockState];
      let returnedState = todos(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
      let secondMockAction = {
        type: "ADD_TO_LIST",
        item: "MOREMOCKDATA",
      };
      let secondExpectedStateReturn = [secondMockAction.item, ...mockState];
      let finalReturnedState = todos(mockState, secondMockAction);
      expect(finalReturnedState).toEqual(secondExpectedStateReturn);
    });
  });
  describe("REMOVE_FROM_LIST Action", () => {
    it("Should Expect RemoveFromList Case to Return Proper State Update", () => {
      let mockState = [{ id: 1 }, { id: 2 }, { id: 3 }];
      let mockAction = {
        type: "REMOVE_FROM_LIST",
        id: 2,
      };
      let expectedStateReturn = [{ id: 1 }, { id: 3 }];
      let returnedState = todos(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
  });
  describe("CLEAR_TODOS Action", () => {
    it("Should Expect clearTodos Case to Return Proper State Update", () => {
      let mockState = [{ id: 1 }, { id: 2 }, { id: 3 }];
      let mockAction = {
        type: "CLEAR_TODOS",
      };
      let expectedStateReturn = [];
      let returnedState = todos(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
  });
  describe("UPDATE_TODOS Action", () => {
    it("Should Expect updateTodos Case to Return Proper State Update", () => {
      let mockState = [{ id: 1 }, { id: 2, mock: "initialMock" }, { id: 3 }];
      let mockAction = {
        type: "UPDATE_TODOS",
        data: {
          id: 2,
          mock: "newMock",
        },
      };
      // order matters on return value
      let expectedStateReturn = [
        { id: 2, mock: "newMock" },
        { id: 1 },
        { id: 3 },
      ];
      let returnedState = todos(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
  });
});

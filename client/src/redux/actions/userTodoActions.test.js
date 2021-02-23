import {
  REFRESH_LIST,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  CLEAR_TODOS,
  UPDATE_TODOS,
} from "./userTodoActions";

import {
  refreshList,
  addToList,
  removeFromList,
  clearTodos,
  updateTodos,
} from "./userTodoActions";

describe("userTodoActions", () => {
  it("Should Return Proper refreshList Payload on Function Call", () => {
    let mockData = "mockData";
    expect(refreshList(mockData)).toEqual({
      type: REFRESH_LIST,
      data: mockData,
    });
  });
  it("Should Return Proper addToList Payload on Function Call", () => {
    let mockData = "mockData";
    expect(addToList(mockData)).toEqual({
      type: ADD_TO_LIST,
      item: mockData,
    });
  });
  it("Should Return Proper removeFromList Payload on Function Call", () => {
    let mockData = "mockData";
    expect(removeFromList(mockData)).toEqual({
      type: REMOVE_FROM_LIST,
      id: mockData,
    });
  });
  it("Should Return Proper clearTodos Payload on Function Call", () => {
    expect(clearTodos()).toEqual({ type: CLEAR_TODOS });
  });
  it("Should Return Proper updateTodos Payload on Function Call", () => {
    let mockData = "mockData";
    expect(updateTodos(mockData)).toEqual({
      type: UPDATE_TODOS,
      data: mockData,
    });
  });
});

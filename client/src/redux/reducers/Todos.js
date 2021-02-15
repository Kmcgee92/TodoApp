import {
  REFRESH_LIST,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  CLEAR_TODOS,
  UPDATE_TODOS,
} from "../actions/userTodoActions";

export const todos = (state = [], action) => {

  let nextState = state;
  switch (action.type) {
    case REFRESH_LIST:
      nextState = action.data;
      return nextState;
    case ADD_TO_LIST:
      nextState = [action.item, ...state];
      return nextState;
    case REMOVE_FROM_LIST:
      nextState = state.filter((item) => {
        return item.id !== action.id;
      });
      return nextState;
    case CLEAR_TODOS:
      return [];
    case UPDATE_TODOS: 
      const currentItemId = action.data.id
      const updatedNextState = nextState.filter(i=>i.id !== currentItemId)
      updatedNextState.unshift(action.data)
      return updatedNextState
    default:
      return state;
  }
};

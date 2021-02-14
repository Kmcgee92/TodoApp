import {
  REFRESH_LIST,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
} from "../actions/userTodoActions";

export const todos = (state = [], action) => {
  let nextState = [...state];
  switch (action.type) {
    case REFRESH_LIST:
      nextState = action.data;
      return nextState;
    case ADD_TO_LIST:
      nextState = [action.item, ...state];
      console.log("NEXT STATETETETET", nextState);
      console.log("ADDING TO LIST");
      return nextState;
    case REMOVE_FROM_LIST:
      console.log(nextState);
      console.log(typeof action.id);
      nextState = state.filter((item) => {
        return item.id !== action.id;
      });
      console.log(nextState);
      return nextState;
    default:
      return state;
  }
};

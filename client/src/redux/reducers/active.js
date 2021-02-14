import { SET_ACTIVE } from "../actions/activeActions";

export const active = (state = "", action) => {
  if (action.type === SET_ACTIVE) {
    if (action.id !== "") {
      const nextState = Number(action.id);
      return nextState;
    } else {
      return action.id;
    }
  } else {
    return state;
  }
};

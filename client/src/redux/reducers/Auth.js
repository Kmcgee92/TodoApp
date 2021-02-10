import { SET_USER, REMOVE_USER, CREATE_USER } from "../actions/authActions";

export const auth = (
  state = { activeUser: {}, errorLoggingIn: false },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case CREATE_USER:
      return action.user;
    // case UPDATE_PROFILE:
    //   const nextState = { ...state };
    //   nextState.profile = action.profileId;
    //   return nextState;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

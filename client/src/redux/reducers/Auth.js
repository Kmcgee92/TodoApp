import {
  SET_USER,
  LOGIN_USER,
  LOGOUT_USER
} from "../actions/authActions";

export const auth = (state = { error: false, activeUser: {} }, action) => {
  let nextState = {...state, error: false}
  switch (action.type) {
    case LOGIN_USER:
      const {  error, token, user  } = action.data.Login;
      if  (action.data.Login.error) {
        return {  ...nextState, error  };
      }
      return {...nextState, activeUser: user, token: token};
    case LOGOUT_USER:
      // remove all localStorage set for jwt authentication
      nextState = { error: false, activeUser: {} }
      return nextState
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};

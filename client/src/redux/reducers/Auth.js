import {
  SET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REFRESH_SESSION,
} from "../actions/authActions";

export const auth = (state = { error: false, activeUser: {} }, action) => {
  let nextState = {...state, error: false}
  switch (action.type) {
    case LOGIN_USER:
      let { error, token, user } = action.data.Login;
      if (action.data.Login.error) {
        return { ...nextState, error };
      }
      return { ...nextState, activeUser: user, token: token };
    case LOGOUT_USER:
      // remove all localStorage set for jwt authentication
      nextState = { error: false, activeUser: {} };
      return nextState;
    case REFRESH_SESSION:
      nextState = {
        error: action.data.GetActiveUser.error,
        token: action.data.GetActiveUser.token,
        activeUser: {
          id: action.data.GetActiveUser.user.id,
          name: action.data.GetActiveUser.user.name,
          email: action.data.GetActiveUser.user.email,
          items: action.data.GetActiveUser.user.items,
        }
      }
      return nextState;
    default:
      return state;
  }
};

import Cookies from "js-cookie";


export const SET_USER = "SET_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//!ACTIONS
export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    data,
  };
};
export const logoutUser = (data) => {
  return {
    type: LOGOUT_USER,
    data,
  };
};


//! THUNKS
//login thunk
export const loginHandler = (data) => {
  return async (dispatch) => {
    Cookies.set("token", data.Login.token);
    dispatch(loginUser(data));
  };
}

export const logoutHandler = () => {
  return async (dispatch) => {
    Cookies.remove("token");
    dispatch(logoutUser());
  };
};

export const signupHandler = (data) => async (dispatch) => {
  Cookies.set("token", data.Signup.token)
  data.Login = data.Signup
  dispatch(loginUser(data))

};


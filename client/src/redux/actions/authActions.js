import Cookies from "js-cookie";


export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REFRESH_SESSION = "REFRESH_SESSION";


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

export const refreshSession = (data) => {
  return {
    type: REFRESH_SESSION,
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



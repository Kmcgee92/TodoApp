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
    console.log(data);
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
//restore user thunk
// export const generateSession = () => async (dispatch) => {
//   // const access = Cookies.get("access_token_cookie");
//   const res = await fetch("/api/users/token/refresh", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (res.ok) {
//     const data = await res.json();
//     dispatch(setUser(data));
//   }
//   return res;
// };

//logout thunk
// export const logout = () => async (dispatch) => {
//   const res = await fetch("/api/users/token/remove", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (res.ok) {
//     dispatch(removeUser());
//   }
//   return res;
// };

// export const signup = (name, email, password) => async (dispatch) => {
//   const response = await fetch("/api/users/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, password }),
//   });
//   if (response.ok) {
//     const user = await response.json();
//     dispatch(createUser(user));
//   }
// };


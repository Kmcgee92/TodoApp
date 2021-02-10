// import Cookies from "js-cookie";
// Apollo GQL
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import {GET_USER} from "../../graphql/queries/GetUser"


export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const CREATE_USER = "CREATE_USER";

//!ACTIONS
export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};


//! THUNKS
//restore user thunk
export const generateSession = () => async (dispatch) => {
  // const access = Cookies.get("access_token_cookie");
  const res = await fetch("/api/users/token/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(setUser(data));
  }
  return res;
};

//login thunk
export const loginHandler = (data) => {
  return async (dispatch) => {
    console.log("user info recieved", data);
  };
}

//logout thunk
export const logout = () => async (dispatch) => {
  const res = await fetch("/api/users/token/remove", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    dispatch(removeUser());
  }
  return res;
};

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


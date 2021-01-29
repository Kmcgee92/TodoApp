import Cookies from "js-cookie";

export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

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

const updateProfile = (profileId) => {
  return {
    type: UPDATE_PROFILE,
    profileId,
  };
};

//! THUNKS
//restore user
export const generateSession = () => async (dispatch) => {
  const access = Cookies.get("access_token_cookie");
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

//login
export const login = (email, password) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(setUser(data));
    }
    return res;
  };
};
//logout
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

export const signup = (name, email, password) => async (dispatch) => {
  const response = await fetch("/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (response.ok) {
    const user = await response.json();
    dispatch(createUser(user));
  }
};

export const updateUserProfile = (userId, profileId) => async (dispatch) => {
  const res = await fetch(`/api/users/profiles/${userId}/update/${profileId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const { profile } = await res.json();
    dispatch(updateProfile(profileId));
  }
  return res;
};

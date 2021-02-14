export const REFRESH_LIST = "REFRESH_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const CLEAR_TODOS = "CLEAR_TODOS";
export const UPDATE_TODOS = "UPDATE_TODOS";

export const refreshList = (data) => {
  return {
    type: REFRESH_LIST,
    data,
  };
};
export const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item,
  };
};
export const removeFromList = (id) => {
  return {
    type: REMOVE_FROM_LIST,
    id,
  };
};
export const clearTodos = () => {
  return {
    type: CLEAR_TODOS,
  };
};

export const updateTodos = (data) => {
  return {
    type: UPDATE_TODOS,
    data,
  };
};
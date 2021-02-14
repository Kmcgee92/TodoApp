export const REFRESH_LIST = "REFRESH_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

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

export const addUser = (userData) => (dispatch) => {
  dispatch({ type: "USER_CREATE_SUCCESS", payload: userData });
};
export const listUsers = () => (dispatch, getState) => {
  console.log("getState", getState().UserReducer.users);
  dispatch({
    type: "USER_LIST_ADD",
    payload: getState().UserReducer.users,
  });
};
export const deleteUsers = (userId) => (dispatch) => {
  dispatch({
    type: "USER_LIST_DELETE",
    payload: userId,
  });
};

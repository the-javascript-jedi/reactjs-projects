import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";
// action creator - FETCH_USERS_REQUEST
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
// action creator - FETCH_USERS_SUCCESS
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
// action creator - FETCH_USERS_FAILURE
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
// action creator - FETCH_USERS api request
export const fetchUsers = () => {
  //using thunk we can return a function instead of an object
  //this function does not need to be pure it can have async api calls,
  //it receives the dispatch method as its argument
  return (dispatch) => {
    // dispatch FETCH_USERS_REQUEST action
    dispatch(fetchUsersRequest);
    // dispatch FETCH_USERS_SUCCESS
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

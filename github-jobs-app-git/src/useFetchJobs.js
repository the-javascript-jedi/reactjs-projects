import { useReducer, useEffect } from "react";
import axios from "axios";
// custom hook to get all the api data
const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = proxyurl + "https://jobs.github.com/positions.json";
// reducer takes state and action, it gets called everytime we call dispatch,
//and dispatch whatever we pass to it is populated inside the action variable
/*eg:dispatch({type:'hello',payload:{x:3}})*/
/*eg:inside reducer we can acces the dispatch data using action.type or action.payload.x*/
//state is the current state of our application
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return { ...state, loading: false, jobs: action.payload.error, jobs: [] };
  }
}
export default function useFetchJobs(params, page) {
  //we use usReducer to handle all the different state inside our useFetchJobs
  //first argument is the reducer function,second argument is the initial state which is the object
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });
  // whenever our params,page value changes we need to run the useEffect hook
  useEffect(() => {
    // we create a unique canceltoken to cleanup the axios request after each request is made
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        // pass the canceltoken inside the request
        cancelToken: cancelToken.token,
        //..params take all our current params and put inside the params itself
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        console.log("res.data", res.data);
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        // whenever our request is cancelled using cancelToken, it will call the catch portion
        if (axios.isCancel(e)) {
          // error is caught using cancelToken we return and ignore the error as cancelToken error is actually not an error
          return;
        } else {
          dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
        }
      });
    // return is run whenever we change any of the params values
    return () => {
      // cancelToken is cancelled
      cancelToken.cancel();
    };
  }, [params, page]);
  return state;
}

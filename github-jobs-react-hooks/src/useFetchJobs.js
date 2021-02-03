import { useReducer, useEffect } from "react";
import axios from "axios";
// constants for action
const ACTIONS = {
  MAKE_REQUEST: "MAKE_REQUEST",
  GET_DATA: "GET_DATA",
  ERROR: "ERROR",
};
//for development pupose to overcome CORS issue use below url in front of requesting url
//we need a server to act as aproxy to get around cors
//https://cors-anywhere.herokuapp.com
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
// reducer function for useReducer
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
}
//params-list of parameters,page we are currently on
export default function useFetchJobs(params, page) {
  // pass in reducer function and initial state
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    // create a axios cancel token so whenever our params change cancel the old request
    //if the response of the first request arrives after the response of the second request, then we might render inconsistent data.
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        // set markdown:true to get all description fields in markdown
        // ...params - take all our current params(eg:description,location,full_time) and put them in params as well
        params: {
          markdown: true,
          page: page,
          ...params,
        },
      })
      .then((res) => {
        // dispatch and action to GET_DATA and set the paylaod to response.data
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        // cancel token will be caught as error so we need to ensure that the error caught is not due to cancel token
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  }, [params, page]);

  return state;
}

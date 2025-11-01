import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";
// saveComment action creator
export function saveComment(comment) {
  // payload is received from action creator
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
// fetchComments Action creator
export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}

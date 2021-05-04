import { SAVE_COMMENT } from "./types";
// saveComment action creator
export function saveComment(comment) {
  // payload is received from action creator
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

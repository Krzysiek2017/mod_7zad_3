import uuid from "uuid";

export const CREATE_COMMENT = "CREATE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
export const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";

export function createComment(text) {
  return {
    type: CREATE_COMMENT,
    text,
    id: uuid.v4()
  };
}

export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  };
}

export function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  };
}

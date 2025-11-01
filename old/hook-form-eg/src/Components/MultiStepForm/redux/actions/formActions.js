// add a survey
export const addFormData = (data) => (dispatch) => {
  console.log("data", data);
  dispatch({
    type: "FORM_ADD_ITEM",
    payload: data,
  });
};

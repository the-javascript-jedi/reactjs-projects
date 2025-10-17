// test surveys
const ALL_DATA = {
  yourDetails: {
    firstName: "redux first",
    lastName: "redux last",
    age: "redux age",
    yearsOfExperience: "redux 6",
  },
};

export const formReducer = (
  state = { formData: ALL_DATA.yourDetails },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case "FORM_ADD_ITEM":
      return {
        // ...state,
        // formData: [...state.formData, item],
        formData: action.payload,
      };
    default:
      return state;
  }
};

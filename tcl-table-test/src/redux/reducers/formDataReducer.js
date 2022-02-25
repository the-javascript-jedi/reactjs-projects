const initialState = {
  users: [
    {
      id: 1,
      nameOfUser: "nameOfUser",
      age: "age",
      gender: "gender",
      infoVerified: "infoVerified",
    },
  ],
};

export const UserReducer = (state = { users: initialState.users }, action) => {
  switch (action.type) {
    case "USER_CREATE_SUCCESS":
      return {
        users: [...state.users, action.payload],
      };
    case "USER_LIST_ADD":
      //   console.log("USER_LIST_ADD-state", state);
      return {
        users: state.users,
      };
    case "USER_LIST_DELETE":
      const userIdToDelete = action.payload;
      // find the index of element to delete
      const index = state.users.findIndex((user) => user.id === userIdToDelete);
      // const index = state.users.indexOf(userIdToDelete);
      const usersState = [...state.users];
      if (index > -1) {
        usersState.splice(index, 1); // 2nd parameter means remove one item only
      }
      return {
        ...state,
        users: usersState,
      };
    default:
      return state;
  }
};

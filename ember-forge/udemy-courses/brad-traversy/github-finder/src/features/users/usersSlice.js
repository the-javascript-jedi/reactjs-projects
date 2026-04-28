import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    //  `${import.meta.env.VITE_GITHUB_URL}/search/users?q=brad&per_page=10`,
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return thunkAPI.rejectWithValue(
        data.message || "Failed to fetch GitHub users",
      );
    }

    return Array.isArray(data) ? data : [];
  },
);

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unable to load users";
      });
  },
});

export default usersSlice.reducer;

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

export const searchUsers = createAsyncThunk(
  "users/searchUsers",
  async (text, thunkAPI) => {
    const params = new URLSearchParams({
      q: text,
      per_page: 10,
    });
    // https://api.github.com/search/users?q=brad&per_page=10
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return thunkAPI.rejectWithValue(
        data.message || "Failed to fetch GitHub users",
      );
    }

    return Array.isArray(data.items) ? data.items : [];
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
  reducers: {
    clearUsers: (state) => {
      state.users = [];
      state.error = null;
      state.loading = false;
    },
  },
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
      })
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unable to load users";
      });
  },
});

export const { clearUsers } = usersSlice.actions;

export default usersSlice.reducer;

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

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async (loginName, thunkAPI) => {
    // 👈 add thunkAPI
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/users/${loginName}`,
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

    return data; // 👈 also fixed: was returning data.items (wrong for a single user)
  },
);

export const getUserRepos = createAsyncThunk(
  "users/getuserRepos",
  async (loginName, thunkAPI) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    // 👈 add thunkAPI
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/users/${loginName}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      },
    );

    const data = await response.json();
    console.log("data-repos", data);
    if (!response.ok) {
      return thunkAPI.rejectWithValue(
        data.message || "Failed to fetch GitHub users",
      );
    }

    return data; // 👈 also fixed: was returning data.items (wrong for a single user)
  },
);

const initialState = {
  users: [],
  user: {},
  repos: [],
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
      })
      .addCase(getSingleUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unable to load user";
      })
      .addCase(getUserRepos.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.repos = action.payload;
      })
      .addCase(getUserRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUsers } = usersSlice.actions;

export default usersSlice.reducer;

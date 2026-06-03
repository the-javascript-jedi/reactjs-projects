# Redux Flow for GitHub Finder Example

This document explains the Redux setup in this project, focusing on `src/features/users/usersSlice.js`, `src/components/users/UserSearch.jsx`, and `src/components/users/UserResults.jsx`.

## 1. State Shape

The `users` slice stores these fields:

- `users`: array of GitHub user objects
- `loading`: boolean loading state
- `error`: error message or `null`

```js
const initialState = {
  users: [],
  loading: false,
  error: null,
};
```

## 2. Async Thunks

Two async thunks are defined with `createAsyncThunk`:

- `fetchUsers` — fetches the default users list from `${import.meta.env.VITE_GITHUB_URL}/users`
- `searchUsers` — searches GitHub users by query with `${import.meta.env.VITE_GITHUB_URL}/search/users?q=${text}`

Both thunks return an array of user objects on success, or reject with an error message.

### `fetchUsers`

```js
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` },
    });

    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data.message || "Failed to fetch GitHub users");
    }
    return Array.isArray(data) ? data : [];
  },
);
```

### `searchUsers`

```js
export const searchUsers = createAsyncThunk(
  "users/searchUsers",
  async (text, thunkAPI) => {
    const params = new URLSearchParams({ q: text, per_page: 10 });
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` },
    });

    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data.message || "Failed to fetch GitHub users");
    }
    return Array.isArray(data.items) ? data.items : [];
  },
);
```

## 3. Slice and Reducer Logic

The slice is created with `createSlice` in `src/features/users/usersSlice.js`:

```js
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
```

### What `createSlice` gives us

- `usersSlice.reducer` is the reducer function used by the store
- `usersSlice.actions.clearUsers` is an action creator function
- `createSlice` also builds action type strings like `users/clearUsers`

## 4. Action Creator: `clearUsers`

The `clearUsers` reducer is defined inside `reducers`:

```js
clearUsers: (state) => {
  state.users = [];
  state.error = null;
  state.loading = false;
},
```

When `dispatch(clearUsers())` is called:

1. `clearUsers()` returns an action object, e.g. `{ type: "users/clearUsers" }`
2. Redux dispatches that action
3. The slice reducer receives the action and runs this case
4. The state is updated accordingly

So the component calls an action creator, not the reducer directly.

## 5. Component Wiring

### `UserResults.jsx`

This component loads default users on mount:

- Uses `useDispatch()` to get `dispatch`
- Uses `useSelector((state) => state.users)` to read `users`, `loading`, and `error`
- Calls `dispatch(fetchUsers())` inside `useEffect`
- Renders a spinner, error message, or list using `users`

```js
useEffect(() => {
  dispatch(fetchUsers());
}, [dispatch]);
```

### `UserSearch.jsx`

This component handles search:

- Maintains local input state with `useState`
- Uses `useDispatch()` and `useSelector()` for Redux state
- Dispatches `searchUsers(text)` when the form is submitted
- Dispatches `clearUsers()` when the Clear button is clicked

```js
dispatch(searchUsers(text));
```

and

```js
dispatch(clearUsers());
```

> Note: `searchUsers` and `clearUsers` are action creators generated automatically by `createSlice`.
> You do not need to write separate action creator functions for them.
> The slice already defines the reducer case and exports the action creator through `usersSlice.actions`.

## 6. Flow Summaries

### Default load flow

1. `UserResults` mounts
2. `dispatch(fetchUsers())`
3. `fetchUsers.pending` sets `loading = true`
4. request succeeds
5. `fetchUsers.fulfilled` sets `loading = false` and `users = payload`
6. component displays users

### Search flow

1. User types a query
2. Form submit calls `dispatch(searchUsers(text))`
3. `searchUsers.pending` sets `loading = true`
4. request succeeds
5. `searchUsers.fulfilled` sets `loading = false` and `users = payload`
6. component displays search results

### Clear flow

1. User clicks Clear
2. `dispatch(clearUsers())`
3. `clearUsers` reducer runs
4. Redux state updates to `users = []`, `error = null`, `loading = false`
5. UI updates to show no users found

## 7. Why one slice?

Because both actions affect the same state data:

- `users` list
- `loading`
- `error`

That makes `usersSlice` the right place for both `fetchUsers` and `searchUsers`.

If you kept separate slices, you would duplicate the same state and reducer logic.

## 8. Improvements to avoid duplication

When the logic is the same for multiple thunks, you can simplify using `builder.addMatcher`:

```js
import { isAnyOf } from "@reduxjs/toolkit";

.addMatcher(
  isAnyOf(fetchUsers.pending, searchUsers.pending),
  (state) => {
    state.loading = true;
    state.error = null;
  },
)
.addMatcher(
  isAnyOf(fetchUsers.fulfilled, searchUsers.fulfilled),
  (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
)
.addMatcher(
  isAnyOf(fetchUsers.rejected, searchUsers.rejected),
  (state, action) => {
    state.loading = false;
    state.error = action.payload || "Unable to load users";
  },
)
```

This keeps the slice clean while still handling both thunks.

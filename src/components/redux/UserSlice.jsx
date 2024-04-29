import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const userSlice = createSlice({
  name: "info",
  initialState: {
    theme: "themeDark",
    isLogin: false,
    user: {},
    isLoading: false,
    status: STATUSES.IDLE,
    filter: [],
  },
  reducers: {
    userSet: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    },

    filterSet: (state, action) => {
      state.filter = action.payload;
    },

    logoutSet: (state, action) => {
      state.isLogin = false;
      state.user = {};
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    changeTheme: (state, action) => {
      if (state.theme === "themeDark") {
        state.theme = "themeLight";
      } else {
        state.theme = "themeDark";
      }
    },
  },
});

export const {
  userSet,
  setStatus,
  logoutSet,
  filterSet,
  changeTheme,
  changeIsLoading,
} = userSlice.actions;

export default userSlice.reducer;

import { createSlice, configureStore } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryList: [],
    platformList: [],
    sort: "",
    type: "",
    yearFrom: 1980,
    yearTo: 2023,
  },
  reducers: {
    addCategory(state, action) {
      state.categoryList.push(action.payload);
    },
    removeCategory(state, action) {
      state.categoryList = state.categoryList.filter(
        (name) => name !== action.payload
      );
    },
    changeYear(state, action) {
      state.yearFrom = action.payload.from;
      state.yearTo = action.payload.to;
    },
    addPlatform(state, action) {
      state.platformList.push(action.payload);
    },
    removePlatform(state, action) {
      state.platformList = state.platformList.filter(
        (name) => name !== action.payload
      );
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
  },
});

let initAuthValues = { token: null, expiresIn: null, isLoggedIn: false };

if (typeof window !== "undefined") {
  if (
    localStorage.getItem("token") !== null &&
    localStorage.getItem("expiresIn") !== null
  ) {
    const date = new Date(localStorage.getItem("expiresIn"));
    const now = new Date(Date.now());
    const time = date - now;
    if (time <= 0) {
      initAuthValues = { token: null, expiresIn: null, isLoggedIn: false };
      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
    } else {
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("expiresIn");
        window.location.reload();
      }, time);
      initAuthValues = {
        token: localStorage.getItem("token"),
        expiresIn: localStorage.getItem("expiresIn"),
        isLoggedIn: true,
      };
    }
  }
}

const authSlice = createSlice({
  name: "authentication",
  initialState: initAuthValues,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expiresIn", action.payload.expiresIn);
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.expiresIn = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
    },
  },
});

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const filterActions = filterSlice.actions;
export const authActions = authSlice.actions;
export default store;

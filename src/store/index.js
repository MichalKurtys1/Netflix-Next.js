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

let initAuthValues = { token: null, isLoggedIn: false };

if (typeof window !== "undefined") {
  if (localStorage.getItem("token") !== null) {
    initAuthValues = { token: localStorage.getItem("token"), isLoggedIn: true };
  }
}

const authSlice = createSlice({
  name: "authentication",
  initialState: initAuthValues,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem("token");
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

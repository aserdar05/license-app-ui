import { createSlice } from "@reduxjs/toolkit";

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    const userData = JSON.parse(localStorage.getItem("userData"));

    return {
      token: storedToken,
      userData: userData,
    };
  }
  return null;
};

const tokenData = retrieveStoredToken();

const initialAuthenticationState = {
  isAuthenticated: !!tokenData,
  token: tokenData ? tokenData.token : null,
  userData: tokenData ? tokenData.userData : null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userData = action.payload.userData;

      localStorage.setItem("token", state.token);
      localStorage.setItem("userData", JSON.stringify(state.userData));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.userData = null;

      localStorage.removeItem("token", state.token);
      localStorage.removeItem("userData", state.userData);
    },
  },
});

export default authSlice;

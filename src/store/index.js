
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import alertSlice from "./alert";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        alert: alertSlice.reducer
    }//We can define multiple reducer functions
});

export const authActions = authSlice.actions;
export const alertActions = alertSlice.actions;

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = { isAuthenticated: false, email: '', name: '', surname: '', roleId: null };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthenticationState,
    reducers: {
        login(state, action){
            state.isAuthenticated = true;
            state.email= action.payload.email;
            state.name= action.payload.name;
            state.surname= action.payload.surname;
            state.roleId = action.payload.roleId;
        },
        logout(state){
            state.isAuthenticated = false;
            state.email= '';
            state.name= '';
            state.surname= '';
            state.roleId = null;
        }
    }
});
export default authSlice;
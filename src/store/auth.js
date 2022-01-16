
import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = { isAuthenticated: false, email: '', name: '', surname: '' };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthenticationState,
    reducers: {
        login(state, action){
            state.isAuthenticated = true;
            state.email= action.payload.email;
            state.name= action.payload.name;
            state.surname= action.payload.surname;
        },
        logout(state){
            state.isAuthenticated = false;
            state.email= '';
            state.name= '';
            state.surname= '';
        }
    }
});
export default authSlice;
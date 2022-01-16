
import { createSlice } from "@reduxjs/toolkit";

const initialAlertState = { show: false, type: '', message: '' };

const alertSlice = createSlice({
    name: 'alert',
    initialState: initialAlertState,
    reducers: {
        show(state, action){
            state.show = true;
            state.type= action.payload.type;
            state.message= action.payload.message;
        },
        hide(state){
            state.show = false;
            state.type= '';
            state.message= '';
        }
    }
});
export default alertSlice;
import { createSlice } from '@reduxjs/toolkit';
import userinfoconfig from '../userinfo.config';

const initialState = {
    token:userinfoconfig.token
};

const infoConfigSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        userinfotoken(state, { payload }) {
            payload = payload || state.token;
            state.token = payload;
        },

    }});
   
export const {userinfotoken}= infoConfigSlice.actions;

export default infoConfigSlice.reducer;
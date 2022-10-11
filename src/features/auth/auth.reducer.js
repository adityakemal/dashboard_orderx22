import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./login.api";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: {}
    },
    extraReducers: {
        [postLogin.pending]: (state, action) => {
            state.loading = true
        },
        [postLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [postLogin.rejected]: (state, action) => {
            state.loading = false
        },
    }

})

export default authSlice.reducer
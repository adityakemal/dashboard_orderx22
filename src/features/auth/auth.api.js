import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postLogin = createAsyncThunk('login/post', async (data, { rejectWithValue }) => {
    try {

        const response = await axios.post(`http://139.162.32.22:8004/partner/login`, data)
        // const response = await axios.post(`${process.env.REACT_APP_BASE_URL_API}/partner/login`, data)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})
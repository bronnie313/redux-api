import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    isLoading: true,
    error: null,
}

const getUsers = createAsyncThunk('user/getUsers', async() => {
    try {
        const resp = await axios('https://jsonplaceholder.typicode.com/users')
        return resp;
    } catch (error) {}
})

const usersSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export { getUsers };
export default usersSlice.reducer;
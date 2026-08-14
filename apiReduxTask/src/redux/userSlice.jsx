import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userFetch = createAsyncThunk("user/userFetch", async () => {
    const response = await axios.get("https://dummyjson.com/users")
    return response.data.users
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(userFetch.pending, (state, action) => {
            state.loading = true
        })
            .addCase(userFetch.fulfilled, (state, action) => {
                state.loading = false,
                    state.data = action.payload
            })
            .addCase(userFetch.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }
})

export default userSlice.reducer
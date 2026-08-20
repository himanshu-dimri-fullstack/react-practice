import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const userFetch = createAsyncThunk("user/userDetch", async () => {
    try {
        const res = await axios.get("https://dummyjson.com/users");
        return res
    }
    catch (err) {
        console.log(err)
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: []
    },
    reducers: {
        saveData: (state, action) => {
            console.log("finaldata:", action.payload)
            state.data = [...action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userFetch.pending, (state, action) => {

        })
            .addCase(userFetch.fulfilled, (state, action) => {
                console.log("paylad data", action.payload.data.users)
                state.data.push(...action.payload.data.users)
            })
            .addCase(userFetch.rejected, (state, action) => {

            })
    }
})

export const { saveData } = userSlice.actions

export default userSlice.reducer
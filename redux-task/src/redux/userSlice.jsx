import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: false
    },
    reducers: {
        loginUser: (state) => {
            state.value = !state.value
        }
    }
})

export const { loginUser } = userSlice.actions
export default userSlice.reducer
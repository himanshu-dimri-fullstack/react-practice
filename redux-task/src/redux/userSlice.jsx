import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: false
    },
    reducers: {
        userLogin: (state) => {
            state.value = !state.value
        }
    }
})

export const { userLogin } = userSlice.actions

export default userSlice.reducer
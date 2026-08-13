import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            userInfo: {}
        }
    },
    reducers: {
        loginUser: (state, actions) => {
            console.log("state", state)
            console.log("actions", actions)
            state.user.userInfo = actions.payload
        }
    }
})

export const { loginUser } = userSlice.actions;
export default userSlice.reducer
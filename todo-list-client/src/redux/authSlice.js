import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        accessToken: '',
        authLoading: true,
        authCountdown: false,
        abortCountdown: false
    },
    reducers: {
        setAuth: (state) =>{


        },
        setAccessToken: (state, action) =>{


        }

    }
})

export const {setAuth, setAccessToken} = authSlice.actions;

export default authSlice.reducer;


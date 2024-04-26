import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        id:'',
        firstName: '',
        lastName: '',
        emailAddress: '',
        avatarImage: '',
        lastUpdated: ''
    },
    reducers: {
        setUser: (action) =>{

            return {...action.payload}
        },
        resetUser: () =>{
           return initalState;
        }

    }
})

export const {setUser, resetUser} = usersSlice.actions;

export default usersSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import usersReducer from './usersSlice'
import todosReducer from './todosSlice'


export default configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        todos: todosReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos : []
    },
    reducers: {
        setTodos: (action) =>{

            return state.todos = action.payload
        },
        clearTodos: () =>{
           return initalState;
        }

    }
})

export const {setTodos, clearTodos} = todosSlice.actions;

export default todosSlice.reducer;

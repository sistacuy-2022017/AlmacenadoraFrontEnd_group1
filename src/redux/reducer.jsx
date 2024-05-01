import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addTodo } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer; // Cambia 'reducers' por 'reducer'

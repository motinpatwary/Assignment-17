import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: []
    },
    
    reducers: {
        addToDo: (state, action) => {
            state.value(action.payload)
        },
        removeToDo: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        editToDo: (state, action) => {
            state.value.splice(action.payload['index'], 1 , action.payload['text'])
        }
    }
})


export const { addToDo, removeToDo, editToDo } = todoSlice.actions
export default todoSlice.reducer;
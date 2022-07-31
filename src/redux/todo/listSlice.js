import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    
    name : 'todo',
    initialState : {
        todoList : ['Ufuk', 'Ümmühan']
    },
    reducers : {
        addDuty : (state, action) => {
            const newTask = {
                id : new Date(),
                content: action.payload.newContent
            }
            state.todoList.push(newTask)
        } 
    }
})


export default listSlice.reducer;
export const {addDuty} = listSlice.actions;
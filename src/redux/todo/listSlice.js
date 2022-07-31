import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    
    name : 'todos',
    initialState : {
        items : [
            {
                id : '1',
                title :'Ömer',
                completed : true
            },
            {
                id : '2',
                title :'Uğur',
                completed : false
            },
            {
                id : '3',
                title :'Hasan',
                completed : false
            },
            {
                id : '4',
                title :'Ferit',
                completed : true
            },
        ],
    },
    reducers : {
       addNewTodo : (state, action) => {
        state.items.push(action.payload)
       },
    },
});

export const { addNewTodo} = listSlice.actions;
export default listSlice.reducer;
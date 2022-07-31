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
        activeFilter : 'all',
    },
    reducers : {
       addNewTodo : (state, action) => {
        state.items.push(action.payload)
       },
       toggle : (state, action) => {
            const {id} = action.payload;
            const item = state.items.find(item => item.id === id)

            item.completed = !item.completed
       },
       destroy : (state, action) => {
        const id =action.payload;
        const filtered = state.items.filter((item) => item.id !== id)
        state.items = filtered
       },
       change : (state, action) => {
        state.activeFilter = action.payload
       },
       clearCompleted : (state) => {
        const filtered = state.items.filter(item => item.completed ===false)
        state.items = filtered
       }
    },
});

export const { addNewTodo ,toggle, destroy, change, clearCompleted} = listSlice.actions;
export default listSlice.reducer;
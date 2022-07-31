import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    
    name : 'todos',
    initialState : {
        items : [
            {
                item : '1',
                title :'Ömer',
                completed : true
            },
            {
                item : '2',
                title :'Uğur',
                completed : false
            },
            {
                item : '3',
                title :'Hasan',
                completed : false
            },
            {
                item : '4',
                title :'Ferit',
                completed : true
            },
        ],
    },
    reducers : {
       
    }
})


export default listSlice.reducer;
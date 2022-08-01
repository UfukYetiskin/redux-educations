import { createSlice } from "@reduxjs/toolkit";


export const textAreaSlice = createSlice({
    name : 'texts',
    initialState: {
        items : [
            {
                id: '1231231',
                text : 'Default Note',
                color : 'pink'
            },
        ]
    },
    reducers : {
        addNote : (state, action) => {
            state.items.push(action.payload)
        }
    }
});

export const  {addNote} = textAreaSlice.actions;
export default textAreaSlice.reducer;


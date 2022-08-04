import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllQuotes = createAsyncThunk('quotes/fetchAll', async () =>{
    const res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/86`)
    return res.json();
})

export const quotesSlice = createSlice({
    name : "quotes",
    initialState : {
        items : [],
        status  : "idle",
    },
    reducers : {

    },
    extraReducers : {
        [fetchAllQuotes.fulfilled] : (state,action) => {
            state.items = action.payload;
            state.status = "succeeded"
        },
        [fetchAllQuotes.pending] : (state, action) => {
            state.status = "loading"
        },
        [fetchAllQuotes.rejected] : (state, action) => {
            state.status = "failed"
            state.error = action.error.message;
        }
    }
});
export const quotesSelector = state => state.quotes.items;
export const statusSelector = state => state.quotes.status;
export const errorSelector = (state) => state.quotes.error;

export default quotesSlice.reducer;
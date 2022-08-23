import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCovidThunk = createAsyncThunk("covidTracker/getCovidTracker", async (country) => {
    const res = await fetch(`https://covid19.mathdro.id/api/${country}`)
    return res.json();
})

const covidTrackerSlice = createSlice({
    name : "covidTracker",
    initialState : {
        items : [],
        status : "idle",
    },
    reducers: {

    },
    extraReducers : {
        [fetchCovidThunk.pending] : (state,action) => {
            state.status = "loading"
        },
        [fetchCovidThunk.fulfilled] : (state, action) => {
            state.items = [...state.items, ...action.payload]
            state.status = "success"
        },
        [fetchCovidThunk.rejected] : (state, action) => {
            state.status = "failed"
            state.error = (action.error.message)
        }

    }
    
})
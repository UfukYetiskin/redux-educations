import { createSlice } from "@reduxjs/toolkit";


export const remainderSlice = createSlice({
    name : 'remainder',
    initialState : {
        totalMoney : 100000000000,
        products : [
            {
                hamburger : 2,
                piece : 0,
            },
            {
                home : 300000,
                piece : 0,
            },
            {
                ship  : 1000000,
                piece : 0,
            }
        ]
    },
    reducers : {
        decrementPieceofHamburder : (state) => {
            state.products[0].piece -= 1
            state.totalMoney += 2
        },
        decrementPieceofHome : (state) => {
            state.products[1].piece -= 1
            state.totalMoney += 300000
        },
        decrementPieceofShip : (state) => {
            state.products[2].piece -= 1
            state.totalMoney += 1000000
        },
        incrementPieceofHamburder : (state) => {
            state.products[0].piece += 1
            state.totalMoney -= 2
        },
        incrementPieceofHome : (state) => {
            state.products[1].piece += 1
            state.totalMoney -= 300000
        },
        incrementPieceofShip : (state) => {
            state.products[2].piece += 1
            state.totalMoney -= 1000000
        },
        
    }
});
export const {decrementPieceofHamburder, decrementPieceofHome, decrementPieceofShip, incrementPieceofHamburder, incrementPieceofHome, incrementPieceofShip } = remainderSlice.actions;
export default remainderSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
/* 
Slice componentlerin oluşturulmasını sağlar. 
createSlice içerisinde ; name, initialState ve reducers tanımlamalarını yapmamız gerekmektedir.

name : Reducer adı.
initialState : başlangıç State i.
reducers : çalıştırılacak function lar.
*/


export const counterSlice = createSlice({
    //name özelliği ile state'i isimlendiririz.
    name  :'counter',
    //initialState ile state'e default bir değer veririz
    initialState : {
        value  : 0
    },
    //reducers ya da actions ile de state'i güncellemek için kullanılır yani setState gibi
    reducers : {
        //state parametresi initalState içerisinde tanımlı özellikleri getirir
        increase: (state) => {
            state.value += 1;
        },
        decrease: (state) => {
            state.value -= 1;
        },
        //action ile input içerisindeki değeri alırız
        incrementByAmount : (state, action) => {
            state.value += action.payload
        }
    },
});
export const  {increase, decrease, incrementByAmount} = counterSlice.actions;

//createReducer(), Export olarak reducer tanımlaması ve dışa aktarımı sağlanıyor.
export default counterSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'


const markdownSlice = createSlice({
    name : "markdownPreviewer",
    initialState : {
        element : "",
        text : "",
    },
    reducers: {
        toMarkdown : (state,action) =>{
            const value = action.payload;
            if(value[0] === "*"  && value[1]  === "*" && value[value.length-1] === "*" && value[value.length-2] === "*"){
                state.element = "strong"
                state.text = `<${state.element}>  ${value} </${state.element}>`;

            }else if(value[0] === "#" && value[1] !== "#"){ 
                state.element = "h1"
                state.text = `<${state.element}>  ${value} </${state.element}>`;

            }else if(value[0] === "#" && value[1] === "#" && value[2] !== "#" ){
                state.element = "h2"
                state.text = `<${state.element}>  ${value} </${state.element}>`;

            }else if(value[0] === "#" && value[1] === "#" && value[2] === "#" && value[3] !== "#"){
                state.element = "h3"
                state.text = `<${state.element}>  ${value} </${state.element}>`;

            }else if(value[0] === "#" && value[1] === "#" && value[2] === "#" && value[3] === "#" && value[4] !== "#"){
                state.element = "h4"
                state.text = `<${state.element}>  ${value} </${state.element}>`;

            }else if(value[0] === "#" && value[1] === "#" && value[2] === "#" && value[3] === "#" && value[4] === "#" && value[5] !== "#"){
                state.element = "h5"
                state.text = `<${state.element}>  ${value} </${state.element}>`;
            }else if(value[0] === "#" && value[1] === "#"  && value[2] === "#" && value[3] === "#" && value[4] === "#" && value[5] === "#" && value[6] !== "#"){
                state.element = "h6"
                state.text = `<${state.element}>${value}</${state.element}>`;
            }else{
                state.text = value;
            }


            // switch(value){
            //     case value[0] && value[1] && value[value.length-1] && value[value.length-2] === "*" : 
            //         state.element = "strong";
            //         break;
            //     case value[0] === "#":
            //         state.element = "h1";
            //         break;
            //     case value[0] && value[1] === "#" :
            //         state.element = "h2";
            //         break;
            //     case value[0] && value[1] && value[2] === "#" :
            //         state.element = "h3";
            //         break;
            //     case value[0] && value[1] && value[2] && value[3] === "#":
            //         state.element = "h4";
            //         break;
            //     case value[0] && value[1] && value[2] && value[3] && value[4] === "#":
            //         state.element = "h5";
            //         break;
            //     case value[0] && value[1] && value[2] && value[3] && value[4] && value[5] === "#" :
            //         state.element = "h6";
            //         break;
            //     case value[0] && value[value.length-1] === "*":
            //         state.element ="i"
            //         break;     
            //     default:
            //         state.text = value;
            //         break;
            // }
        }
    }
});

export const {toMarkdown} = markdownSlice.actions;
export default markdownSlice.reducer;
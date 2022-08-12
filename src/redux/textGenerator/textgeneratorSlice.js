import { createSlice } from "@reduxjs/toolkit";

export const textgeneratorSlice = createSlice({
    name : 'textGenerator',
    initialState : {
        texts : [
            "Rump pancetta corned beef beef ribs porchetta.  Hamburger turducken cow boudin shankle kevin venison ribeye biltong ham hock jerky cupim ground round spare ribs.  Filet mignon frankfurter hamburger salami chicken turkey pastrami porchetta t-bone.  Ground round shoulder meatball pork picanha leberkas pork loin drumstick doner andouille tail shankle short loin.  Sirloin chislic shankle, kevin shoulder jerky ham hock venison ball tip.  Corned beef brisket spare ribs boudin, ham hock jerky bresaola landjaeger chislic.",
            "Tenderloin landjaeger chicken, sausage jowl tail turkey picanha pork belly.  Shankle salami frankfurter brisket jowl, filet mignon bacon shoulder andouille cow.  Fatback pork kevin ribeye turkey brisket sausage flank burgdoggen.  Doner spare ribs tenderloin burgdoggen prosciutto, ham bacon swine ribeye chuck biltong.  Filet mignon capicola fatback, short ribs kevin pastrami strip steak meatball porchetta bresaola buffalo turducken turkey.",
            "Rump pancetta corned beef beef ribs porchetta.  Hamburger turducken cow boudin shankle kevin venison ribeye biltong ham hock jerky cupim ground round spare ribs.  Filet mignon frankfurter hamburger salami chicken turkey pastrami porchetta t-bone.  Ground round shoulder meatball pork picanha leberkas pork loin drumstick doner andouille tail shankle short loin.  Sirloin chislic shankle, kevin shoulder jerky ham hock venison ball tip.  Corned beef brisket spare ribs boudin, ham hock jerky bresaola landjaeger chislic.",
            "Tenderloin landjaeger chicken, sausage jowl tail turkey picanha pork belly.  Shankle salami frankfurter brisket jowl, filet mignon bacon shoulder andouille cow.  Fatback pork kevin ribeye turkey brisket sausage flank burgdoggen.  Doner spare ribs tenderloin burgdoggen prosciutto, ham bacon swine ribeye chuck biltong.  Filet mignon capicola fatback, short ribs kevin pastrami strip steak meatball porchetta bresaola buffalo turducken turkey.",
            "Rump pancetta corned beef beef ribs porchetta.  Hamburger turducken cow boudin shankle kevin venison ribeye biltong ham hock jerky cupim ground round spare ribs.  Filet mignon frankfurter hamburger salami chicken turkey pastrami porchetta t-bone.  Ground round shoulder meatball pork picanha leberkas pork loin drumstick doner andouille tail shankle short loin.  Sirloin chislic shankle, kevin shoulder jerky ham hock venison ball tip.  Corned beef brisket spare ribs boudin, ham hock jerky bresaola landjaeger chislic.",
            "Tenderloin landjaeger chicken, sausage jowl tail turkey picanha pork belly.  Shankle salami frankfurter brisket jowl, filet mignon bacon shoulder andouille cow.  Fatback pork kevin ribeye turkey brisket sausage flank burgdoggen.  Doner spare ribs tenderloin burgdoggen prosciutto, ham bacon swine ribeye chuck biltong.  Filet mignon capicola fatback, short ribs kevin pastrami strip steak meatball porchetta bresaola buffalo turducken turkey.",
            "Rump pancetta corned beef beef ribs porchetta.  Hamburger turducken cow boudin shankle kevin venison ribeye biltong ham hock jerky cupim ground round spare ribs.  Filet mignon frankfurter hamburger salami chicken turkey pastrami porchetta t-bone.  Ground round shoulder meatball pork picanha leberkas pork loin drumstick doner andouille tail shankle short loin.  Sirloin chislic shankle, kevin shoulder jerky ham hock venison ball tip.  Corned beef brisket spare ribs boudin, ham hock jerky bresaola landjaeger chislic.",
            "Tenderloin landjaeger chicken, sausage jowl tail turkey picanha pork belly.  Shankle salami frankfurter brisket jowl, filet mignon bacon shoulder andouille cow.  Fatback pork kevin ribeye turkey brisket sausage flank burgdoggen.  Doner spare ribs tenderloin burgdoggen prosciutto, ham bacon swine ribeye chuck biltong.  Filet mignon capicola fatback, short ribs kevin pastrami strip steak meatball porchetta bresaola buffalo turducken turkey.",
            "Rump pancetta corned beef beef ribs porchetta.  Hamburger turducken cow boudin shankle kevin venison ribeye biltong ham hock jerky cupim ground round spare ribs.  Filet mignon frankfurter hamburger salami chicken turkey pastrami porchetta t-bone.  Ground round shoulder meatball pork picanha leberkas pork loin drumstick doner andouille tail shankle short loin.  Sirloin chislic shankle, kevin shoulder jerky ham hock venison ball tip.  Corned beef brisket spare ribs boudin, ham hock jerky bresaola landjaeger chislic.",
            "Tenderloin landjaeger chicken, sausage jowl tail turkey picanha pork belly.  Shankle salami frankfurter brisket jowl, filet mignon bacon shoulder andouille cow.  Fatback pork kevin ribeye turkey brisket sausage flank burgdoggen.  Doner spare ribs tenderloin burgdoggen prosciutto, ham bacon swine ribeye chuck biltong.  Filet mignon capicola fatback, short ribs kevin pastrami strip steak meatball porchetta bresaola buffalo turducken turkey.",
        ],
        text : "",
    },
    reducers : {
        getText : (state, action) => {
            const inputValue = action.payload;
            for(let i = 0; i <= inputValue; i++){
                state.text += `${state.texts[i]} /n`
            }
        }
    }
});

export const {getText} = textgeneratorSlice.actions;
export default textgeneratorSlice.reducer;
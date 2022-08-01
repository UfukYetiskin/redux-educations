import React from 'react'
import {useState} from 'react'

//useSelector, Reducer içerisinde tanımlanan state bilgisine erişmek ve değişikliklerden haberdar olmak için kullanılır.
//useDispatch, createSlice içerisinde tanımlanan actionsların çalıştırılması için kullanılır
import {useSelector, useDispatch} from 'react-redux' 

//Slice dosyası içerisinde set edilmiş state'i yani fonksiyonu aldık.
import {increase, decrease, incrementByAmount} from '../redux/counter/counterSlice'


function Counter() {
    //counterSlace içerisinde tanımlamış olduğumuz state'i bu şekilde çekiyoruz.
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0)
    
    return (
    <div>
        <h1>This component about counter</h1>
        <h1>{countValue}</h1>
        <button style={{backgroundColor : 'skyblue', padding :'1%'}} onClick={()=>dispatch(increase())}>Increase</button>
        <button style={{backgroundColor : 'skyblue', padding :'1%', marginLeft : '10px'}} onClick={()=> dispatch(decrease())}>Decrease</button>
        <br/>
        <br/>
        <input 
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={()=> dispatch(incrementByAmount(parseInt(amount)))}>Increment by Amount</button>
    </div>
  )
}

export default Counter
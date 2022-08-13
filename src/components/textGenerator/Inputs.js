import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getText} from '../../redux/textGenerator/textgeneratorSlice'


function Inputs() {
    const [number, setNumber] = useState(1)

    const dispatch = useDispatch();


    useEffect(() => {

    }, [dispatch])
  return (
    <div style={{margin :'2%'}}>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button style={{border : '1px solid white', padding :'5px', margin : '1%'}} onClick={() => dispatch(getText(parseInt(number)))}>List</button>
    </div>
  )
}

export default Inputs

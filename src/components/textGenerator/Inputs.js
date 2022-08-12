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
    <div>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(getText(parseInt(number)))}>List</button>
    </div>
  )
}

export default Inputs

import React from 'react'
import {useSelector} from 'react-redux'

function List() {
    const text = useSelector(state => state.textGenerator.text);
  return (
    <div>
        {text}
    </div>
  )
}

export default List

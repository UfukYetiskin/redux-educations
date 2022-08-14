import React from 'react'
import {useState} from 'react'

function Texts() {
    const [text, setText] = useState("")
  return (
    <div>
      <form>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write here your text"
            style={{padding :'5px'}}
        />
        <button type='submit' style={{backgroundColor : 'skyblue', padding :'5px', margin :'1%'}}>to Markdown</button>
      </form>
    </div>
  )
}

export default Texts

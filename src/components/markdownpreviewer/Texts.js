import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toMarkdown} from '../../redux/markdownpreviewer/markdownSlice'


function Texts() {
    const [text, setText] = useState("")

    const dispatch = useDispatch();

    const parag = useSelector(state => state.markdownPreviewer.text)
    const element = useSelector(state => state.markdownPreviewer.element)
    useEffect(() =>{

    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toMarkdown(text))
        
    }
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
        <button onClick={handleClick}  style={{backgroundColor : 'skyblue', padding :'5px', margin :'1%'}}>to Markdown</button>
      </form>
      {parag && `<${element}> ${parag} </${element}>`}
    </div>
  )
}

export default Texts

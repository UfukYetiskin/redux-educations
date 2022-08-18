import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toMarkdown} from '../../redux/markdownpreviewer/markdownSlice'


function Texts() {
    const [metin, setText] = useState("")

    const dispatch = useDispatch();

    const parag = useSelector(state => state.markdownPreviewer.text)
    const element = useSelector(state => state.markdownPreviewer.element)
    
    useEffect(() =>{

    }, [dispatch, parag])
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toMarkdown(metin))
        console.log(metin[0])
        console.log(parag)
    }
    return (
    <div>
      <form>
        <input
            type="text"
            value={metin}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write here your text"
            style={{padding :'5px'}}
        />
        <button onClick={handleClick}  style={{backgroundColor : 'skyblue', padding :'5px', margin :'1%'}}>to Markdown</button>
      </form>
      <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'center'}}>
        <div style={{margin : '1%' ,textAlign :'center'}}>
            <h2>Input Value </h2>
            {metin}
            
        </div>
        <div style={{margin : '1%' ,textAlign :'center'}}>
            <h2>to Markdown</h2>
            {parag}
        </div>
      </div>
      
    </div>
  )
}

export default Texts

import Inputs from './Inputs'
import List from './List'

const TextGenerator = () => {
    return(
        <div style={{backgroundColor : "black", color  :'white', padding :'2%'}}>
            <h1>React sample text generator app</h1>
            <hr></hr>
            <Inputs />
            <List />
        </div>
    )
}
export default TextGenerator;
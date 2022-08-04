import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
import Home from './pages/home/Home'
import Detail from './pages/chardetail/Detail'
import Quotes from "./pages/quotes/Quotes"

const MainAppComponent = () => {
    return(
        <div>
            <Router>
                <ul style={{display : 'flex', flexDirection : 'row', margin : 'auto auto'}}>
                    <li style={{listStyleType : 'none', margin : 'auto auto', textDecoration : 'none'}}>
                        <NavLink style={{textDecoration : 'none', fontSize : '24px', color :'black', fontWeight : 'bold'}} to="/">Characters</NavLink>
                    </li>
                    <li style={{listStyleType : 'none', margin : 'auto auto', textDecoration : 'none'}}>
                        <NavLink style={{textDecoration : 'none', fontSize : '24px', color :'black', fontWeight : 'bold'}} to="/quotes">Quotes</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/quotes" element={<Quotes/>}/>
                    <Route path="/characters/:char_id" element={<Detail/>} />
                </Routes>
            </Router>

        </div>
    )
}





export default MainAppComponent;
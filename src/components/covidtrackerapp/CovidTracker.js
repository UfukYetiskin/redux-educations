import {fetchCovidThunk} from "../../redux/covidapp/covidSlice"
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading"
import Error from "./Error"
import {useState, useEffect} from 'react'
import Header from "./Header";


const CovidTracker = () => {
    const covidData = useSelector(state => state.covidTracker.items);
    const status = useSelector(state => state.covidTracker.status);
    const error = useSelector(state => state.characters.error)
    const dispatch = useDispatch();
    const [country, setCountry] = useState("turkey");
    const [place, setPlace] = useState("");
    const [date, setDate] = useState(new Date())

  

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchCovidThunk())
        }

        if(country != place ){
            setDate(new Date())
            dispatch(fetchCovidThunk(country))
            setPlace(country)
        }
        

        
    }, [dispatch, country])
    const handleClick = (e) => {
        e.preventDefault();
        if(country === "")
            dispatch(fetchCovidThunk("turkey"))
        else{
            dispatch(fetchCovidThunk(country))
        }
        console.log(country)
        console.log(covidData)
        setPlace(country);
    }
    console.log(covidData)
    const formStyle = {
        textAlign : 'center',
        marginTop : '2%'
    }
    const inputStyle = {
        padding : '1%',
        fontSize :'24px',
        borderRadius : "10px"
    }
    const buttonStyle = {
        padding : '1% 1% 0 1%',
        border : "1px solid red",
        color : "white",
        backgroundColor :'red',
        marginLeft  :'1%',
        fontSize : '24px',
        borderRadius : '10px',
        
    }
    const ulStyle = {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
    const confirmStyle = {
        listStyleType :'none',
        backgroundColor  :'lightblue',
        padding :'1%',
        marginBottom  :'2%',
        borderRadius :'10px',
        borderColor :'cornflowerblue'
    }
    const recorStyle = {
        listStyleType :'none',
        backgroundColor  :'yellow',
        padding :'1%',
        marginBottom  :'2%',
        borderRadius :'10px',
        borderColor :'yellow'
    }
    const deadStyle = {
        listStyleType :'none',
        backgroundColor  :'red',
        padding :'1%',
        marginBottom  :'2%',
        borderRadius :'10px',
        borderColor :'red'
    }
    return (
        <div>
            <Header/>
            {status === "loading" && <Loading/>}
            {status === "failed" && <Error message={error}  />}
           <form style={formStyle}>
            <input 
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                style={inputStyle}
                />
                <button style={buttonStyle} onClick={handleClick}>Search</button>
                <div>
                    {covidData && <div>
                        <ul style={ulStyle}>
                            <li style={confirmStyle}>
                                <h3>Infected</h3>
                                <strong>{covidData?.confirmed?.value}</strong>
                                <br></br>
                                <strong>Last Updated at</strong> : {date.toLocaleDateString()}
                                <br></br>
                                <h4>Number of active cases of COVID-19</h4>
                                <strong>{place}</strong>
                            </li>
                            <li style={recorStyle}>
                                <h3>Recovered</h3>
                                <strong>{covidData?.recovered?.value}</strong>
                                <br></br>
                                <strong>Last Updated at</strong> : {date.toLocaleDateString()}
                                <br></br>
                                <h4>Number of recoviers from COVID-19</h4>
                                <strong>{place}</strong>
                            </li>
                            <li style={deadStyle}>
                                <h3>Infected</h3>
                                <strong>{covidData?.deaths?.value}</strong>
                                <br></br>
                                <strong>Last Updated at</strong> : {date.toLocaleDateString()}
                                <br></br>
                                <h4>Number of deaths caused by COVID-19</h4>
                                <strong>{place}</strong>
                            </li>
                            
                        </ul>
                        
                        
                        
                    </div> }
                </div>

           </form>
        </div>
    )
}   
export default CovidTracker;
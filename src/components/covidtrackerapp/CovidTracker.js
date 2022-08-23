import {fetchCovidThunk} from "../../redux/covidapp/covidSlice"
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading"
import Error from "./Error"
import {useState, useEffect} from 'react'


const CovidTracker = () => {
    const covidData = useSelector(state => state.covidTracker.items);
    const status = useSelector(state => state.covidTracker.status);
    const error = useSelector(state => state.characters.error)
    const dispatch = useDispatch();
    const [country, setCountry] = useState("");

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchCovidThunk())
        }
    }, [dispatch, status, country])
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(fetchCovidThunk(country))
        console.log(country)
        console.log(covidData)
    }
    console.log(covidData)
    return (
        <div>
            {status === "loading" && <Loading/>}
            {status === "failed" && <Error message={error}  />}
           <form>
            <input 
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="country"
                />
                <button onClick={handleClick}>Weather</button>
                <div>
                    {covidData && <div>

                        {covidData.confirmed.value}
                        {covidData.deaths.value}
                        
                    </div> }
                </div>

           </form>
        </div>
    )
}   
export default CovidTracker;
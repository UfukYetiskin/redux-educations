import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {fetchAllQuotes, quotesSelector, statusSelector, errorSelector} from '../../../../redux/breakingbadchars/quotesSlice'
import Error from '../home/Error'
import Loading from '../home/Loading'
import Item from './Item'

function Quotes() {
    const data = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchAllQuotes())
        }
        

    }, [dispatch])
    
    if(error){
        <Error  message={error}/>
    }
    return (
        <div>
            <h1>Quotes</h1>
            {status === "loading" && <Loading/>}
            {status === "succeeded" && data.map((item) => (
                <div>
                    <Item key={item.quote_id} items={item}/>
                </div>
            ))}
            {status === "succeeded" && <div style={{padding :'2%', textAlign : 'center', fontSize :'24px'}}>{data.length} quotes.</div>}
        </div>
    )
}

export default Quotes;

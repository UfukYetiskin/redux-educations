import React from "react";
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {fetchCharacters} from '../../../../redux/breakingbadchars/characterSlice'
import Loading from './Loading'
import Error from './Error'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import { NavLink } from 'react-router-dom';
function Home() {
    const characters = useSelector(state => state.characters.items);
    const dispatch = useDispatch();
    const status = useSelector(state => state.characters.status)
    const error = useSelector(state => state.characters.error)
    const nextPage = useSelector(state => state.characters.page)
    const hasNextPage = useSelector(state => state.characters.hasNextPage)

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchCharacters())
        }
    }, [dispatch, status])
    
    //slice içerisinde tanımlandığı gibi eğer isLoading ya da status false ya da liste yüklenmemişse loading yazısı bize gözkür

    // if(status){
    //     return <Loading />
    // }
    if(status === "failed"){
        return <Error message={error} />
    }
  return (
    <div>
      <ul style={{display : 'flex', flexDirection : 'row',flexWrap : 'wrap'}}>
      {
        characters && characters.map((item) => (
            <li style={{listStyleType : 'none',border :'1px solid grey',width : '25%', margin : '10px 1%', padding :'2%', backgroundColor  :'smokewhite'}} key={item.char_id}  >
                <NavLink to={`/characters/${item.char_id}`} style={{textDecoration :'none'}}>
                    <img style={{width : '100%', }} src={item.img} alt={item.name}/>
                    <p style={{textAlign : 'center',fontSize : '18px',  fontWeight :'bold', textShadow  :'1px 1px grey'}}>{item.name}</p>
                </NavLink>
            </li>
        ))
      }
      </ul>
      {status === "loading" && <Loading/>}

      <div style={{textAlign : 'center'}}>
        {hasNextPage && status !== "loading" &&(
            <button onClick={() => dispatch(fetchCharacters(nextPage))} style={{margin : '1% auto', fontSize : '32px',backgroundColor :'skyblue', padding :'1%', borderRadius : '10px'}}>Load More</button>
        )}
        {
            !hasNextPage  && <div>There is nothing to be show</div>
        }
      </div>
    </div>
  );
}

export default Home;

import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'


function Detail() {
    const {char_id} = useParams();
    const [char, setChar] = useState([]);

    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/characters/${char_id}`)
            .then(res => res.json())
            .then(data => setChar(data[0]))
            .catch(err => console.log(err))
    },[])
  console.log(char)
  return (
    <div>
        { char && 
            <div style={{display : 'flex'}}>
                
                <div >
                    <img style={{width : '100%'}}  src={char.img} alt={char.name}/>
                </div>
                <div style={{width : '50%', textAlign : 'center', margin : '10% auto'}}>
                    <p style={{fontSize :'42px'}}>{char.name}</p>
                    <p style={{fontSize :'40px'}}>Nick Name : {char.nickname}</p>
                    <p style={{fontSize :'24px', margin : '1% auto'}}>Status : {char.status}</p>
                    <p style={{fontSize :'24px', margin : '1% auto'}}>Birthday : {char.birthday}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default Detail
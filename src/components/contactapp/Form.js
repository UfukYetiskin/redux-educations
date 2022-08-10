import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addContact, addContacts, clearContact} from '../../redux/contactapp/contactSlice'
import {nanoid} from '@reduxjs/toolkit'



function Form() {
    const [name, setName] = useState("")
    const [phoneNum, setPhoneNum] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !phoneNum){
            return false;
        }
        console.log("yazdir")
        dispatch(addContact({id: nanoid() , name, phone_number : phoneNum}))
        setName("")
        setPhoneNum("");
    }
    const handleClear = (e) => {
        e.preventDefault();
        if(window.confirm("Are u sure about clear contacts")){
            dispatch(clearContact())
        }
    }
  return (
    <div>
      <form>
        <input 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{margin : '1%', padding :' 2%', width :'90%'}}
        />
        <input 
            placeholder="Phone Number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            style={{margin : '1%', padding :' 2%', width :'90%'}}
        />
        <button onClick={handleSubmit} type='submit' style={{border :'1px solid #FFC000', padding :' 2%', backgroundColor : '#FFC000', marginLeft :' 35%', borderRadius :'10px'}}>Add</button>
        <button onClick={handleClear} style={{border :'1px solid #FFC000', padding :' 2%', backgroundColor : '#FFC000', margin :'1%', borderRadius :'10px'}}>Delete All</button>
      </form>
    </div>
  )
}

export default Form

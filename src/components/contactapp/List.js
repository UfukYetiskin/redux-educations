import React from 'react'
import {useSelector} from 'react-redux'
import {contactSelectors} from '../../redux/contactapp/contactSlice'
import Item from './Item'
function List() {
  
  //selectAll ile bize verileir dizi halinde verir.
  const contacts = useSelector(contactSelectors.selectAll)
  //selectTotal ise bize dizinin boyutunu verir
  const total = useSelector(contactSelectors.selectTotal);
  return (
    <div>
        <h1 style={{textAlign :'center'}}>Contact App ({total})</h1>
      {contacts && contacts.map((item) => (
        <Item key={item.id} item={item}/>
      ))}
      
    </div>
  )
}

export default List

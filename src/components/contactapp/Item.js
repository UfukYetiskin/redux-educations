import React from 'react'

function Item({item}) {
  return (
    <div style={{  borderRadius :'10px',backgroundColor : '#FFC000', padding :'3%', marginTop :'2%', justifyContent:'space-between',}}>
      <span style={{display :'inline-block'}}>{item.name}</span> 
      <span style={{display :'inline-block', margin :'0 20%'}}>{item.phone_number}</span>
    </div>
  )
}

export default Item

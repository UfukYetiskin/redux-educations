import React from "react";
import {useDispatch} from "react-redux";
import {deleteContact} from '../../redux/contactapp/contactSlice'


function Item({ item }) {

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        if(window.confirm("are u sure?")){
            dispatch(deleteContact(id))
        }
    }
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "#FFC000",
        padding: "3%",
        marginTop: "2%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <span style={{ display: "inline-block" }}>{item.name}</span>
      </div>
      <div>
        <span style={{ display: "inline-block",  }}>
          {item.phone_number}
        </span>
      </div>
      <div>
        <span
          style={{
            width: "18px",
            heigh: "22px",
            color: "red",
            textAlign: "center",
          }}
          onClick={() => handleDelete(item.id)}
        >
          X
        </span>
      </div>
    </div>
  );
}

export default Item;

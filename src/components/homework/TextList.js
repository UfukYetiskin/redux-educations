import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { addNote } from "../../redux/homework/textAreaSlice";

let filtered = [];
function TextList() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [filterValue, setFilter] = useState("");

  let notes = useSelector((state) => state.texts.items);
  const [data, setData] = useState(notes);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ id: nanoid(), text, color }));
    setText("");
  };

  useEffect(() => {
    
  } ,[data])

  const handleChange = (e) => {
    setText(e.target.value);
  };




  const handleFilter = () => {

    if (filterValue !== "") {
      console.log(filtered);
      filtered = notes
        .filter((item) => item.text === filterValue)
        .map((item) => item);
        setData(filtered)
      console.log("input boş degil");
      console.log(filtered);
    }
    setFilter('')
  };
  const handleListData = () => {
    setData(notes)
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <input
          placeholder="Search"
          type="text"
          value={filterValue}
          onChange={(e) => setFilter(e.target.value)}
          style={{padding : '2%', fontSize: "24px", borderRadius : '10px'}}
        />
        <button onClick={handleFilter} style={{padding : '2%', backgroundColor : 'skyblue', margin : '1%', borderRadius : '10px'}}>Search</button>
        <button onClick={handleListData} style={{padding : '2%', backgroundColor : 'skyblue', margin : '1%', borderRadius : '10px'}}>List All Notes</button>
      </div>
      <h1>Notes App</h1>
      <form
        style={{ textAlign: "center", backgroundColor: "white", margin: "0" }}
      >
        <textarea
          placeholder="Write here your notes"
          value={text}
          cols="30"
          rows="4"
          onChange={handleChange}
          style={{
            fontSize: "24px",
            border: "1px solid white",
            padding: "4%",
            backgroundColor: `${color}`,
          }}
        ></textarea>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          margin: "0",
        }}
      >
        <div style={{ marginRight: "50px", width: "100%" }}>
          <button
            onClick={() => setColor("pink")}
            style={{
              backgroundColor: "pink",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginLeft: "1%",
            }}
          >
            {" "}
          </button>
          <button
            onClick={() => setColor("purple")}
            style={{
              backgroundColor: "purple",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginLeft: "1%",
            }}
          >
            {" "}
          </button>
          <button
            onClick={() => setColor("yellow")}
            style={{
              backgroundColor: "yellow",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginLeft: "1%",
            }}
          >
            {" "}
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{
              backgroundColor: "blue",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginLeft: "1%",
            }}
          >
            {" "}
          </button>
          <button
            onClick={() => setColor("green")}
            style={{
              backgroundColor: "green",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginLeft: "1%",
            }}
          >
            {" "}
          </button>
        </div>
        <button
          style={{
            backgroundColor: "green",
            width: "50px",
            height: "30px",
            borderRadius: "20px",
            color: "white",
            padding: "1%",
          }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>

      <div>
        <ul>
          {data &&
            data.map((note) => (
              <li
                style={{
                  backgroundColor: `${note.color}`,
                  listStyleType: "none",
                  fontSize: "24px",
                  padding: "2%",
                  color: "white",
                  margin: "2%",
                }}
                key={note.id}
              >
                {note.text}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TextList;

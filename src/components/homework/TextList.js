import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

function TextList() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  return (
    <div style={{ backgroundColor: "white" }}>
      <h1>Notes App</h1>
      <form
        style={{ textAlign: "center", backgroundColor: "white", margin: "0" }}
      >
        <textarea
          placeholder="Write here your notes"
          value={text}
          cols="50"
          rows="4"
          onChange={(e) => setText(e.target.value)}
          style={{ fontSize: "24px", border: "1px solid white", padding: "4%" }}
        ></textarea>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "689px",
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
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TextList;

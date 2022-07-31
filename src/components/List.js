import React from "react";
import "./ListStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewTodo, toggle } from "../redux/todo/listSlice";
import { nanoid } from "@reduxjs/toolkit";
import {useState} from 'react'

const Header = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <Form />
    </header>
  );
};

const Form = () => {
    const [title, setTitle] = useState('')
    // const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo({id : nanoid(), title , completed  : false}))
        setTitle('')
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What need to be done?"
        autoFocus
        className="new-todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

const Content = () => {
  const dispatch   = useDispatch()
  

  const items = useSelector((state) => state.todos.items);
  

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {/* <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button className="destroy"></button>
            </div>
          </li> */}
          {items.map((item) => (
            <li key={item.id} className={item.completed ? 'completed' : '' }>
              <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    onChange={() => dispatch(toggle({id : item.id}))} 
                    checked ={item.completed}
                />
                <label>{item.title}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

function List() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
    </>
  );
}

export default List;

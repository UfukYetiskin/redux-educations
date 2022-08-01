import React from "react";
import "./ListStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewTodo, toggle, destroy, change, clearCompleted, selectTodos } from "../redux/todo/listSlice";
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
    const dispatch = useDispatch()

    const handleSubmit = /*async*/ (e) => {
        e.preventDefault();
        //await dispatch(addTodoAsync({id : nanoid(), title , completed  : false}))
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
let filtered = [];
const Content = () => {
  const dispatch   = useDispatch()
  
  //const items = useSelector(selecTodos)
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector(state => state.todos.activeFilter)
  const itemsLeft = items.filter(item => !item.completed).length

  //burada getTodoAsync ile verileri çekiyoruz
  /* 
    useEffect(() => {
        dispatch(getTodoAsync)
    }, [dispatch])
  */


    //Burada ise verilerin çekilmesini beklerken ekranda isLoading yazısının görülmesini sağlarız
    /* 
    const isLoading = useSelector(state => state.todos.isLoading)
    veri yüklenme sırasında yani pedding sırasında isLoading true olacaktır ve isLoading ekranı dönecektir
    if(isLoading){
        return(
            <div>
                Loading....
            </div>
        )
    }
    */
   /*
   Eğer rejected olursa veri yüklenemezse ekranda error yazısı dönecektir
   const error = useSelector(state => state.todos.error)

    if(error){
        return(
            <div>
                Error
            </div>
        )
    }
   */
    /* 
       const thandleToggle = async (id, completed) => {
            await dispatch(toggleTodoAsync({id, data : {completed}}))
       }
    */
    const handleDestroy = (id) => {
        if(window.confirm('Are u sure?')){
            dispatch(destroy(id))
        }
    }
  filtered = items
  if(activeFilter !== "all"){
    filtered = items.filter((todo) => 
    activeFilter === "active" 
        ? todo.completed === false 
        : todo.completed === true)
  }
  return (
    <>
      <section className="main">

        <ul className="todo-list">
          {/* <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button className="destroy"></button>
            </div>
          </li> */}
          {filtered.map((item) => (
            <li key={item.id} className={item.completed ? 'completed' : '' }>
              <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    onChange={() => dispatch(toggle({id : item.id}))} 
                    checked ={item.completed}
                />
                <label htmlFor="item">{item.title}</label>
                <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft}</strong> item{itemsLeft === 0 || itemsLeft ===1  ? '' : 's'} left
            </span>
            <ul className="filters">
                <li>
                    <a href="#/"  
                    className={activeFilter === "all" ? "selected" : ''}  
                    onClick={() => dispatch(change('all'))}>
                        All
                    </a>
                </li>
                <li>
                    <a href="#/" 
                    className={activeFilter === "active" ? "selected" : ''}
                    onClick={() => dispatch(change('active'))}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a href="#/" 
                    className={activeFilter === "completed" ? "selected" : '' }
                    onClick={() => dispatch(change('completed'))}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
      </footer>
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

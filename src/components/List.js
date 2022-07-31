import React from "react";
import "./ListStyle.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <Form />
    </header>
  );
};

const Form = () => {
  return (
    <form>
      <input
        placeholder="What need to be done?"
        autoFocus
        className="new-todo"
      />
    </form>
  );
};

const Content = () => {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
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
                <input className="toggle" type="checkbox" />
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

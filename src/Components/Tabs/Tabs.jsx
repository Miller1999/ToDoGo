import { Fragment, useState } from "react";
import Search from "../Search/Search";
import ToDos from "../ToDos/ToDos";
import ToDo from "../ToDo/ToDo";
import "./Tabs.css";
import Button from "../Button/Button";
import useLocalStorage from "../../Hooks/useLocalStorage";

export default function Tabs() {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { item, saveItem } = useLocalStorage("V1", []);

  function completeTodo(text) {
    const userTodos = [...item];
    const index = userTodos.findIndex((todo) => todo.text === text);
    userTodos[index].completed = !userTodos[index].completed;
    saveItem(userTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };

  const deleteAll = () => {
    const newTodos = [...item];
    const finishedTodos = newTodos.filter((todo) => todo.completed === true);
    const uncompleteTodo = newTodos.filter((todo) => todo.completed === false);
    finishedTodos.splice(0, finishedTodos.length);
    saveItem(uncompleteTodo);
  };

  function mostrarAll() {
    setAll(!all);
    setActive(false);
    setCompleted(false);
  }
  function mostrarActive() {
    setActive(!active);
    setAll(false);
    setCompleted(false);
  }
  function mostrarCompleted() {
    setCompleted(!completed);
    setActive(false);
    setAll(false);
  }
  const activeTodos = item.filter((todo) => todo.completed === false);

  if (active) {
    return (
      <Fragment>
        <div className="flex justify-around border-gray-600 border-solid border-b ">
          <span
            className={`pb-2.5 w-24 text-center transition-all ${
              all && "selected"
            }`}
            onClick={mostrarAll}
          >
            All
          </span>
          <span
            className={`pb-2.5 w-24 text-center transition-all ${
              active && "selected"
            }`}
            onClick={mostrarActive}
          >
            Active
          </span>
          <span
            className="pb-2.5 w-24 text-center transition-all"
            onClick={mostrarCompleted}
          >
            Completed
          </span>
        </div>
        <Search />
        <ToDos>
          {activeTodos.map((todo) => {
            return (
              <ToDo
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            );
          })}
        </ToDos>
      </Fragment>
    );
  } else if (completed) {
    return (
      <Fragment>
        <div className="flex justify-around border-gray-600 border-solid border-b ">
          <span
            className={`pb-2.5 w-24 text-center transition-all ${
              all && "selected"
            }`}
            onClick={mostrarAll}
          >
            All
          </span>
          <span
            className={`pb-2.5 w-24 text-center transition-all ${
              active && "selected"
            }`}
            onClick={mostrarActive}
          >
            Active
          </span>
          <span
            className={`pb-2.5 w-24 text-center transition-all ${
              completed && "selected"
            }`}
            onClick={mostrarCompleted}
          >
            Completed
          </span>
        </div>
        <Search />
        <ToDos>
          {item
            .filter((todo) => todo.completed === true)
            .map((todo) => {
              return (
                <ToDo
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              );
            })}
        </ToDos>
        <Button
          deleteAll
          onDeleteAll={() => {
            deleteAll();
          }}
        >
          Delete
        </Button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="flex justify-around border-gray-600 border-solid border-b ">
          <span
            className={`pb-2.5 w-24 text-center transition-all ${
              (all || active === false || completed === false) && "selected"
            }`}
          >
            All
          </span>
          <span
            className="pb-2.5 w-24 text-center transition-all"
            onClick={mostrarActive}
          >
            Active
          </span>
          <span
            className="pb-2.5 w-24 text-center transition-all"
            onClick={mostrarCompleted}
          >
            Completed
          </span>
        </div>
        <Search />
        <ToDos>
          {item.map((todo) => {
            return (
              <ToDo
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            );
          })}
        </ToDos>
      </Fragment>
    );
  }
}

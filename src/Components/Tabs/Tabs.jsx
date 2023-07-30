import { Fragment, useState } from "react";
import Search from "../Search/Search";
import ToDos from "../ToDos/ToDos";
import ToDo from "../ToDo/ToDo";
import "./Tabs.css";
import Button from "../Button/Button";

export default function Tabs({ allTodos }) {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

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
  const activeTodos = allTodos.filter((todo) => todo.completed === false);
  console.log(activeTodos);

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
          {allTodos
            .filter((todo) => todo.completed === true)
            .map((todo) => {
              return (
                <ToDo
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                />
              );
            })}
        </ToDos>
        <Button deleteAll>Delete</Button>
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
          {allTodos.map((todo) => {
            return (
              <ToDo
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            );
          })}
        </ToDos>
      </Fragment>
    );
  }
}

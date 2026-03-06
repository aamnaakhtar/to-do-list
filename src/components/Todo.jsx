import "./CSS/Style.css";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";

let count = 0;
const Todo = () => {
  const [todoInput, setTodoInput] = useState([]);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  const add = () => {
    const value = inputRef.current.value;
    if (value.trim() !== "") {
      setTodoInput([
        ...todoInput,
        { id: count++, text: value, completed: false },
      ]);
      inputRef.current.value = "";
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todoInput.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodoInput(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todoInput.filter((todo) => todo.id !== id);
    setTodoInput(filteredTodos);
  };

  useEffect(() => {
    setTodoInput(JSON.parse(localStorage.getItem("todoItems")) || []);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("todoItems", JSON.stringify(todoInput));
  }, [todoInput]);

  return (
    <div className="todo">
      <div className="todo-header">To Do List</div>
      <div className="todo-add">
        <input
          type="text"
          placeholder="Add a new task"
          className="todo-input"
          ref={inputRef}
          maxLength={100}
        />
        <div className="todo-add-btn" onClick={add}>
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todoInput.map((item) => (
          <TodoItems
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;

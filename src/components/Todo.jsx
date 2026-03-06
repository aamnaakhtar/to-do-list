import "./CSS/Style.css";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";

let count = 0;
const Todo = () => {
  const [todoInput, setTodoInput] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  const add = () => {
    const value = inputRef.current.value;
    if (value.trim() !== "") {
      setTodoInput([
        { id: count++, text: value, completed: false },
        ...todoInput,
      ]);
      inputRef.current.value = "";
      setCharCount(0);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      add();
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
          onKeyDown={handleKeyDown}
          onChange={(e) => setCharCount(e.target.value.length)}
        />
        <div className={`char-count ${charCount > 95 ? "warning" : ""}`}>
          {charCount}/100
        </div>
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

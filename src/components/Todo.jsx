import "./CSS/Todo.css";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";

let count = 0;
const Todo = () => {
  const [todoInput, setTodoInput] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    const value = inputRef.current.value;
    if (value.trim() !== "") {
      setTodoInput([...todoInput, { id: count++, text: value }]);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    console.log(todoInput);
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
        />
        <div className="todo-add-btn" onClick={() => add()}>
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todoInput.map((item, index) => {
          return (
            <TodoItems key={item.id} text={item.text} display={item.display} />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

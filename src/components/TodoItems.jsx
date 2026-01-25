import "./CSS/Style.css";

const TodoItems = ({ id, text, completed, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-items">
      <div className="todo-item-container">
        <div className="todo-item">
          <input
            type="checkbox"
            className="todo-item-checkbox"
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <span
            className="todo-item-text"
            style={{
              textDecoration: completed ? "line-through" : "none",
              opacity: completed ? 0.6 : 1,
            }}
          >
            {text}
          </span>
          <span className="todo-item-delete" onClick={() => deleteTodo(id)}>
            <span className="todo-item-delete-icon">x</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;

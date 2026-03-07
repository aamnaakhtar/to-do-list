import "./CSS/Style.css";

const TodoItems = ({
  id,
  text,
  completed,
  toggleTodo,
  deleteTodo,
  startEdit,
  editId,
  editText,
  setEditText,
  saveEdit,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveEdit(id);
    }

    if (e.key === "Escape") {
      startEdit(null, "");
    }
  };

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
          {editId === id ? (
            <input
              className="todo-item-edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <span
              className="todo-item-text"
              onDoubleClick={() => startEdit(id, text)}
              style={{
                textDecoration: completed ? "line-through" : "none",
                opacity: completed ? 0.6 : 1,
              }}
            >
              {text}
            </span>
          )}
          <span className="todo-item-delete" onClick={() => deleteTodo(id)}>
            <span className="todo-item-delete-icon">x</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;

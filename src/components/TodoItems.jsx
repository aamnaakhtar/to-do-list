import "./CSS/TodoItems.css";

const TodoItems = ({ text, display }) => {
  return (
    <div className="todo-items">
      <div className="todo-item-container">
        <div className="todo-item">
          <input type="checkbox" className="todo-item-checkbox" />
          <span className="todo-item-text">{text}</span>
          <span className="todo-item-delete">
            <span className="todo-item-delete-icon">x</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;

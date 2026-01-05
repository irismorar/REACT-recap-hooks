export function TodoListItem({
  todoId,
  todoIsCompleted,
  handleToggleTodoCompleted,
  todoText,
  handleDeleteTodo,
  todoDate,
}) {
  return (
    <li>
      <input
        type="checkbox"
        id={todoId}
        checked={todoIsCompleted}
        onChange={handleToggleTodoCompleted}
      />
      <label
        htmlFor={todoId}
        style={{
          textDecoration: todoIsCompleted ? "line-through" : "none",
          opacity: todoIsCompleted ? ".4" : "1",
        }}
      >
        {todoText}
      </label>
      <div className="creation-date"> {todoDate}</div>
      <button className="delete-todo-button" onClick={handleDeleteTodo}>
        ❌
      </button>
    </li>
  );
}

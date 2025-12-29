export function TodoListItem({
  todoId,
  todoIsCompleted,
  handleToggleCompletedTodo,
  text,
  handleDeleteTodo,
}) {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          id={todoId}
          checked={todoIsCompleted}
          onChange={handleToggleCompletedTodo}
        />
        <label
          htmlFor={todoId}
          style={{
            textDecoration: todoIsCompleted ? "line-through" : "none",
            opacity: todoIsCompleted ? ".5" : "1",
          }}
        >
          {text}
        </label>
      </div>
      <button onClick={handleDeleteTodo}>❌</button>
    </li>
  );
}

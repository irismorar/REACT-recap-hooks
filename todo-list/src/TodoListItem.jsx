export function TodoListItem({
  todoId,
  todoIsCompleted,
  handleToggleTodoCompleted,
  todoText,
  handleDeleteTodo,
  todoDate,
  handleDoubleClick,
  isEditingTodo,
  handleEnterKey,
}) {
  if (isEditingTodo) {
    return (
      <li>
        <input
          type="text"
          defaultValue={todoText}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handleEnterKey(event.target.value);
            }
          }}
        ></input>
      </li>
    );
  }

  return (
    <li onDoubleClick={handleDoubleClick}>
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

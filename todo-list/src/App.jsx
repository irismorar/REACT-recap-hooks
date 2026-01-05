import "./App.css";
import { TodoInput } from "./TodoInput";
import { TodoListItem } from "./TodoListItem";
import { useTodos } from "./useTodos";

export default function App() {
  const {
    todos,
    userInput,
    filteredTodos,
    itemsLeft,
    filter,
    changeUserInput,
    addTodo,
    deleteTodo,
    toggleTodoCompleted,
    setFilterAll,
    setFilterActive,
    setFilterCompleted,
    clearCompletedTodos,
  } = useTodos();

  return (
    <section className="app-container">
      <header>
        <h1>TODOS</h1>
        <TodoInput
          textInput={userInput}
          handleAddTodo={addTodo}
          handleChangeUserInput={(event) => {
            changeUserInput(event.target.value);
          }}
        />
      </header>
      <main>
        <ul>
          {filteredTodos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todoId={todo.id}
                todoIsCompleted={todo.isCompleted}
                handleToggleTodoCompleted={() => {
                  toggleTodoCompleted(todo);
                }}
                todoText={todo.text}
                handleDeleteTodo={() => {
                  deleteTodo(todo);
                }}
                todoDate={todo.date}
              />
            );
          })}
        </ul>
        {!!todos.length && (
          <footer>
            <section className="remaining-todos-container">
              {itemsLeft} {itemsLeft > 1 ? "items" : "item"} left
            </section>
            <section className="filters-container">
              <button
                onClick={setFilterAll}
                style={{
                  backgroundColor:
                    filter === "all" ? "hsla(0,0%,100%,.2)" : "transparent",
                }}
              >
                All
              </button>
              <button
                onClick={setFilterActive}
                style={{
                  backgroundColor:
                    filter === "active" ? "hsla(0,0%,100%,.2)" : "transparent",
                }}
              >
                Active
              </button>
              <button
                onClick={setFilterCompleted}
                style={{
                  backgroundColor:
                    filter === "completed"
                      ? "hsla(0,0%,100%,.2)"
                      : "transparent",
                }}
              >
                Completed
              </button>
            </section>
            <div onClick={clearCompletedTodos}>Clear completed</div>
          </footer>
        )}
      </main>
    </section>
  );
}

import "./App.css";
import { useTodos } from "./useTodos";
import { TodoInput } from "./TodoInput";
import { TodoListItem } from "./TodoListItem";

export default function App() {
  const {
    userInput,
    todos,
    filter,
    filteredTodos,
    itemsLeft,
    changeUserInput,
    createTodo,
    deleteTodo,
    toggleCompletedTodo,
    clearCompletedTodos,
    setFilterAll,
    setFilterActive,
    setFilterCompleted,
  } = useTodos();

  return (
    <section className="app-container">
      <header>
        <h1>TODOS</h1>
        <TodoInput
          userInput={userInput}
          handleCreateTodo={createTodo}
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
                todoIsCompleted={todo.completed}
                handleToggleCompletedTodo={() => toggleCompletedTodo(todo)}
                text={todo.text}
                handleDeleteTodo={() => deleteTodo(todo)}
              />
            );
          })}
        </ul>

        {!!todos.length && (
          <footer>
            <section className="remaining-todos-container">
              {itemsLeft} {itemsLeft <= 1 ? " item" : " items"} left
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

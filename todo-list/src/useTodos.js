import { useCallback, useState } from "react";

export function useTodos() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // "active" , "completed"

  const changeUserInput = useCallback((text) => {
    setUserInput(text);
  }, []);

  const createTodo = useCallback(() => {
    if (userInput === "") {
      return;
    }
    const afterCreatingNewTodo = [
      ...todos,
      { id: crypto.randomUUID(), text: userInput, completed: false },
    ];
    setTodos(afterCreatingNewTodo);
    setUserInput("");
  }, [userInput, todos]);

  const deleteTodo = useCallback(
    (item) => {
      const afterDeleteTodo = todos.filter((todo) => {
        return item.id !== todo.id;
      });
      setTodos(afterDeleteTodo);
    },
    [todos]
  );

  const toggleCompletedTodo = useCallback(
    (item) => {
      const afterToggleTodo = todos.map((todo) => {
        return item.id === todo.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo;
      });
      setTodos(afterToggleTodo);
    },
    [todos]
  );

  const clearCompletedTodos = useCallback(() => {
    const afterClearCompletedTodos = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(afterClearCompletedTodos);
  }, [todos]);

  const setFilterAll = useCallback(() => {
    setFilter("all");
  }, []);

  const setFilterActive = useCallback(() => {
    setFilter("active");
  }, []);

  const setFilterCompleted = useCallback(() => {
    setFilter("completed");
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
  });

  const itemsLeft = todos.filter((todo) => {
    return !todo.completed;
  }).length;

  return {
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
  };
}

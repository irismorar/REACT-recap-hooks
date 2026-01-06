import { useCallback, useState } from "react";

export function useTodos() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // "active" | "completed"
  const [isEditingTodoId, setIsEditingTodoId] = useState(null);

  const changeUserInput = useCallback((newText) => {
    setUserInput(newText);
  }, []);

  const addTodo = useCallback(() => {
    if (userInput === "") {
      return;
    }
    const afterAddingTodo = [
      ...todos,
      {
        id: crypto.randomUUID(),
        text: userInput.trim(),
        isCompleted: false,
        date: new Date().toLocaleString(),
      },
    ];
    setTodos(afterAddingTodo);
    setUserInput("");
  }, [todos, userInput]);

  const setTodoName = useCallback(
    (id, newText) => {
      const afterEditingTodo = todos.map((todo) => {
        return id === todo.id
          ? {
              ...todo,
              text: newText,
            }
          : todo;
      });
      setTodos(afterEditingTodo);
    },
    [todos]
  );

  const deleteTodo = useCallback(
    (item) => {
      const afterDeletingTodo = todos.filter((currentTodo) => {
        return item.id !== currentTodo.id;
      });
      setTodos(afterDeletingTodo);
    },
    [todos]
  );

  const toggleTodoCompleted = useCallback(
    (item) => {
      const afterToggleTodo = todos.map((todo) => {
        return item.id === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
      setTodos(afterToggleTodo);
    },
    [todos]
  );

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
      return !todo.isCompleted;
    }
    if (filter === "completed") {
      return todo.isCompleted;
    }
  });

  const clearCompletedTodos = useCallback(() => {
    const afterClearCompleted = todos.filter((todo) => {
      return !todo.isCompleted;
    });
    setTodos(afterClearCompleted);
  }, [todos]);

  const itemsLeft = todos.filter((todo) => !todo.isCompleted).length;

  return {
    todos,
    userInput,
    filteredTodos,
    itemsLeft,
    filter,
    isEditingTodoId,
    setIsEditingTodoId,
    setTodoName,
    changeUserInput,
    addTodo,
    deleteTodo,
    toggleTodoCompleted,
    setFilterAll,
    setFilterActive,
    setFilterCompleted,
    clearCompletedTodos,
  };
}

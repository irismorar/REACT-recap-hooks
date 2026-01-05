export function TodoInput({ textInput, handleAddTodo, handleChangeUserInput }) {
  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      value={textInput}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          handleAddTodo();
        }
      }}
      onChange={handleChangeUserInput}
    />
  );
}

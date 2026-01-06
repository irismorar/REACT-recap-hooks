export function DialogBox({
  handleDoubleClick,
  isEditing,
  handleSetText,
  text,
}) {
  if (isEditing) {
    return (
      <input
        type="text"
        placeholder="Insert text here..."
        defaultValue="Insert text here..."
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            handleSetText(event.target.value);
          }
        }}
      ></input>
    );
  }
  return <div onDoubleClick={handleDoubleClick}>{text}</div>;
}

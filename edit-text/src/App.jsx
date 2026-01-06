import "./App.css";
import { useEditDialogBox } from "./useEditDialogBox";
import { DialogBox } from "./DialogBox";
import { ResetButton } from "./ResetButton";

export default function App() {
  const { originalText, isBoxEditing, setIsBoxEditing, setText, resetText } =
    useEditDialogBox();

  return (
    <>
      <DialogBox
        handleDoubleClick={() => {
          setIsBoxEditing(true);
        }}
        handleSetText={(newText) => {
          setText(newText);
          setIsBoxEditing(false);
        }}
        isEditing={isBoxEditing}
        text={originalText}
      />
      <ResetButton handleClick={resetText} />
    </>
  );
}

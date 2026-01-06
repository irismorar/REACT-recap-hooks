import { useCallback, useState } from "react";

export function useEditDialogBox() {
  const [isBoxEditing, setIsBoxEditing] = useState(false);
  const [originalText, setOriginalText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lectus diam. Nulla ac sollicitudin ex, sit amet tempor lorem. Praesent non felis quis urna accumsan auctor non non leo. Ut fringilla sollicitudin tortor, et eleifend erat lobortis nec. Donec vel nisi orci. Morbi a feugiat quam. Duis eu dui tortor. Aenean fringilla, nunc id sagittis ullamcorper, odio lectus elementum erat, non consequat mi sapien at nibh. Aliquam lacinia nulla purus, ut lobortis est gravida sit amet."
  );

  const setText = useCallback((newText) => {
    setOriginalText(newText);
  }, []);

  const resetText = useCallback(() => {
    setOriginalText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lectus diam. Nulla ac sollicitudin ex, sit amet tempor lorem. Praesent non felis quis urna accumsan auctor non non leo. Ut fringilla sollicitudin tortor, et eleifend erat lobortis nec. Donec vel nisi orci. Morbi a feugiat quam. Duis eu dui tortor. Aenean fringilla, nunc id sagittis ullamcorper, odio lectus elementum erat, non consequat mi sapien at nibh. Aliquam lacinia nulla purus, ut lobortis est gravida sit amet."
    );
  }, []);

  return {
    originalText,
    isBoxEditing,
    setIsBoxEditing,
    setText,
    resetText,
  };
}

import "./App.css";
import { Tutorial } from "./Tutorial";
import { Letter } from "./Letter";
import { Level } from "./Level";
import { useWordsGame } from "./useWordsGame";

export default function App() {
  const { page, currentWord, userWord, addLetter } = useWordsGame();
  return (
    <section className="game-container">
      {page === "tutorial" && <Tutorial />}
      {page === "play" && (
        <Level
          currentWord={currentWord}
          addLetter={addLetter}
          userWord={userWord}
        />
      )}
      {page === "win" && <Letter />}
    </section>
  );
}

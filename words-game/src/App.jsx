import "./App.css";
import { Tutorial } from "./Tutorial";
import { Letter } from "./Letter";
import { Level } from "./Level";
import { useWordsGame } from "./useWordsGame";

export default function App() {
  const {
    page,
    currentWord,
    userWord,
    wordsLegend,
    currentWordClickedLetterIndices,
    totalCoins,
    playGame,
    rememberClickedLetterIndex,
    addLetter,
    getResetLevel,
    showHint,
  } = useWordsGame();
  return (
    <section className="game-container">
      {page === "tutorial" && <Tutorial playGame={playGame} />}
      {page === "play" && (
        <Level
          currentWord={currentWord}
          addLetter={addLetter}
          userWord={userWord}
          wordsLegend={wordsLegend}
          currentWordClickedLetterIndices={currentWordClickedLetterIndices}
          rememberClickedLetterIndex={rememberClickedLetterIndex}
          getResetLevel={getResetLevel}
          showHint={showHint}
          totalCoins={totalCoins}
        />
      )}
      {page === "win" && <Letter />}
    </section>
  );
}

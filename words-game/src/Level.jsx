export function Level({
  currentWord,
  addLetter,
  userWord,
  wordsLegend,
  totalCoins,
  currentWordClickedLetterIndices,
  rememberClickedLetterIndex,
  getResetLevel,
  showHint,
}) {
  return (
    <section className="game-board level">
      <section>
        <button
          className="restart-button"
          onClick={() => {
            getResetLevel();
          }}
        >
          Reîncearcă
        </button>
        <button
          className="hint-button"
          onClick={() => {
            showHint();
          }}
        >
          Indiciu
        </button>
        <div className="coins">🪙{totalCoins}</div>
      </section>
      <section>
        <div className="word-buttons-container">
          {currentWord.map((letter, index) => (
            <button
              key={index}
              className="word-button"
              onClick={() => {
                rememberClickedLetterIndex(index);
                addLetter(letter);
              }}
              disabled={currentWordClickedLetterIndices.includes(index)}
              style={{
                opacity: currentWordClickedLetterIndices.includes(index)
                  ? ".3"
                  : "1",
              }}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="user-word-container">{userWord}</div>
      </section>
      <div className="words-legend-container">
        <div>{wordsLegend}</div>
      </div>
    </section>
  );
}

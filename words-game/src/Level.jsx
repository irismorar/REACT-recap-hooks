export function Level({
  currentWord,
  addLetter,
  userWord,
  wordsLegend,
  currentWordClickedLetterIndices,
  getCurrentWordClickedLetterIndices,
  getResetLevel,
}) {
  return (
    <section className="game-board level">
      <button
        className="restart-button"
        onClick={() => {
          getResetLevel();
        }}
      >
        Try again
      </button>
      <div>
        <div className="word-buttons-container">
          {currentWord.map((letter, index) => (
            <button
              key={index}
              className="word-button"
              onClick={() => {
                getCurrentWordClickedLetterIndices(index);
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
      </div>
      <div className="words-legend-container">
        <div>{wordsLegend}</div>
      </div>
    </section>
  );
}

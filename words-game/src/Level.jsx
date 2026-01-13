export function Level({ currentWord, addLetter, userWord }) {
  return (
    <section>
      <div className="word-buttons-container">
        {currentWord.map((letter, index) => (
          <button
            key={index}
            onClick={() => {
              addLetter(letter);
            }}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="user-word-container">{userWord}</div>
    </section>
  );
}

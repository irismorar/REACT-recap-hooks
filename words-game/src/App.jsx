import { useWordsGame } from "./useWordsGame";
import "./App.css";
import { Tutorial } from "./Tutorial";
import { Letter } from "./Letter";

export default function App() {
  const { page } = useWordsGame();
  return (
    <section>
      {page === "tutorial" && <Tutorial />}
      {page === "win" && <Letter />}
    </section>
  );
}

import { useCallback, useEffect, useState } from "react";

export const words = [
  "cer",
  "ură",
  "orb",
  "văl",
  "ars",
  "mic",
  "trăi",
  "oraș",
  "timp",
  "lege",
  "abis",
  "armă",
  "idee",
  "bine",
  "cale",
  "veni",
  "lume",
  "deja",
  "rupt",
  "față",
  "adus",
  "stea",
  "hrăni",
  "putea",
  "primi",
  "vedea",
  "căzut",
  "secol",
  "poate",
  "ferit",
  "sânge",
  "mască",
  "etern",
  "demon",
  "tărâm",
  "scrie",
  "uscat",
  "negru",
  "soare",
  "efort",
  "dulce",
  "ataca",
  "frică",
  "numit",
  "umbră",
  "forță",
  "râset",
  "venit",
  "șters",
  "sigur",
  "refuz",
  "vorbi",
  "câmpie",
  "poartă",
  "permis",
  "fisură",
  "născut",
  "exista",
  "vostru",
  "destin",
  "adevăr",
  "mantie",
  "castel",
  "otrăvi",
  "extrem",
  "ploaie",
  "rămâne",
  "picior",
  "cenușă",
  "meleag",
  "șoaptă",
  "veghea",
  "condus",
  "crezut",
  "retras",
  "ascuns",
  "lumină",
  "nostru",
  "decima",
  "merita",
  "enigmă",
  "orbire",
  "ordine",
  "primit",
  "greșit",
  "despre",
  "ființă",
  "nevoie",
  "ridica",
  "întors",
  "altora",
  "tăcere",
  "spirit",
  "primul",
  "apărut",
  "dușman",
  "egoism",
  "pictat",
  "virtute",
  "început",
  "armonie",
  "întinde",
  "neuitat",
  "tuturor",
  "galaxie",
  "indiciu",
  "planetă",
  "perfect",
  "proteja",
  "invazie",
  "respira",
  "răbdare",
  "șoptind",
  "semănat",
  "anarhie",
  "sfârșit",
  "pierdut",
  "decizie",
  "devenit",
  "slăbire",
  "valoare",
  "ignorat",
  "tolerat",
  "progres",
  "izolare",
  "istorie",
  "memorie",
  "complet",
  "coroană",
  "unitate",
  "empatie",
  "înainte",
  "posibil",
  "suflare",
  "printre",
  "minciună",
  "deasupra",
  "înghițit",
  "greșeală",
  "parfumat",
  "cunoaște",
  "întrebat",
  "prefăcut",
  "acceptat",
  "ștergere",
  "dizolvat",
  "grozăvie",
  "judecată",
  "labirint",
  "deschide",
  "seducție",
  "profeție",
  "aplaudat",
  "locuitor",
  "victorie",
  "separare",
  "lipicios",
  "interior",
  "aparține",
  "înșelător",
  "guvernare",
  "schimbare",
  "claritate",
  "echilibru",
  "dezbinare",
  "pământean",
  "scrisoare",
  "războinic",
  "libertate",
  "apocalipsă",
];

export function useWordsGame() {
  const [page, setPage] = useState("tutorial"); // tutorial | play | win
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userWord, setUserWord] = useState("");
  const [wordsLegend, setWordsLegend] = useState([]);
  const [currentWordRandomised, setCurrentWordRandomised] = useState([]);
  const [currentWordClickedLetterIndices, setCurrentWordClickedLetterIndices] =
    useState([]);
  const [totalCoins, setTotalCoins] = useState(0);
  const [currentWordCoinsReward, setCurrentWordCoinsReward] = useState(0); // currentWord.length | currentWord.length - hint.length

  useEffect(() => {
    setCurrentWordRandomised(randomizeWordLetters(words[currentWordIndex]));
  }, [currentWordIndex]);

  useEffect(() => {
    if (page === "tutorial") {
      document.body.classList.add("body-tutorial");
    }

    if (page === "play") {
      document.body.classList.add("body-level");
    }
    if (page === "win") {
      document.body.classList.add("body-win");
    }
  }, [page]);

  const playGame = useCallback(() => {
    if (page === "tutorial") {
      setCurrentWordCoinsReward(words[currentWordIndex].length);
      setPage("play");
    }
  }, [page, currentWordIndex]);

  const addLetter = useCallback(
    (letter) => {
      const currentWord = words[currentWordIndex];
      if (userWord.length < currentWord.length - 1) {
        setUserWord((prev) => prev + letter);
      } else {
        const userWordPlusLetter = userWord + letter;
        if (userWordPlusLetter !== currentWord) {
          setCurrentWordClickedLetterIndices([]);
          setUserWord("");
        } else {
          if (currentWordIndex < words.length - 1) {
            setCurrentWordClickedLetterIndices([]);
            setCurrentWordIndex((prev) => prev + 1);
            setUserWord("");
            setWordsLegend((prevWords) => [...prevWords, currentWord + " "]);
            setCurrentWordCoinsReward(words[currentWordIndex + 1].length);
            setTotalCoins((prev) => prev + currentWordCoinsReward);
          } else {
            setTotalCoins((prev) => prev + currentWordCoinsReward);
            setPage("win");
          }
        }
      }
    },
    [currentWordIndex, userWord, currentWordCoinsReward],
  );

  const rememberClickedLetterIndex = (index) => {
    setCurrentWordClickedLetterIndices((prev) => [...prev, index]);
  };

  const getResetLevel = useCallback(() => {
    setUserWord("");
    setCurrentWordClickedLetterIndices([]);
  }, []);

  const showHint = useCallback(() => {
    const currentWord = words[currentWordIndex];
    const hint = getFirstHalfLetters(currentWord);
    setUserWord(hint);
    setCurrentWordCoinsReward(currentWord.length - hint.length);

    const hintLetterIndices = [];
    const splitHint = hint.split("");
    const hintLetterIndicesDictionary = {};
    const seenLetters = [];
    splitHint.forEach((hintLetter) => {
      if (seenLetters.includes(hintLetter)) {
        return;
      }
      currentWordRandomised.forEach((randomisedLetter, index) => {
        if (hintLetter !== randomisedLetter) {
          return;
        }
        if (!hintLetterIndicesDictionary[hintLetter]) {
          hintLetterIndicesDictionary[hintLetter] = [index];
        } else {
          hintLetterIndicesDictionary[hintLetter].push(index);
        }
      });
      seenLetters.push(hintLetter);
    });
    for (const hintLetter of splitHint) {
      hintLetterIndices.push(hintLetterIndicesDictionary[hintLetter].shift());
    }

    setCurrentWordClickedLetterIndices(hintLetterIndices);
  }, [currentWordIndex, currentWordRandomised]);

  return {
    page,
    currentWord: currentWordRandomised,
    userWord,
    wordsLegend,
    currentWordClickedLetterIndices,
    totalCoins,
    currentWordIndex,
    playGame,
    rememberClickedLetterIndex,
    addLetter,
    getResetLevel,
    showHint,
  };
}

function splitWord(word) {
  return word.split("");
}

function randomizeWordLetters(word) {
  const splittedWord = splitWord(word);
  const rearrangedWord = [];
  while (splittedWord.length > 0) {
    const index = Math.floor(Math.random() * splittedWord.length);
    const letter = splittedWord.splice(index, 1).join("");
    rearrangedWord.push(letter);
  }
  return rearrangedWord;
}

function getFirstHalfLetters(currentWord) {
  const halfIndex = Math.ceil(currentWord.length / 2);
  return currentWord.slice(0, halfIndex);
}

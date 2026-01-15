import { useCallback, useEffect, useState } from "react";

const words = [
  "cer",
  "ură",
  "orb",
  "văl",
  "ars",
  "mic",
  "rău",
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
  // "asuprire",
  "deschide",
  "seducție",
  // "supunere",
  "profeție",
  "aplaudat",
  "locuitor",
  // "corupție",
  "victorie",
  "separare",
  "lipicios",
  "interior",
  "aparține",
  "înșelător",
  "guvernare",
  "schimbare",
  "claritate",
  // "permanent",
  "echilibru",
  "dezbinare",
  "pământean",
  "scrisoare",
  "războinic",
  "libertate",
  // "degradare",
  // "discordie",
  // "tulburare",
  // "umanitate",
  // "niciodată",
  // "frumusețe",
  // "promisiune",
  // "compasiune",
  // "conștiință",
  // "impuritate",
  // "infiltrare",
  // "apocalipsă",
  // "rezistență",
  // "avertizare",
  // "sacrificiu",
  // "frământare",
  // "identitate",
  // "manipulare",
  // "justificat",
  // "amenințare",
  // "neglijență",
  // "perversiune",
  // "caracteriza",
  // "transformat",
  // "halucinație",
  // "transformare",
  // "binecuvântare",
];

export function useWordsGame() {
  const [page, setPage] = useState("tutorial"); // tutorial | play | win
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userWord, setUserWord] = useState("");
  const [wordsLegend, setWordsLegend] = useState([]);
  const [currentWordRandomised, setCurrentWordRandomised] = useState([]);
  const [currentWordClickedLetterIndices, setCurrentWordClickedLetterIndices] =
    useState([]);

  useEffect(() => {
    setCurrentWordRandomised(randomizeWordLetters(words[currentWordIndex]));
  }, [currentWordIndex]);

  const handlePressEnter = useCallback(
    (event) => {
      if (page === "tutorial" && event.key === "Enter") {
        setPage("play");
      }
    },
    [page]
  );

  useEffect(() => {
    document.addEventListener("keyup", handlePressEnter);

    return () => {
      document.removeEventListener("keyup", handlePressEnter);
    };
  }, [handlePressEnter]);

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
          } else {
            setPage("win");
          }
        }
      }
    },
    [currentWordIndex, userWord]
  );

  const getCurrentWordClickedLetterIndices = (index) => {
    setCurrentWordClickedLetterIndices((prev) => [...prev, index]);
  };

  const getResetLevel = useCallback(() => {
    setUserWord("");
    setCurrentWordClickedLetterIndices([]);
  }, []);

  return {
    page,
    words,
    currentWord: currentWordRandomised,
    userWord,
    wordsLegend,
    currentWordClickedLetterIndices,
    getCurrentWordClickedLetterIndices,
    addLetter,
    getResetLevel,
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
    const letter = splittedWord.splice(index, 1);
    rearrangedWord.push(letter);
  }
  return rearrangedWord;
}

// const findDuplicatedWords = () => {
//   const duplicatedWords = [];
//   for (let i = 0; i < words.length - 2; i++) {
//     for (let j = i + 1; j < words.length - 1; j++) {
//       if (words[i] === words[j]) {
//         duplicatedWords.push(words[i]);
//       }
//     }
//   }
//   return duplicatedWords;
// };

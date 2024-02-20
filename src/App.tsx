import { useState, ChangeEvent } from "react";
import NiceInfo from "./NiceInfo";

const GrammaticalAnalysis = () => {
  const [language, setLanguage] = useState<"es" | "de" | "en">("es");
  const [germanPhrase, setGermanPhrase] = useState<string>(
    "Brunetti machte ein nachdenkliches Gesicht: »In diesem Fall, würde ich sagen, ist es lediglich eine Hyperbel, Tenente, wobei die offenkundige Übertreibung dazu dient, die gesamte Aussage als falsch und unglaubwürdig zu entlarven.« Und da Scarpa nichts entgegnete: »Es handelt sich um ein rhetorisches Stilmittel, das eine komische Wirkung erzielen soll.« Scarpa schwieg weiterhin, und Brunetti fuhr lächelnd fort: »In der Philosophie mit der wir uns an der Universität beschäftigt haben spricht man von einem ›argumentum ad absurdum‹« Die Bemerkung, dass dieser Kunstgriff sich im Umgang mit dem ViceQuestore geradezu aufdrängte, verkniff er sich lieber."
  );
  const [result, setResult] = useState<TokenInfo[] | null>(null);
  const [hoveredWordInfo, setHoveredWordInfo] = useState<TokenInfo | null>(
    null
  );
  const [clickedWordInfo, setClickedWordInfo] = useState<TokenInfo | null>(
    null
  );

  const analyzeGrammar = () => {
    const socket = new WebSocket(import.meta.env.VITE_WS_URL);

    socket.addEventListener("open", () => {
      const message = { mensaje: germanPhrase };
      socket.send(JSON.stringify(message));
    });

    socket.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);
      const tokensInfo: TokenInfo[] = response.tokens;
      setResult(tokensInfo);
      socket.close();
    });
  };

  const handleWordHover = (wordInfo: TokenInfo) => {
    setHoveredWordInfo(wordInfo);
  };

  const handleWordLeave = () => {
    setHoveredWordInfo(null);
  };

  const handleWordClick = (wordInfo: TokenInfo) => {
    setClickedWordInfo(
      clickedWordInfo?.text !== wordInfo.text ? wordInfo : null
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGermanPhrase(e.target.value);
    setClickedWordInfo(null);
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-col w-full">
        <div className="flex gap-2 justify-center mb-2">
          {["es", "de", "en"].map((lan) => (
            <button
              key={lan}
              onClick={() => setLanguage(lan as "es" | "de" | "en")}
              className="cursor-pointer"
            >
              {lan}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            value={germanPhrase}
            onChange={handleInputChange}
            className="p-2 rounded-md"
          />
          <button onClick={analyzeGrammar}>Analizar Gramática</button>
          <div>
            <NiceInfo
              {...{ WordInfo: clickedWordInfo || hoveredWordInfo, language }}
            />
          </div>
        </div>
        <div>
          {result && (
            <div>
              {result.map((wordInfo, index) => (
                <span
                  key={index}
                  onMouseEnter={() => handleWordHover(wordInfo)}
                  onMouseLeave={handleWordLeave}
                  onClick={() => handleWordClick(wordInfo)}
                  className={`cursor-pointer ${
                    hoveredWordInfo?.text === wordInfo.text ? "underline" : ""
                  } ${
                    clickedWordInfo?.text === wordInfo.text ? "underline" : ""
                  }`}
                >
                  {wordInfo.text}{" "}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GrammaticalAnalysis;

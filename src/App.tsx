import { useState, ChangeEvent, useMemo } from "react";
import NiceInfo from "./NiceInfo";
import LoadingSvg from "./Loading";

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

  const [serverStatus, setServerStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("connecting");

  const socket = useMemo(() => {
    const socket = new WebSocket(import.meta.env.VITE_WS_URL);
    setServerStatus("connecting");

    socket.addEventListener("open", () => {
      setServerStatus("connected");
    });

    socket.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);
      const tokensInfo: TokenInfo[] = response.tokens;
      setResult(tokensInfo);
    });

    socket.addEventListener("close", () => {
      setServerStatus("disconnected");
    });

    socket.addEventListener("error", () => {
      setServerStatus("disconnected");
    });

    return socket;
  }, []);

  const analyzeGrammar = () => {
    const message = { mensaje: germanPhrase };
    socket.send(JSON.stringify(message));
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
        <div className="flex gap-2 justify-center items-center mb-2">
          <div className="mr-3 cursor-default">
            {serverStatus === "connecting" ? <LoadingSvg /> : ""}
            {serverStatus === "connected" ? "✅" : ""}
            {serverStatus === "disconnected" ? "❌" : ""}
          </div>
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
          <button
            className="flex justify-center gap-4 disabled:opacity-30 disabled:outline-none disabled:border-none"
            onClick={analyzeGrammar}
            disabled={serverStatus !== "connected"}
          >
            {serverStatus === "connecting" ? <LoadingSvg /> : ""}
            Analizar Gramática
          </button>
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
                  className={`relative cursor-pointer ${
                    hoveredWordInfo?.text === wordInfo.text ? "underline" : ""
                  } ${
                    clickedWordInfo?.text === wordInfo.text ? "underline" : ""
                  }`}
                >
                  {wordInfo.text}{" "}
                  <div
                    className={`w-full h-[2px] absolute flex bottom-0 left-0
                      ${
                        (wordInfo.morph["Case"] as string | undefined) &&
                        (wordInfo.morph["Case"] as string).length > 0 &&
                        (wordInfo.morph["Case"] === "Nom"
                          ? "bg-orange-400 Nom"
                          : wordInfo.morph["Case"] === "Acc"
                          ? "bg-red-400 Acc"
                          : wordInfo.morph["Case"] === "Dat"
                          ? "bg-green-400 dat"
                          : "")
                      }
                    `}
                  />
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

import { useState, useRef, useEffect, ChangeEvent } from "react";
import NiceInfo from "./NiceInfo";
import LoadingSvg from "./Loading";
import { Legend } from "./Legend";

export default function GrammaticalAnalysis() {
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

  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_WS_URL);
    setServerStatus("connecting");

    socket.addEventListener("open", () => {
      setServerStatus("connected");
    });

    socket.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);
      setResult(response.tokens);
    });

    socket.addEventListener("close", () => {
      setServerStatus("disconnected");
    });

    socket.addEventListener("error", () => {
      setServerStatus("disconnected");
    });

    socketRef.current = socket;

    return () => {
      if (socketRef.current) socketRef.current.close();
    };
  }, []);

  const analyzeGrammar = (messageToSend: string) => {
    if (socketRef.current) {
      const message = { mensaje: messageToSend };
      socketRef.current.send(JSON.stringify(message));
    }
  };

  const handleWordHover = (wordInfo: TokenInfo) => setHoveredWordInfo(wordInfo);
  const handleWordLeave = () => setHoveredWordInfo(null);

  const handleWordClick = (wordInfo: TokenInfo) => {
    setClickedWordInfo(
      clickedWordInfo?.text !== wordInfo.text ? wordInfo : null
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGermanPhrase(e.target.value);
    analyzeGrammar(e.target.value);
    setClickedWordInfo(null);
  };

  const getWordColorClass = (caseType: string | undefined) => {
    if (!caseType) return "";
    switch (caseType) {
      case "Nom":
        return "bg-blue-400 Nom";
      case "Acc":
        return "bg-red-400 Acc";
      case "Dat":
        return "bg-green-400 Dat";
      case "Gen":
        return "bg-orange-400 Gen";
      default:
        return "";
    }
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-col w-full">
        <div className="flex gap-2 justify-center items-center mb-2">
          <div className="mr-3 cursor-default">
            {serverStatus === "connecting" && <LoadingSvg />}
          </div>

          <Legend language={language} />

          {["es", "de", "en"].map((lan) => (
            <button
              key={lan}
              onClick={() => setLanguage(lan as "es" | "de" | "en")}
              className="cursor-pointer border"
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

          <NiceInfo
            WordInfo={clickedWordInfo || hoveredWordInfo}
            language={language}
          />
        </div>

        {result && (
          <div>
            {result.map((wordInfo, index) =>
              wordInfo.pos === "SPACE" ? (
                <div key={index}>
                  {typeof wordInfo.text === "string" &&
                    Array.from(
                      {
                        length: wordInfo.text.replace(/\n/g, "n").length - 1,
                      },
                      () => "space"
                    ).map((space, i) => <br key={`${i}_${space}`} />)}
                </div>
              ) : (
                <span
                  key={index}
                  onMouseEnter={() => handleWordHover(wordInfo)}
                  onMouseLeave={handleWordLeave}
                  onClick={() => handleWordClick(wordInfo)}
                  className={`relative cursor-pointer 
              ${hoveredWordInfo?.text === wordInfo.text ? "bg-yellow-100" : ""}
                  `}
                >
                  {wordInfo.text}{" "}
                  <div
                    className={`w-full h-[2px] absolute flex bottom-0 left-0 ${getWordColorClass(
                      wordInfo.morph?.Case as string | undefined
                    )}`}
                  />
                </span>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";

const GrammaticalAnalysis = () => {
  const [germanPhrase, setGermanPhrase] = useState(
    "Diese Mädchen gehen noch in den Kindergarten."
  );
  const [result, setResult] = useState("");

  const analyzeGrammar = () => {
    const socket = new WebSocket("ws://localhost:8765");

    socket.addEventListener("open", () => {
      const message = { mensaje: germanPhrase };
      socket.send(JSON.stringify(message));
    });

    socket.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);
      const tokensInfo = response.tokens;
      console.log(tokensInfo);
      setResult(JSON.stringify(tokensInfo, null, 2));
      // socket.close();
    });
  };

  return (
    <div>
      <div className="flex flex-col">
        <textarea
          value={germanPhrase}
          onChange={(e) => setGermanPhrase(e.target.value)}
        />
        <button onClick={analyzeGrammar}>Analizar Gramática</button>
        <div>
          <pre>{result}</pre>
        </div>
      </div>
    </div>
  );
};

export default GrammaticalAnalysis;

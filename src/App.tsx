import { useState } from "react";
import nlp from "de-compromise";

const GrammaticalAnalysis = () => {
  const [germanPhrase, setGermanPhrase] = useState(
    "Diese Mädchen gehen noch in den Kindergarden."
  );

  const analyzeGrammar = () => {
    const dok = nlp(germanPhrase);

    const document = dok.json();
    const verbs = dok.verbs();

    console.log({ document, verbs });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const termsInfo = document[0].terms.map((term: any) => {
      return {
        text: term.text,
        tags: term.tags.join(", "),
      };
    });

    console.log("Estructura gramatical:", termsInfo);
  };

  return (
    <div>
      <div className="flex flex-col">
        <textarea
          value={germanPhrase}
          onChange={(e) => setGermanPhrase(e.target.value)}
        />
        <button onClick={analyzeGrammar}>Analizar Gramática</button>
      </div>
    </div>
  );
};

export default GrammaticalAnalysis;

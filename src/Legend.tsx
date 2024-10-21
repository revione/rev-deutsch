import { useState } from "react";

export const Legend = ({ language }: { language: "es" | "de" | "en" }) => {
  const [expanded, setExpanded] = useState(false);

  const translations = {
    es: {
      title: "Leyenda de Colores",
      casesTitle: "Casos Gramaticales:",
      nominative: "Nominativo (Nom)",
      accusative: "Acusativo (Acc)",
      dative: "Dativo (Dat)",
      genitive: "Genitivo (Gen)",
    },
    en: {
      title: "Legend of Colors",
      casesTitle: "Grammatical Cases:",
      nominative: "Nominative (Nom)",
      accusative: "Accusative (Acc)",
      dative: "Dative (Dat)",
      genitive: "Genitive (Gen)",
    },
    de: {
      title: "Farblegende",
      casesTitle: "Grammatikalische Fälle:",
      nominative: "Nominativ (Nom)",
      accusative: "Akkusativ (Acc)",
      dative: "Dativ (Dat)",
      genitive: "Genitiv (Gen)",
    },
  };

  const t = translations[language]; // Traducciones según el idioma seleccionado

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out $w-20 h-10 p-2 bg-gray-50 rounded-lg cursor-pointer`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="text-center">{t.title}</div>
      {expanded && (
        <div className="absolute bg-gray-50 p-4 top-0 left-0 shadow-lg rounded-lg border w-56">
          <h3 className="font-bold mb-2">{t.title}</h3>
          <div className="flex flex-wrap gap-4">
            <div>
              <h4 className="font-semibold">{t.casesTitle}</h4>
              <ul>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-blue-400 inline-block"></span>
                  {t.nominative}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-400 inline-block"></span>
                  {t.accusative}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-400 inline-block"></span>
                  {t.dative}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-orange-400 inline-block"></span>
                  {t.genitive}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import UniversalFeatures from "./tags/UniversalFeatures";
import TAGS from "./tags/TAGS";

const NiceInfo = ({
  WordInfo,
  language,
}: {
  WordInfo: TokenInfo | null;
  language: "es" | "de" | "en";
}) => (
  <div className="h-[45vh] w-full p-2 overflow-scroll flex flex-col gap-2 my-2">
    {WordInfo !== null && (
      <>
        <h4 className="font-semibold text-xl">
          <span>
            {WordInfo.tag === "NN" &&
              (WordInfo.morph["Gender"] === "Masc"
                ? `Der `
                : WordInfo.morph["Gender"] === "Fem"
                ? `Die `
                : WordInfo.morph["Gender"] === "Neut"
                ? `Das `
                : WordInfo.morph["Gender"] + " ")}
          </span>
          <span>{WordInfo.text}</span>
        </h4>

        <div>
          <div className="font-semibold">Forma base de la palabra</div>
          <div>{WordInfo.lemma}</div>
        </div>

        <div>
          <div className="font-semibold">Categoria</div>
          {WordInfo.tag === "PPER" &&
            WordInfo.morph["Reflex"] &&
            "Pronombre personal reflexivo: se aplica a pronombres personales que tienen función reflexiva, es decir, se refieren al sujeto de la misma oración."}
          <div>
            {(!(WordInfo.tag === "PPER" && WordInfo.morph["Reflex"]) &&
              (TAGS[language] as { [value: string]: string })[WordInfo.tag]) ||
              WordInfo.tag}
          </div>
        </div>

        <div>
          {Object.keys(WordInfo.morph).length > 0 && (
            <div>
              <div className="font-semibold">Morfologia</div>

              {Object.entries(WordInfo.morph).map(([key, value]) => (
                <div key={key} className="flex gap-1">
                  {(UniversalFeatures[language] as UniversalFeatures)[key][
                    value
                  ] || `${key}: ${value}`}
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    )}
  </div>
);

export default NiceInfo;

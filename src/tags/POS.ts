const POS_ES = {
  ADJ: "adjetivo",
  ADP: "adposición",
  ADV: "adverbio",
  AUX: "auxiliar",
  CCONJ: "conjunción coordinante",
  DET: "determinante",
  INTJ: "interjección",
  NOUN: "sustantivo",
  NUM: "numeral",
  PART: "partícula",
  PRON: "pronombre",
  PROPN: "nombre propio",
  PUNCT: "puntuación",
  SCONJ: "conjunción subordinante",
  SYM: "símbolo",
  VERB: "verbo",
  X: "otro",
};

const POS_DE = {
  ADJ: "Adjektiv",
  ADP: "Präposition",
  ADV: "Adverb",
  AUX: "Hilfsverb",
  CCONJ: "koordinierende Konjunktion",
  DET: "Determinierer",
  INTJ: "Interjektion",
  NOUN: "Substantiv",
  NUM: "Numeral",
  PART: "Partikel",
  PRON: "Pronomen",
  PROPN: "Eigenname",
  PUNCT: "Interpunktion",
  SCONJ: "unterordnende Konjunktion",
  SYM: "Symbol",
  VERB: "Verb",
  X: "andere",
};

const POS_EN = {
  ADJ: "adjective",
  ADP: "adposition",
  ADV: "adverb",
  AUX: "auxiliary",
  CCONJ: "coordinating conjunction",
  DET: "determiner",
  INTJ: "interjection",
  NOUN: "noun",
  NUM: "numeral",
  PART: "particle",
  PRON: "pronoun",
  PROPN: "proper noun",
  PUNCT: "punctuation",
  SCONJ: "subordinating conjunction",
  SYM: "symbol",
  VERB: "verb",
  X: "other",
};

const POS_DESCRIPTION_ES = {
  ADJ: "adjetivo : Describen características o cualidades de un sustantivo.",
  ADP: "adposición : Introducen elementos relacionales, como preposiciones y postposiciones.",
  ADV: "adverbio : Modifican verbos, adjetivos u otros adverbios para indicar circunstancias o detalles.",
  AUX: "auxiliar : Ayudan a formar los tiempos verbales compuestos y las formas interrogativas y negativas de los verbos.",
  CCONJ:
    "conjunción coordinante : Unen palabras o grupos de palabras de igual importancia en una oración.",
  DET: "determinante : Acompañan a los sustantivos para proporcionar información adicional sobre ellos.",
  INTJ: "interjección : Expresan emociones o sentimientos y no tienen una función gramatical específica en la oración.",
  NOUN: "sustantivo : Nombran personas, lugares, cosas o ideas.",
  NUM: "numeral : Representan números y pueden indicar cantidad, orden, o medida.",
  PART: "partícula : Palabras cortas que no encajan completamente en ninguna otra categoría gramatical.",
  PRON: "pronombre : Sustituyen o representan a un sustantivo específico en una oración.",
  PROPN:
    "nombre propio : Se utilizan para nombrar a personas, lugares o cosas específicas con nombres propios.",
  PUNCT:
    "puntuación : Signos gráficos que indican la estructura y organización de un texto.",
  SCONJ:
    "conjunción subordinante : Unen oraciones o elementos de una oración, estableciendo relaciones de subordinación.",
  SYM: "símbolo : Representan símbolos, signos o caracteres especiales.",
  VERB: "verbo : Expresan acciones, procesos o estados, y constituyen el núcleo de la oración.",
  X: "otro : Categoría para palabras o elementos que no encajan en ninguna otra categoría gramatical.",
};

const POS_DESCRIPTION_DE = {
  ADJ: "Adjektiv : Beschreiben Merkmale oder Eigenschaften eines Substantivs.",
  ADP: "Präposition : Einführung relationaler Elemente wie Präpositionen und Postpositionen.",
  ADV: "Adverb : Modifizieren Verben, Adjektive oder andere Adverbien, um Umstände oder Details anzuzeigen.",
  AUX: "Hilfsverb : Helfen bei der Bildung von zusammengesetzten Zeitformen sowie bei der Bildung von Fragen und Verneinungen von Verben.",
  CCONJ:
    "koordinierende Konjunktion : Verbinden Wörter oder Wortgruppen gleicher Bedeutung in einem Satz.",
  DET: "Determinierer : Begleiten Substantive, um zusätzliche Informationen über sie bereitzustellen.",
  INTJ: "Interjektion : Ausdruck von Emotionen oder Gefühlen ohne eine spezifische grammatische Funktion im Satz.",
  NOUN: "Substantiv : Benennen Personen, Orte, Dinge oder Ideen.",
  NUM: "Numeral : Repräsentieren Zahlen und können Menge, Reihenfolge oder Maß angeben.",
  PART: "Partikel : Kurze Wörter, die nicht vollständig in eine andere grammatikalische Kategorie passen.",
  PRON: "Pronomen : Ersetzen oder repräsentieren ein bestimmtes Substantiv in einem Satz.",
  PROPN:
    "Eigenname : Werden verwendet, um bestimmte Personen, Orte oder Dinge mit Eigennamen zu benennen.",
  PUNCT:
    "Interpunktion : Grafische Zeichen, die die Struktur und Organisation eines Textes anzeigen.",
  SCONJ:
    "unterordnende Konjunktion : Verbinden Sätze oder Elemente eines Satzes und etablieren Unterordnungsbeziehungen.",
  SYM: "Symbol : Repräsentieren Symbole, Zeichen oder besondere Zeichen.",
  VERB: "Verb : Drücken Handlungen, Prozesse oder Zustände aus und bilden den Kern des Satzes.",
  X: "andere : Kategorie für Wörter oder Elemente, die in keine andere grammatikalische Kategorie passen.",
};

const POS_DESCRIPTION_EN = {
  ADJ: "Adjective : Describe characteristics or qualities of a noun.",
  ADP: "Adposition : Introduce relational elements, such as prepositions and postpositions.",
  ADV: "Adverb : Modify verbs, adjectives, or other adverbs to indicate circumstances or details.",
  AUX: "Auxiliary : Help form compound verb tenses and the interrogative and negative forms of verbs.",
  CCONJ:
    "Coordinating conjunction : Connect words or groups of words of equal importance in a sentence.",
  DET: "Determiner : Accompany nouns to provide additional information about them.",
  INTJ: "Interjection : Express emotions or feelings and do not have a specific grammatical function in the sentence.",
  NOUN: "Noun : Name people, places, things, or ideas.",
  NUM: "Numeral : Represent numbers and can indicate quantity, order, or measurement.",
  PART: "Particle : Short words that do not fit entirely into any other grammatical category.",
  PRON: "Pronoun : Substitute or represent a specific noun in a sentence.",
  PROPN:
    "Proper noun : Used to name specific persons, places, or things with proper names.",
  PUNCT:
    "Punctuation : Graphical signs that indicate the structure and organization of a text.",
  SCONJ:
    "Subordinating conjunction : Connect clauses or elements of a sentence, establishing subordinate relationships.",
  SYM: "Symbol : Represent symbols, signs, or special characters.",
  VERB: "Verb : Express actions, processes, or states, and constitute the core of the sentence.",
  X: "Other : Category for words or elements that do not fit into any other grammatical category.",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _available = {
  POS_ES,
  POS_DE,
  POS_EN,
  POS_DESCRIPTION_ES,
  POS_DESCRIPTION_DE,
  POS_DESCRIPTION_EN,
};

export default {
  es: POS_ES,
  de: POS_DE,
  en: POS_EN,
};

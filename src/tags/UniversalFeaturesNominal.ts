const Animacy = {
  description:
    "A lexical or inflectional feature indicating the semantic property of animacy.",
  values: {
    Anim: "Animate",
    Hum: "Human",
    Inan: "Inanimate",
    Nhum: "Non-human",
  },
  additionalInfo:
    "Animacy is a lexical or inflectional feature indicating the semantic property of animacy.",
  Descriptions: {
    Anim: "Animate includes human beings, animals, fictional characters, names of professions, etc.",
    Hum: "Human includes only human beings.",
    Inan: "Inanimate includes nouns that are not animate.",
    Nhum: "Non-human includes non-human animates, while Inan is used for inanimates.",
  },
};

const Gender = {
  description:
    "A lexical or inflectional feature of nouns and other parts of speech.",
  values: {
    Com: "Common",
    Fem: "Feminine",
    Masc: "Masculine",
    Neut: "Neuter",
  },
  additionalInfo:
    "Gender is usually a lexical feature of nouns and inflectional feature of other parts of speech that mark agreement with nouns.",
  Descriptions: {
    Com: "Common gender is used in languages that don't distinguish masculine/feminine but distinguish neuter vs. non-neuter.",
    Fem: "Feminine gender is used for nouns denoting female persons or grammatically feminine objects.",
    Masc: "Masculine gender is used for nouns denoting male persons or grammatically masculine objects.",
    Neut: "Neuter gender is used for nouns that are neither masculine nor feminine.",
  },
};

const NounClass = {
  Bantu: {
    Bantu1: { singular: "persons", plural: "persons" },
    Bantu2: { singular: "plants", plural: "plants" },
    Bantu3: { singular: "fruits", plural: "fruits" },
    Bantu4: { singular: "things", plural: "things" },
    Bantu5: { singular: "animals", plural: "animals" },
    Bantu6: { singular: "no clear semantics", plural: "no clear semantics" },
    Bantu7: { singular: "long thin objects", plural: "no clear semantics" },
    Bantu8: { singular: "small things", plural: "mass, small amount of mass" },
    Bantu9: { singular: "animals, things", plural: "animals, things" },
    Bantu10: { singular: "animals, things", plural: "animals, things" },
    Bantu11: { singular: "no clear semantics", plural: "no clear semantics" },
    Bantu12: {
      singular: "small things, diminutives",
      plural: "small amount of mass",
    },
    Bantu13: {
      singular: "small amount of mass",
      plural: "small amount of mass",
    },
    Bantu14: { singular: "diminutives", plural: "diminutives" },
    Bantu15: {
      singular: "verbal nouns, infinitives",
      plural: "verbal nouns, infinitives",
    },
    Bantu16: {
      singular: "definite location, close to something",
      plural: "definite location, close to something",
    },
    Bantu17: {
      singular: "indefinite location or directive meaning",
      plural: "indefinite location or directive meaning",
    },
    Bantu18: {
      singular: "definite location, inside something",
      plural: "definite location, inside something",
    },
    Bantu19: {
      singular: "little bit of, pejorative plural",
      plural: "little bit of, pejorative plural",
    },
    Bantu20: { singular: "augmentatives", plural: "augmentatives" },
    Bantu21: {
      singular: "augmentatives, derogatives",
      plural: "augmentatives, derogatives",
    },
    Bantu22: { singular: "augmentatives", plural: "augmentatives" },
    Bantu23: {
      singular: "location with place names",
      plural: "location with place names",
    },
  },
  Wolof: {
    Wol1: { singular: "singular human", plural: "plural human" },
    Wol2: { singular: "singular", plural: "singular" },
    Wol3: { singular: "singular", plural: "singular" },
    Wol4: { singular: "singular", plural: "singular" },
    Wol5: { singular: "singular", plural: "singular" },
    Wol6: { singular: "singular", plural: "singular" },
    Wol7: { singular: "plural non-human", plural: "plural non-human" },
    Wol8: { singular: "singular", plural: "singular" },
    Wol9: { singular: "singular", plural: "singular" },
    Wol10: { singular: "location", plural: "manner" },
    Wol11: { singular: "manner", plural: "manner" },
    Wol12: { singular: "manner", plural: "manner" },
  },
  additionalInfo:
    "NounClass is a lexical category of nouns and other parts of speech inflecting for agreement.",
};

const Number = {
  description:
    "An inflectional feature indicating the grammatical number of nouns and other parts of speech.",
  values: {
    Coll: "Collective",
    Count: "Count",
    Dual: "Dual",
    Grpa: "Greater paucal",
    Grpl: "Greater plural",
    Inv: "Inverse",
    Pauc: "Paucal",
    Plur: "Plural",
    Ptan: "Plurale tantum",
    Sing: "Singular",
    Tri: "Trial",
  },
  additionalInfo:
    "Number is an inflectional feature indicating the grammatical number of nouns and other parts of speech.",
  Descriptions: {
    Coll: "Collective denotes sets of objects using grammatical singular.",
    Count:
      "Count is a special plural form used after numerals in some languages.",
    Dual: "Dual number denotes two persons, animals, or things.",
    Grpa: "Greater paucal number denotes 'more than several but not many' persons, animals, or things.",
    Grpl: "Greater plural number denotes 'many, all possible' persons, animals, or things.",
    Inv: "Inverse number means non-default for that particular noun. Occurs e.g., in Kiowa.",
    Pauc: "Paucal number denotes 'a few' persons, animals, or things.",
    Plur: "Plural number denotes several persons, animals, or things.",
    Ptan: "Plurale tantum denotes nouns that appear only in the plural form even though they denote one thing (semantic singular).",
    Sing: "Singular number denotes one person, animal, or thing.",
    Tri: "Trial number denotes three persons, animals, or things. Occurs in pronouns of several Austronesian languages, such as Biak.",
  },
};

const Case = {
  description:
    "Case is usually an inflectional feature of nouns and, depending on language, other parts of speech (pronouns, adjectives, determiners, numerals, verbs) that mark agreement with nouns.",
  values: {
    Core: {
      Abs: "Absolutive",
      Acc: "Accusative",
      Erg: "Ergative",
      Nom: "Nominative",
    },
    "Non-core": {
      Abe: "Abessive",
      Ben: "Benefactive",
      Cau: "Causative",
      Cmp: "Comparative",
      Cns: "Considerative",
      Com: "Comitative",
      Dat: "Dative",
      Dis: "Distributive",
      Equ: "Equative",
      Gen: "Genitive",
      Ins: "Instrumental",
      Par: "Partitive",
      Tem: "Temporal",
      Tra: "Translative",
      Voc: "Vocative",
    },
    Local: {
      Abl: "Ablative",
      Add: "Additive",
      Ade: "Adessive",
      All: "Allative",
      Del: "Delative",
      Ela: "Elative",
      Ill: "Illative",
      Ine: "Inessive",
      Lat: "Lative",
      Loc: "Locative",
      Per: "Perlative",
      Sub: "Subessive",
      Sup: "Superessive",
      Sbe: "Subelative",
      Spl: "Superlative",
      Tem: "Temporal",
    },
    Ter: "Terminative",
  },
  additionalInfo:
    "Case can also be a lexical feature of adpositions and describe the case meaning that the adposition contributes to the nominal in which it appears.",
};

const Definite = {
  description:
    "Definiteness is typically a feature of nouns, adjectives, and articles. Its value distinguishes whether we are talking about something known and concrete, or something general or unknown. It can be marked on definite and indefinite articles, or directly on nouns, adjectives, etc. In Arabic, definiteness is also called the 'state'.",
  values: {
    Ind: "Indefinite",
    Spec: "Specific Indefinite",
    Def: "Definite",
    Cons: "Construct State / Reduced Definiteness",
    Com: "Complex",
  },
  additionalInfo:
    "Used in improper annexation in Arabic. The genitive construction described above normally consists of two nouns (first reduced, second genitive). That is called proper annexation or iḍāfa. If the first member is an adjective or adjectivally used participle and the second member is a definite noun, the construction is called improper annexation or false iḍāfa. The result is a compound adjective that is usually used as an attributive adjunct and thus must agree in definiteness with the noun it modifies. Its first part (the adjective or participle) may get again the definite article.",
};

const Deixis = {
  description:
    "Deixis is typically a feature of demonstrative pronouns, determiners, and adverbs. Its value classifies the location of the referred entity with respect to the location of the speaker or of the hearer. The common distinction is distance (proximate vs. remote entities); in some languages, elevation is distinguished as well (e.g., the entity is located higher or lower than the speaker).",
  values: {
    Abv: "Above Reference Point",
    Bel: "Below Reference Point",
    Even: "At the Same Level",
    Med: "Medial",
    Nvis: "Not Visible",
    Prox: "Proximate",
    Remt: "Remote",
  },
  additionalInfo:
    "If it is necessary to distinguish the person whose location is the reference point (speaker or hearer), the feature DeixisRef can be used in addition to Deixis. DeixisRef is not needed if all deictic expressions in the language are relative to the same person (probably the speaker).",
};

const DeixisRef = {
  DeixisRef: {
    description:
      "DeixisRef is a feature of demonstrative pronouns, determiners, and adverbs, accompanying Deixis when necessary. Deixis encodes the position of an entity relative to either the speaker or the hearer. If it is necessary to distinguish the person whose location is the reference point (speaker or hearer), DeixisRef is used. DeixisRef is not needed if all deictic expressions in the language are relative to the same person (probably the speaker), or if they do not distinguish the reference point.",
    values: {
      "1": "Speaker",
      "2": "Hearer",
    },
  },
};

const Degree = {
  description:
    "Degree of comparison is typically an inflectional feature of some adjectives and adverbs. A different flavor of degree is diminutives and augmentatives, which often apply to nouns but are not restricted to them.",
  values: {
    Abs: "Absolute Superlative",
    Aug: "Augmentative",
    Cmp: "Comparative",
    Dim: "Diminutive",
    Equ: "Equative",
    Pos: "Positive",
    Sup: "Superlative",
  },
  additionalInfo:
    "Pos: positive, first degree - This is the base form that merely states a quality of something, without comparing it to qualities of others. Note that although this degree is traditionally called 'positive,' negative properties can be compared, too.",
};

const Nominal = {
  Gender,
  Animacy,
  NounClass,
  Number,
  Case,
  Definite,
  Deixis,
  DeixisRef,
  Degree,
};

export default Nominal;

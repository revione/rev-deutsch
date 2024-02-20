const PronType = {
  description: "Pronominal type",
  values: {
    Art: "Article",
    Dem: "Demonstrative",
    Emp: "Emphatic",
    Exc: "Exclamative",
    Ind: "Indefinite",
    Int: "Interrogative",
    Neg: "Negative",
    Prs: "Personal",
    Rcp: "Reciprocal",
    Rel: "Relative",
    Tot: "Total (Collective)",
  },
  additionalInfo:
    "This feature typically applies to pronouns, pronominal adjectives (determiners), pronominal numerals (quantifiers) and pronominal adverbs.",
  Descriptions: {
    Prs: "Personal or possessive personal pronoun or determiner. Note that Prs also includes reflexive personal/possessive pronouns.",
    Rcp: "Reciprocal pronoun. Used for pronouns that are specifically reciprocal.",
    Art: "Article. Special case of determiner that bears the feature of definiteness.",
    Int: "Interrogative pronoun, determiner, numeral or adverb. Possessive interrogative determiners can be distinguished by the Poss feature.",
    Rel: "Relative pronoun, determiner, numeral or adverb. In some languages, relative pronouns are distinct from interrogatives.",
    Exc: "Exclamative determiner. Expresses the speaker’s surprise towards the modified noun.",
    Dem: "Demonstrative pronoun, determiner, numeral or adverb. Often parallel to interrogatives.",
    Emp: "Emphatic determiner. Emphasizes the nominal they depend on.",
    Tot: "Total (Collective) pronoun, determiner or adverb.",
    Neg: "Negative pronoun, determiner or adverb. Distinguished from negating particles and words that inflect for polarity.",
    Ind: "Indefinite pronoun, determiner, numeral or adverb. Some tagsets might subclassify this category further.",
  },
};

const NumType = {
  description: "Numeral type",
  values: {
    Card: "Cardinal",
    Dist: "Distributive",
    Frac: "Fraction",
    Mult: "Multiplicative",
    Ord: "Ordinal",
    Range: "Range",
    Sets: "Sets",
  },
  additionalInfo:
    "This feature typically applies to numerals, quantifiers, definite adjectival/ adverbial numerals, and certain subtypes like fraction, sets, distributive, and range.",
  Descriptions: {
    Card: "Cardinal number or corresponding interrogative/ relative/ indefinite/ demonstrative word.",
    Ord: "Ordinal number or corresponding interrogative/ relative/ indefinite/ demonstrative word.",
    Mult: "Multiplicative numeral or corresponding interrogative/ relative/ indefinite/ demonstrative word.",
    Frac: "Fraction. This is a subtype of cardinal numbers, occasionally distinguished in corpora.",
    Sets: "Number of sets of things. Collective numeral.",
    Dist: "Distributive numeral. Used to express that the same quantity is distributed to each member in a set of targets.",
    Range:
      "Range of values. This could be considered a subtype of cardinal numbers, occasionally distinguished in corpora.",
  },
};

const POSS = {
  description: "Possessive",
  values: {
    Yes: "Yes",
  },
  additionalInfo:
    "Boolean feature of pronouns, determiners, or adjectives. It tells whether the word is possessive.",
  Descriptions: {
    Yes: "It is possessive.",
  },
};

const Reflex = {
  description: "Reflexive",
  values: {
    Yes: "Yes",
  },
  additionalInfo:
    "Boolean feature, typically of pronouns or determiners. It tells whether the word is reflexive, i.e. refers to the subject of its clause.",
  Descriptions: {
    Yes: "It is reflexive.",
  },
};

const Foreign = {
  description: "Is this a foreign word?",
  values: {
    Yes: "Yes",
  },
  additionalInfo:
    "Boolean feature. Is this a foreign word? Not a loan word and not a foreign name but a genuinely foreign word appearing inside native text, e.g. inside direct speech, titles of books etc. This feature would apply either to the X part of speech (unanalyzable token), or to other parts of speech if we know and are willing to annotate the class to which the word belongs in its original language.",
  Descriptions: {
    Yes: "It is foreign.",
  },
};

const Abbr = {
  description: "Abbreviation",
  values: {
    Yes: "Yes",
  },
  additionalInfo:
    "Boolean feature. Is this an abbreviation? Note that the abbreviated word(s) typically belong to a part of speech other than X.",
  Descriptions: {
    Yes: "It is an abbreviation.",
  },
};

const Typo = {
  description: "Is this a misspelled word?",
  values: {
    Yes: "Yes",
  },
  additionalInfo:
    "Indicates an erroneous or typographically unexpected word form. Most unexpected spellings are typographical errors (inadvertent on the part of the author). Also unexpected: creatively using special characters or spaces for visual effect; or unusual character encoding. For transcribed speech, no distinction is made between the original speaker and the transcriber, so a mispronunciation like shilly for silly is also treated like a typo.",
  Descriptions: {
    Yes: "It is a typo.",
  },
};

const Nominal = {
  PronType,
  NumType,
  POSS,
  Reflex,
  Foreign,
  Abbr,
  Typo,
};

export default Nominal;

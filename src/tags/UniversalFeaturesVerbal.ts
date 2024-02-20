const VerbForm = {
  description: "Form of verb or deverbative",
  values: {
    Conv: "Converb",
    Fin: "Finite verb",
    Gdv: "Gerundive",
    Ger: "Gerund",
    Inf: "Infinitive",
    Part: "Participle",
    Sup: "Supine",
    Vnoun: "Verbal noun",
  },
  additionalInfo:
    "Even though the name of the feature seems to suggest that it is used exclusively with verbs, it is not the case. Some verb forms in some languages actually form a gray zone between verbs and other parts of speech (nouns, adjectives, and adverbs). For instance, participles may be either classified as verbs or as adjectives, depending on language and context. In both cases VerbForm=Part may be used to separate them from other verb forms or other types of adjectives.",
  Descriptions: {
    Conv: [
      "Converb, transgressive, adverbial participle, verbal adverb",
      "Converb, also called adverbial participle or transgressive, is a non-finite verb form that shares properties of verbs and adverbs. It appears e.g. in Slavic and Indo-Aryan languages.",
    ],
    Fin: "Finite verb. Rule of thumb: if it has non-empty Mood, it is finite. But beware that some tagsets conflate verb forms and moods into one feature.",
    Inf: "Infinitive is the citation form of verbs in many languages. Unlike in English, it often has morphological form that is distinct from the finite forms. Infinitives may be used together with auxiliaries to form periphrastic tenses (e.g., future tense [cs] budu sedět v letadle “I will sit in a plane”), they appear as arguments of modal verbs, etc.",
    Sup: "Supine is a rare verb form. It survives in some Slavic languages (Slovenian) and is used instead of infinitive as the argument of motion verbs (old [cs] jdu spat lit. I-go sleep). A form called 'supine' also exists in Swedish where it is a special form of the participle, used to form the composite past form of a verb.",
    Part: "Participle is a non-finite verb form that shares properties of verbs and adjectives. Its usage varies across languages. It may be used to form various periphrastic verb forms such as complex tenses and passives; it may be also used purely adjectively. Other features may help to distinguish past/present participles (English), active/passive participles (Czech), imperfect/perfect participles (Hindi) etc.",
    Gdv: "Gerundive. Used in Latin and Ancient Greek. Not to confuse with gerund.",
    Ger: "Gerund. Using VerbForm=Ger is discouraged and alternatives should be considered first. The feature may be removed in future versions but comprehensive investigation has to be done first.",
    Vnoun:
      "Verbal noun, masdar. Verbal nouns other than infinitives. Also called masdars by some authors.",
  },
};
const Mood = {
  description:
    "Mood is a feature that expresses modality and subclassifies finite verb forms.",
  values: {
    Adm: "Admirative",
    Cnd: "Conditional",
    Des: "Desiderative",
    Imp: "Imperative",
    Ind: "Indicative or realis",
    Int: "Interrogative",
    Irr: "Irrealis",
    Jus: "Jussive or injunctive",
    Nec: "Necessitative",
    Opt: "Optative",
    Pot: "Potential",
    Prp: "Purposive",
    Qot: "Quotative",
    Sub: "Subjunctive or conjunctive",
  },
  additionalInfo:
    "Mood is a feature that expresses modality and subclassifies finite verb forms.",
  Descriptions: {
    Adm: "Expresses surprise, irony or doubt. Occurs in Albanian, other Balkan languages, and in Caddo (Native American from Oklahoma).",
    Cnd: "The conditional mood is used to express actions that would have taken place under some circumstances but they actually did not / do not happen. Grammars of some languages may classify conditional as tense (rather than mood) but e.g. in Czech it combines with two different tenses (past and present).",
    Des: "The desiderative mood corresponds to the modal verb 'want to': 'He wants to come.' Used e.g. in Japanese or Turkish.",
    Imp: "The speaker uses imperative to order or ask the addressee to do the action of the verb.",
    Ind: "The indicative can be considered the default mood. A verb in indicative merely states that something happens, has happened or will happen, without adding any attitude of the speaker.",
    Int: "Verbs in some languages have a special interrogative form that is used in yes-no questions.",
    Irr: "The irrealis mood denotes an action that is not known to have happened. As such, it is a roof term for a group of more specific moods such as conditional, potential, or desiderative.",
    Jus: "The jussive mood expresses the desire that the action happens; it is thus close to both imperative and optative. Unlike in desiderative, it is the speaker, not the subject who wishes that it happens.",
    Nec: "The necessitative mood expresses necessity and corresponds to the modal verbs 'must, should, have to': 'He must come.'",
    Opt: "Expresses exclamations like 'May you have a long life!' or 'If only I were rich!' In Turkish it also expresses suggestions. In Sanskrit it may express possibility (cf. the potential mood in other languages).",
    Pot: "The action of the verb is possible but not certain. This mood corresponds to the modal verbs can, might, be able to. Used e.g. in Finnish. See also the optative.",
    Prp: "Means 'in order to', occurs in Amazonian and Australian languages, such as Arabana.",
    Qot: "The quotative mood is used e.g. in Estonian to denote direct speech. The boundary between this mood and the non-first-hand Evidentiality is blurred.",
    Sub: "The subjunctive mood is used under certain circumstances in subordinate clauses, typically for actions that are subjective or otherwise uncertain. In German, it may be also used to convey the conditional meaning.",
  },
};

const Tense = {
  description:
    "A feature of verbs that expresses the time at, during, or by which an action or state is described to have occurred.",
  values: {
    Fut: "Future",
    Imp: "Imperfect",
    Pqp: "Pluperfect",
    Praet: "Past (historical) tense",
    Pres: "Present",
  },
  additionalInfo:
    "Tense is a feature of verbs that expresses the time at, during, or by which an action or state is described to have occurred. Different languages may have different tenses and may use them in different ways.",
  Descriptions: {
    Fut: "Future tense indicates that the action or state described by the verb will happen in the future.",
    Imp: "Imperfect tense is used to describe an ongoing action or state in the past.",
    Pqp: "Pluperfect tense indicates an action or state completed before some point in the past.",
    Praet:
      "Past (historical) tense is used to describe an action or state that occurred in the past.",
    Pres: "Present tense indicates that the action or state described by the verb is occurring at the present moment.",
  },
};

const Aspect = {
  description:
    "A feature of verbs that expresses how an action, event, or state unfolds over time.",
  values: {
    Hab: "Habitual aspect",
    Imp: "Imperfective aspect",
    Perf: "Perfective aspect",
    Prog: "Progressive aspect",
  },
  additionalInfo:
    "Aspect is a feature of verbs that expresses how an action, event, or state unfolds over time. Different languages may have different aspects and may use them in different ways.",
  Descriptions: {
    Hab: "Habitual aspect indicates that an action, event, or state is a habitual or regular occurrence.",
    Imp: "Imperfective aspect describes an ongoing, habitual, or repeated action, event, or state.",
    Perf: "Perfective aspect indicates that an action, event, or state is viewed as a completed whole, without focus on the internal temporal structure.",
    Prog: "Progressive aspect indicates that an action, event, or state is ongoing or in progress at the reference point in time.",
  },
};

const Voice = {
  description:
    "A feature of verbs that expresses the relationship between the action or state described by the verb and the participants identified by the verb's arguments.",
  values: {
    Act: "Active voice",
    Antip: "Antipassive voice",
    Cau: "Causative voice",
    Mid: "Middle voice",
    Pass: "Passive voice",
    Rcp: "Reciprocal voice",
    Rfl: "Reflexive voice",
  },
  additionalInfo:
    "Voice is a feature of verbs that expresses the relationship between the action or state described by the verb and the participants identified by the verb's arguments. It indicates whether the subject of the verb performs the action (active voice), receives the action (passive voice), etc.",
  Descriptions: {
    Act: "Active voice indicates that the subject of the verb performs the action.",
    Antip:
      "Antipassive voice is a type of voice where the verb does not explicitly mark the direct object. Instead, it focuses on the subject and the relationship between the subject and the action.",
    Cau: "Causative voice indicates that the subject of the verb causes someone or something else to perform the action.",
    Mid: "Middle voice is a type of voice where the subject of the verb participates in the action or undergoes a change of state.",
    Pass: "Passive voice indicates that the subject of the verb receives the action rather than performing it.",
    Rcp: "Reciprocal voice indicates that the action involves mutual interaction or exchange between two or more participants.",
    Rfl: "Reflexive voice indicates that the subject and the object of the verb refer to the same participant, often reflecting an action performed by the subject on itself.",
  },
};

const Evident = {
  description:
    "A feature of verbs that indicates the source or manner of the speaker's knowledge about the reported action or event.",
  values: {
    Fh: "Firsthand",
    Hr: "Hearsay",
    Incl: "Inclusive",
    Nfh: "Non-firsthand",
  },
  additionalInfo:
    "Evident is a feature of verbs that indicates the source or manner of the speaker's knowledge about the reported action or event. It distinguishes between information obtained firsthand, hearsay, inclusive knowledge, and non-firsthand information.",
  Descriptions: {
    Fh: "Firsthand indicates that the speaker has direct, firsthand knowledge of the reported action or event.",
    Hr: "Hearsay indicates that the speaker learned about the reported action or event from someone else and did not witness it directly.",
    Incl: "Inclusive indicates that the speaker includes themselves as a participant or observer in the reported action or event.",
    Nfh: "Non-firsthand indicates that the speaker's knowledge about the reported action or event is not obtained firsthand.",
  },
};

const Polarity = {
  description:
    "A feature that expresses whether a word or phrase is positive, negative, or neutral in meaning.",
  values: {
    Neg: "Negative",
    Pos: "Positive",
  },
  additionalInfo:
    "Polarity is a feature that expresses whether a word or phrase is positive, negative, or neutral in meaning. It is often applied to verbs, adjectives, and adverbs.",
  Descriptions: {
    Neg: "Negative indicates that the word or phrase conveys a negative meaning, expressing denial or opposition.",
    Pos: "Positive indicates that the word or phrase conveys a positive meaning, affirming or asserting something.",
  },
};

const Person = {
  description:
    "A feature of pronouns and verbs that expresses the participant's involvement in the speech event.",
  values: {
    0: "Zero person",
    1: "First person",
    2: "Second person",
    3: "Third person",
  },
  additionalInfo:
    "Person is a feature of pronouns and verbs that expresses the participant's involvement in the speech event. It distinguishes between the speaker, the addressee, and others mentioned or implied.",
  Descriptions: {
    0: "Zero person indicates the absence of a participant involved in the speech event. It is often used in impersonal constructions.",
    1: "First person indicates the participant or participants involved in the speech event, typically including the speaker.",
    2: "Second person indicates the participant or participants being addressed in the speech event.",
    3: "Third person indicates participant or participants other than the speaker or addressee in the speech event.",
  },
};

const Polite = {
  description:
    "A feature of pronouns and verbs that indicates politeness level or formality.",
  values: {
    Elev: "Elevated or formal",
    Form: "Formal",
    Hum: "Humble",
    Infm: "Informal",
  },
  additionalInfo:
    "Polite is a feature of pronouns and verbs that indicates politeness level or formality. It is often used to express respect or social distance between participants in the speech event.",
  Descriptions: {
    Elev: "Elevated or formal indicates a high level of politeness or formality in addressing others. It is often used in official or ceremonial contexts.",
    Form: "Formal indicates a polite or formal style of communication. It may involve specific pronouns, verb forms, or honorifics.",
    Hum: "Humble indicates a humble or deferential style of communication. It is often used to show respect towards others, especially in some East Asian languages.",
    Infm: "Informal indicates an informal or casual style of communication, often used in familiar or friendly contexts.",
  },
};

const Clusivity = {
  description:
    "A feature of pronouns that indicates whether the pronoun includes or excludes the addressee.",
  values: {
    Ex: "Exclusive",
    In: "Inclusive",
  },
  additionalInfo:
    "Clusivity is a feature of pronouns that indicates whether the pronoun includes or excludes the addressee. It is often found in first-person plural pronouns.",
  Descriptions: {
    Ex: "Exclusive indicates that the pronoun refers to a group that excludes the addressee. It includes the speaker and others but not the person being addressed.",
    In: "Inclusive indicates that the pronoun refers to a group that includes the addressee. It includes the speaker, the person being addressed, and others.",
  },
};

const Verbal = {
  VerbForm,
  Mood,
  Tense,
  Aspect,
  Voice,
  Evident,
  Polarity,
  Person,
  Polite,
  Clusivity,
};

export default Verbal;

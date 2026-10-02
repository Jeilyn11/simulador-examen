// questions.js
const allQuestions = [
  {
    "id": 1,
    "question": "Choose the correct verb form to complete the sentence:\nShe ________ to the gym every morning before work.",
    "options": {
      "a": "go",
      "b": "goes",
      "c": "going",
      "d": "gone"
    },
    "answer": "b",
    "explanation": "Third-person singular present simple requires 'goes'."
  },
  {
    "id": 2,
    "question": "Which of the following sentences is in the Present Perfect tense?",
    "options": {
      "a": "I went to the store yesterday.",
      "b": "I am going to the store.",
      "c": "I have gone to the store.",
      "d": "I will go to the store."
    },
    "answer": "c",
    "explanation": "Present Perfect is formed using have/has + past participle ('have gone')."
  },
  {
    "id": 3,
    "question": "Select the correct conditional structure:\nIf it rains tomorrow, we ________ the event.",
    "options": {
      "a": "cancel",
      "b": "will cancel",
      "c": "would cancel",
      "d": "canceled"
    },
    "answer": "b",
    "explanation": "First conditional uses Present Simple in the 'if' clause and 'will + verb' in the main clause."
  },
  {
    "id": 4,
    "question": "What is the synonym of 'meticulous'?",
    "options": {
      "a": "Careless",
      "b": "Thorough",
      "c": "Rapid",
      "d": "Vague"
    },
    "answer": "b",
    "explanation": "Meticulous means showing great attention to detail; very careful and precise (thorough)."
  },
  {
    "id": 5,
    "question": "Choose the correct preposition:\nHe is responsible ________ managing the software development team.",
    "options": {
      "a": "for",
      "b": "of",
      "c": "with",
      "d": "about"
    },
    "answer": "a",
    "explanation": "The adjective 'responsible' takes the preposition 'for'."
  },
  {
    "id": 6,
    "question": "Identify the part of speech of the word 'quickly' in: 'He ran quickly to catch the bus.'",
    "options": {
      "a": "Adjective",
      "b": "Noun",
      "c": "Adverb",
      "d": "Preposition"
    },
    "answer": "c",
    "explanation": "'Quickly' modifies the verb 'ran', making it an adverb."
  },
  {
    "id": 7,
    "question": "Select the correct passive voice transformation:\n'The mechanics fixed the car.'",
    "options": {
      "a": "The car was fixed by the mechanics.",
      "b": "The car is fixed by the mechanics.",
      "c": "The car fixed the mechanics.",
      "d": "The car has been fixed by the mechanics."
    },
    "answer": "a",
    "explanation": "Past simple passive is formed using was/were + past participle."
  },
  {
    "id": 8,
    "question": "Which word is an antonym for 'candid'?",
    "options": {
      "a": "Honest",
      "b": "Frank",
      "c": "Deceitful",
      "d": "Direct"
    },
    "answer": "c",
    "explanation": "Candid means truthful and straightforward; its antonym is deceitful."
  },
  {
    "id": 9,
    "question": "Choose the correct relative pronoun:\nThe professor ________ lecture I attended was extremely insightful.",
    "options": {
      "a": "who",
      "b": "whom",
      "c": "whose",
      "d": "which"
    },
    "answer": "c",
    "explanation": "'Whose' indicates possession (the lecture of the professor)."
  },
  {
    "id": 10,
    "question": "What is the meaning of the idiom 'burn the midnight oil'?",
    "options": {
      "a": "To waste energy",
      "b": "To work late into the night",
      "c": "To start a fire accidentally",
      "d": "To wake up early"
    },
    "answer": "b",
    "explanation": "'Burn the midnight oil' means to study or work late into the night."
  },
  {
    "id": 11,
    "question": "Which approach to language teaching emphasizes learning through physical action?",
    "options": {
      "a": "Grammar-Translation Method",
      "b": "Total Physical Response (TPR)",
      "c": "Audio-Lingual Method",
      "d": "Silent Way"
    },
    "answer": "b",
    "explanation": "Total Physical Response coordinates language learning with physical movement."
  },
  {
    "id": 12,
    "question": "Select the sentence with correct subject-verb agreement:",
    "options": {
      "a": "Neither of the options are correct.",
      "b": "Neither of the options is correct.",
      "c": "Neither of the options were correct.",
      "d": "Neither of the options be correct."
    },
    "answer": "b",
    "explanation": "'Neither' is singular and requires the singular verb 'is'."
  },
  {
    "id": 13,
    "question": "In SLA (Second Language Acquisition), what does Krashen's 'i+1' refer to?",
    "options": {
      "a": "Individual + 1 peer",
      "b": "Input + 1 level above current competence",
      "c": "Instruction + 1 exam",
      "d": "Intention + 1 goal"
    },
    "answer": "b",
    "explanation": "Comprehensible input (i+1) represents input just beyond the learner's current stage of competence."
  },
  {
    "id": 14,
    "question": "What is a 'minimal pair' in phonology?",
    "options": {
      "a": "Two words that rhyme exactly.",
      "b": "Two words differing by only one phoneme (e.g., 'pat' and 'bat').",
      "c": "Two identical words used together.",
      "d": "Two syllables in a single word."
    },
    "answer": "b",
    "explanation": "Minimal pairs differ by a single phonemic sound in the same position."
  },
  {
    "id": 15,
    "question": "Identify the error: 'He don't like to eat vegetables.'",
    "options": {
      "a": "Error in preposition",
      "b": "Error in subject-verb agreement ('don't' should be 'doesn't')",
      "c": "Error in article usage",
      "d": "Error in verb tense"
    },
    "answer": "b",
    "explanation": "Third-person singular 'He' requires 'doesn't' instead of 'don't'."
  },
  {
    "id": 16,
    "question": "What is the primary focus of Task-Based Language Teaching (TBLT)?",
    "options": {
      "a": "Memorization of structural patterns",
      "b": "Completion of meaningful real-world tasks",
      "c": "Explicit translation of texts",
      "d": "Phonetic transcription exercises"
    },
    "answer": "b",
    "explanation": "TBLT centers instruction around authentic, goal-oriented communication tasks."
  },
  {
    "id": 17,
    "question": "Choose the correct modal verb:\nYou ________ bring an umbrella; it looks like it's going to rain.",
    "options": {
      "a": "should",
      "b": "would",
      "c": "must to",
      "d": "might to"
    },
    "answer": "a",
    "explanation": "'Should' is used to offer advice or recommendation."
  },
  {
    "id": 18,
    "question": "What is a diphthong?",
    "options": {
      "a": "A silent consonant letter.",
      "b": "A sound formed by the combination of two vowels in a single syllable.",
      "c": "A double consonant sound.",
      "d": "A word with two meanings."
    },
    "answer": "b",
    "explanation": "A diphthong involves a glide from one vowel quality to another within the same syllable."
  },
  {
    "id": 19,
    "question": "Which reading strategy involves searching a text for specific information (e.g., dates, names)?",
    "options": {
      "a": "Skimming",
      "b": "Scanning",
      "c": "Critical reading",
      "d": "Extensive reading"
    },
    "answer": "b",
    "explanation": "Scanning involves looking through a text rapidly to locate specific facts or details."
  },
  {
    "id": 20,
    "question": "Select the correct word form:\nHis ________ performance earned him a standing ovation.",
    "options": {
      "a": "impress",
      "b": "impression",
      "c": "impressive",
      "d": "impressively"
    },
    "answer": "c",
    "explanation": "An adjective ('impressive') is required to modify the noun 'performance'."
  },
  {
    "id": 21,
    "question": "In sociolinguistics, what is 'code-switching'?",
    "options": {
      "a": "Translating written legal documents.",
      "b": "Alternating between two or more languages in a conversation.",
      "c": "Creating a new alphabet.",
      "d": "Changing hand gestures during speech."
    },
    "answer": "b",
    "explanation": "Code-switching refers to switching between languages or dialects within a single discourse."
  },
  {
    "id": 22,
    "question": "Choose the correct sentence structure:",
    "options": {
      "a": "Seldom I have seen such dedication.",
      "b": "Seldom have I seen such dedication.",
      "c": "Seldom I had seen such dedication.",
      "d": "Seldom saw I such dedication."
    },
    "answer": "b",
    "explanation": "Negative adverbials placed at the beginning of a sentence trigger subject-auxiliary inversion."
  },
  {
    "id": 23,
    "question": "What is an example of formative assessment?",
    "options": {
      "a": "Final university entrance exam",
      "b": "Mid-term standardized test",
      "c": "Ongoing teacher feedback during group discussions",
      "d": "End-of-course diploma exam"
    },
    "answer": "c",
    "explanation": "Formative assessment provides ongoing diagnostic feedback during the learning process."
  },
  {
    "id": 24,
    "question": "What is the function of syntax in linguistics?",
    "options": {
      "a": "To study sound production in the throat.",
      "b": "To govern the structure and order of words in sentences.",
      "c": "To explore the origin of ancient words.",
      "d": "To analyze tone and pitch."
    },
    "answer": "b",
    "explanation": "Syntax studies the rules and patterns governing how words combine into phrases and sentences."
  },
  {
    "id": 25,
    "question": "Choose the correct reporting verb usage:\nShe ________ him to lock the door before leaving.",
    "options": {
      "a": "said",
      "b": "told",
      "c": "explained",
      "d": "suggested"
    },
    "answer": "b",
    "explanation": "'Tell' is followed by a direct object + infinitive structure ('told him to lock')."
  },
  {
    "id": 26,
    "question": "What is an affricate consonant sound?",
    "options": {
      "a": "A sound produced with no blockage of air.",
      "b": "A stop consonant followed immediately by a fricative sound.",
      "c": "A nasal sound like /m/.",
      "d": "A sound produced solely by lip movement."
    },
    "answer": "b",
    "explanation": "Affricates combine a stop release with a friction sound (e.g., /tʃ/ in 'chair')."
  },
  {
    "id": 27,
    "question": "Which assessment type measures a student's performance against a pre-determined standard?",
    "options": {
      "a": "Norm-referenced assessment",
      "b": "Criterion-referenced assessment",
      "c": "Aptitude test",
      "d": "Diagnostic survey"
    },
    "answer": "b",
    "explanation": "Criterion-referenced tests evaluate learning against fixed performance benchmarks."
  },
  {
    "id": 28,
    "question": "Complete the sentence with the correct third conditional form:\nIf I ________ studied harder, I would have passed the exam.",
    "options": {
      "a": "have",
      "b": "had",
      "c": "would have",
      "d": "was"
    },
    "answer": "b",
    "explanation": "Third conditional 'if' clauses require the past perfect tense ('had + past participle')."
  },
  {
    "id": 29,
    "question": "What does the term 'pragmatics' study?",
    "options": {
      "a": "The physical characteristics of speech sounds.",
      "b": "How context contributes to sentence meaning.",
      "c": "The internal morphological structure of nouns.",
      "d": "Historical language evolution."
    },
    "answer": "b",
    "explanation": "Pragmatics focuses on how context affects the interpretation of meaning."
  },
  {
    "id": 30,
    "question": "Which suffix converts the verb 'create' into a noun?",
    "options": {
      "a": "-ive",
      "b": "-tion",
      "c": "-ly",
      "d": "-able"
    },
    "answer": "b",
    "explanation": "Adding '-tion' creates the noun 'creation'."
  },
  {
    "id": 31,
    "question": "Identify the passive form of: 'They are constructing a new highway.'",
    "options": {
      "a": "A new highway was constructed.",
      "b": "A new highway is being constructed.",
      "c": "A new highway has been constructed.",
      "d": "A new highway is constructing."
    },
    "answer": "b",
    "explanation": "Present continuous passive uses is/are + being + past participle."
  },
  {
    "id": 32,
    "question": "What is 'interlanguage' in SLA?",
    "options": {
      "a": "A formal international language like Esperanto.",
      "b": "The dynamic linguistic system developed by a second language learner.",
      "c": "A translation dictionary.",
      "d": "Language used strictly between native speakers."
    },
    "answer": "b",
    "explanation": "Interlanguage is the learner's developing L2 system, situated between L1 and target language."
  },
  {
    "id": 33,
    "question": "Select the sentence containing a gerund:",
    "options": {
      "a": "She is running in the park right now.",
      "b": "Swimming is excellent exercise for health.",
      "c": "They will be arriving soon.",
      "d": "He was eating dinner when I called."
    },
    "answer": "b",
    "explanation": "'Swimming' functions as a noun subject, making it a gerund."
  },
  {
    "id": 34,
    "question": "What is the main characteristic of the Audio-Lingual Method?",
    "options": {
      "a": "Heavy translation exercises",
      "b": "Repetitive drills and habit formation",
      "c": "Self-directed student exploration",
      "d": "Focus on written literature"
    },
    "answer": "b",
    "explanation": "Audio-Lingualism relies heavily on behaviorist drill-and-practice patterns."
  },
  {
    "id": 35,
    "question": "Choose the correctly spelled word:",
    "options": {
      "a": "Accomodate",
      "b": "Acommodate",
      "c": "Accommodate",
      "d": "Acomodate"
    },
    "answer": "c",
    "explanation": "'Accommodate' has double 'c' and double 'm'."
  },
  {
    "id": 36,
    "question": "What does a 'lexical item' refer to?",
    "options": {
      "a": "Only individual single words",
      "b": "A single word or sequence of words that forms a fundamental unit of vocabulary",
      "c": "A punctuation mark",
      "d": "A paragraph heading"
    },
    "answer": "b",
    "explanation": "Lexical items include words, phrasal verbs, idioms, and fixed expressions."
  },
  {
    "id": 37,
    "question": "Choose the correct form to express regret about past actions:\nI wish I ________ more time studying for that test.",
    "options": {
      "a": "spent",
      "b": "had spent",
      "c": "have spent",
      "d": "would spend"
    },
    "answer": "b",
    "explanation": "'Wish' + Past Perfect expresses regret about a past situation."
  },
  {
    "id": 38,
    "question": "Which organ is considered a passive articulator in speech production?",
    "options": {
      "a": "Tongue tip",
      "b": "Lower lip",
      "c": "Upper teeth",
      "d": "Uvula"
    },
    "answer": "c",
    "explanation": "Upper teeth remain fixed during sound creation, making them passive articulators."
  },
  {
    "id": 39,
    "question": "What is the defining feature of 'scaffolding' in educational theory?",
    "options": {
      "a": "Leaving students entirely on their own to solve problems",
      "b": "Temporary support given by a teacher/peer to enable learning",
      "c": "Testing students at the start of every week",
      "d": "Using rigid physical desks in rows"
    },
    "answer": "b",
    "explanation": "Scaffolding provides instructional support that is gradually removed as autonomy increases."
  },
  {
    "id": 40,
    "question": "Choose the sentence with correct punctuation:",
    "options": {
      "a": "Although it was cold; we went for a long walk.",
      "b": "Although it was cold, we went for a long walk.",
      "c": "Although, it was cold we went for a long walk.",
      "d": "Although it was cold we went, for a long walk."
    },
    "answer": "b",
    "explanation": "A dependent clause starting a sentence is followed by a comma."
  },
  {
    "id": 41,
    "question": "Which term describes words that sound identical but differ in spelling and meaning?",
    "options": {
      "a": "Homographs",
      "b": "Homophones",
      "c": "Synonyms",
      "d": "Antonyms"
    },
    "answer": "b",
    "explanation": "Homophones sound alike (e.g., 'their' and 'there') but have different meanings and spellings."
  },
  {
    "id": 42,
    "question": "What is 'Washback' (or Backwash) in educational testing?",
    "options": {
      "a": "Washing exam desks after testing",
      "b": "The impact that testing has on classroom teaching and learning",
      "c": "The speed at which tests are graded",
      "d": "Re-taking a failed exam"
    },
    "answer": "b",
    "explanation": "Washback describes how testing influences curriculum design and instructional methods."
  },
  {
    "id": 43,
    "question": "Select the correct compound word structure:",
    "options": {
      "a": "Sun-light",
      "b": "Sunlight",
      "c": "Sun light",
      "d": "Sunlighted"
    },
    "answer": "b",
    "explanation": "'Sunlight' is standardly written as a single closed compound noun."
  },
  {
    "id": 44,
    "question": "What is the main focus of Sociolinguistics?",
    "options": {
      "a": "The relationship between language and social factors",
      "b": "Mathematical modeling of sentence structure",
      "c": "Biological neural pathways of speech",
      "d": "Computer speech recognition software"
    },
    "answer": "a",
    "explanation": "Sociolinguistics examines language in relation to social class, gender, ethnicity, and culture."
  },
  {
    "id": 45,
    "question": "Which tense is used for an action completed before another past action?",
    "options": {
      "a": "Past Continuous",
      "b": "Past Perfect Simple",
      "c": "Present Perfect",
      "d": "Future Perfect"
    },
    "answer": "b",
    "explanation": "Past Perfect indicates an action completed prior to another time/action in the past."
  },
  {
    "id": 46,
    "question": "Choose the correct phrase to complete the sentence:\nShe is looking forward to ________ her new colleagues.",
    "options": {
      "a": "meet",
      "b": "meeting",
      "c": "met",
      "d": "be meet"
    },
    "answer": "b",
    "explanation": "The expression 'look forward to' is followed by a gerund (-ing form)."
  },
  {
    "id": 47,
    "question": "What is an example of a bound morpheme?",
    "options": {
      "a": "Dog",
      "b": "-un",
      "c": "Run",
      "d": "Blue"
    },
    "answer": "b",
    "explanation": "'-un' cannot stand alone as an independent word, making it a bound morpheme."
  },
  {
    "id": 48,
    "question": "Which methodology focuses on teaching content subjects (like science) through a second language?",
    "options": {
      "a": "CLIL (Content and Language Integrated Learning)",
      "b": "TPR",
      "c": "Direct Method",
      "d": "Grammar Translation"
    },
    "answer": "a",
    "explanation": "CLIL integrates subject matter instruction with second language learning goals."
  },
  {
    "id": 49,
    "question": "Select the sentence with an indirect question:",
    "options": {
      "a": "Where is the post office?",
      "b": "Could you tell me where the post office is?",
      "c": "Did you see the post office?",
      "d": "Is the post office open?"
    },
    "answer": "b",
    "explanation": "Indirect questions use statement word order and polite introductory phrases."
  },
  {
    "id": 50,
    "question": "What is the acoustic property related to speech sound frequency?",
    "options": {
      "a": "Volume",
      "b": "Pitch",
      "c": "Duration",
      "d": "Resonance"
    },
    "answer": "b",
    "explanation": "Pitch corresponds directly to the fundamental frequency of vocal fold vibration."
  },
  {
    "id": 51,
    "question": "Choose the correct quantifier:\nThere are ________ students in the library today.",
    "options": {
      "a": "much",
      "b": "a lot",
      "c": "many",
      "d": "every"
    },
    "answer": "c",
    "explanation": "'Many' is used with plural countable nouns like 'students'."
  },
  {
    "id": 52,
    "question": "What does Schema Theory suggest about reading comprehension?",
    "options": {
      "a": "Readers rely solely on letter recognition.",
      "b": "Prior knowledge and mental frameworks shape understanding.",
      "c": "Grammar rules are the only factors in reading.",
      "d": "Reading is purely an auditory exercise."
    },
    "answer": "b",
    "explanation": "Schema Theory posits that background knowledge structures guide comprehension."
  },
  {
    "id": 53,
    "question": "Identify the uncount noun:",
    "options": {
      "a": "Chair",
      "b": "Information",
      "c": "Book",
      "d": "Idea"
    },
    "answer": "b",
    "explanation": "'Information' is an uncountable noun in standard English."
  },
  {
    "id": 54,
    "question": "What is the primary function of an adjective clause?",
    "options": {
      "a": "To modify a verb",
      "b": "To modify a noun or pronoun",
      "c": "To connect two independent clauses",
      "d": "To act as the subject of a sentence"
    },
    "answer": "b",
    "explanation": "Adjective (relative) clauses function to describe or modify nouns/pronouns."
  },
  {
    "id": 55,
    "question": "Choose the correct comparative form:\nThis exercise is ________ than the previous one.",
    "options": {
      "a": "more easy",
      "b": "easier",
      "c": "easiest",
      "d": "more easier"
    },
    "answer": "b",
    "explanation": "Two-syllable adjectives ending in '-y' take '-ier' in comparative form."
  },
  {
    "id": 56,
    "question": "In SLA, what is 'fossilization'?",
    "options": {
      "a": "The loss of native language skills.",
      "b": "The cessation of interlanguage development before reaching native-like mastery.",
      "c": "Translating ancient texts.",
      "d": "Memorizing vocabulary rapidly."
    },
    "answer": "b",
    "explanation": "Fossilization occurs when non-target L2 forms become permanently fixed in a learner's interlanguage."
  },
  {
    "id": 57,
    "question": "Identify the type of sentence: 'Although it rained, we enjoyed the concert.'",
    "options": {
      "a": "Simple",
      "b": "Compound",
      "c": "Complex",
      "d": "Compound-Complex"
    },
    "answer": "c",
    "explanation": "A complex sentence contains one independent clause and at least one dependent clause."
  },
  {
    "id": 58,
    "question": "What is a major feature of the Direct Method of language teaching?",
    "options": {
      "a": "Extensive translation into L1",
      "b": "Exclusive use of the target language without translation",
      "c": "Explicit grammar rule teaching in native language",
      "d": "No speaking exercises"
    },
    "answer": "b",
    "explanation": "The Direct Method forbids L1 translation and relies exclusively on target language immersion."
  },
  {
    "id": 59,
    "question": "Select the phrase that contains an idiom:",
    "options": {
      "a": "She walked down the road.",
      "b": "It's piece of cake.",
      "c": "He read a long book.",
      "d": "They cooked dinner."
    },
    "answer": "b",
    "explanation": "'Piece of cake' is an idiomatic phrase meaning very easy."
  },
  {
    "id": 60,
    "question": "Which sound is a voiced bilabial stop?",
    "options": {
      "a": "/p/",
      "b": "/b/",
      "c": "/t/",
      "d": "/k/"
    },
    "answer": "b",
    "explanation": "/b/ is produced at both lips (bilabial), stops airflow (stop), and involves vocal cord vibration (voiced)."
  },
  {
    "id": 61,
    "question": "Choose the correct reflexive pronoun:\nHe repaired the bicycle ________.",
    "options": {
      "a": "himself",
      "b": "herself",
      "c": "itself",
      "d": "themselves"
    },
    "answer": "a",
    "explanation": "The masculine singular subject 'He' corresponds to 'himself'."
  },
  {
    "id": 62,
    "question": "What is the purpose of diagnostic testing?",
    "options": {
      "a": "To grade final achievements",
      "b": "To identify specific strengths and weaknesses before instruction",
      "c": "To rank students nationally",
      "d": "To test memory speed"
    },
    "answer": "b",
    "explanation": "Diagnostic tests identify specific learning needs and gaps prior to course design."
  },
  {
    "id": 63,
    "question": "Select the correct phrasal verb meaning 'to cancel':",
    "options": {
      "a": "Call off",
      "b": "Call on",
      "c": "Call up",
      "d": "Call out"
    },
    "answer": "a",
    "explanation": "'Call off' is a phrasal verb meaning to cancel an event or activity."
  },
  {
    "id": 64,
    "question": "What is 'intransitive verb'?",
    "options": {
      "a": "A verb that requires a direct object.",
      "b": "A verb that does not take a direct object.",
      "c": "A verb that always stays in present tense.",
      "d": "A helping auxiliary verb."
    },
    "answer": "b",
    "explanation": "Intransitive verbs (e.g., 'sleep', 'arrive') do not require a direct object."
  },
  {
    "id": 65,
    "question": "Choose the correct word order for adjectives:\nShe bought a ________ dress.",
    "options": {
      "a": "red silk beautiful",
      "b": "beautiful red silk",
      "c": "silk red beautiful",
      "d": "beautiful silk red"
    },
    "answer": "b",
    "explanation": "Adjective order generally follows: Opinion (beautiful) + Color (red) + Material (silk)."
  },
  {
    "id": 66,
    "question": "What is the Zone of Proximal Development (ZPD)?",
    "options": {
      "a": "The area where a student works without any assistance.",
      "b": "The distance between what a learner can do independently and with guidance.",
      "c": "A physical seating chart layout.",
      "d": "The time limit for taking exams."
    },
    "answer": "b",
    "explanation": "Vygotsky defined ZPD as the gap between independent problem solving and guided potential."
  },
  {
    "id": 67,
    "question": "Identify the sentence using the present continuous for future arrangements:",
    "options": {
      "a": "I study English every day.",
      "b": "I am meeting the manager tomorrow at 10 AM.",
      "c": "I have finished my homework.",
      "d": "I met him yesterday."
    },
    "answer": "b",
    "explanation": "Present continuous can express planned future events ('am meeting tomorrow')."
  },
  {
    "id": 68,
    "question": "What is 'lexical cohesion'?",
    "options": {
      "a": "Punctuation placement within sentences",
      "b": "The connections created in a text through word choices (repetition, synonyms, collocations)",
      "c": "The speed of speaking",
      "d": "Vocal pitch changes"
    },
    "answer": "b",
    "explanation": "Lexical cohesion involves textual ties achieved through vocabulary relations."
  },
  {
    "id": 69,
    "question": "Select the correct option to complete the phrase:\nHardly ________ entered the room when the phone rang.",
    "options": {
      "a": "I had",
      "b": "had I",
      "c": "I have",
      "d": "have I"
    },
    "answer": "b",
    "explanation": "'Hardly' at sentence start forces subject-verb inversion ('had I')."
  },
  {
    "id": 70,
    "question": "What is a 'fricative' sound?",
    "options": {
      "a": "A sound made by blocking air entirely.",
      "b": "A sound produced by forcing air through a narrow channel, creating friction.",
      "c": "A silent breath sound.",
      "d": "A sound made purely through nose airflow."
    },
    "answer": "b",
    "explanation": "Fricatives create continuous turbulent friction as air passes through a tight opening."
  },
  {
    "id": 71,
    "question": "Choose the option that represents an open class of words:",
    "options": {
      "a": "Prepositions",
      "b": "Nouns",
      "c": "Pronouns",
      "d": "Conjunctions"
    },
    "answer": "b",
    "explanation": "Nouns, verbs, adjectives, and adverbs readily accept new additions (open word class)."
  },
  {
    "id": 72,
    "question": "What is the purpose of an achievement test?",
    "options": {
      "a": "To predict future career success",
      "b": "To measure what has been learned over a specific period of instruction",
      "c": "To assess native language ability",
      "d": "To place students into proficiency levels"
    },
    "answer": "b",
    "explanation": "Achievement tests evaluate learning mastery relative to specific instructional units/curricula."
  },
  {
    "id": 73,
    "question": "Choose the sentence with correct verb pattern:\nThey agreed ________ the contract without further delay.",
    "options": {
      "a": "sign",
      "b": "signing",
      "c": "to sign",
      "d": "for signing"
    },
    "answer": "c",
    "explanation": "The verb 'agree' requires a full infinitive ('to sign')."
  },
  {
    "id": 74,
    "question": "In SLA, what does 'affective filter' refer to?",
    "options": {
      "a": "A physical filter used in speech recording",
      "b": "Emotional variables (anxiety, motivation, confidence) that impact learning",
      "c": "A technique for marking grammar tests",
      "d": "The rule system of native speakers"
    },
    "answer": "b",
    "explanation": "Krashen's Affective Filter hypothesis states that negative emotions block input processing."
  },
  {
    "id": 75,
    "question": "Select the correctly punctuated possessive form:",
    "options": {
      "a": "The childrens' toys",
      "b": "The children's toys",
      "c": "The childrens toys'",
      "d": "The childrens's toys"
    },
    "answer": "b",
    "explanation": "Irregular plural nouns not ending in 's' form possessive with `'s` ('children's')."
  },
  {
    "id": 76,
    "question": "What is the primary role of a 'facilitator' in a learner-centered classroom?",
    "options": {
      "a": "Lecturing continuously from the front",
      "b": "Guiding and supporting student-led learning activities",
      "c": "Strictly enforcing quiet discipline",
      "d": "Translating every sentence"
    },
    "answer": "b",
    "explanation": "A facilitator guides process and interaction rather than controlling all information delivery."
  },
  {
    "id": 77,
    "question": "Choose the sentence expressing past habit:",
    "options": {
      "a": "I used to play tennis every weekend.",
      "b": "I am used to playing tennis.",
      "c": "I use to play tennis.",
      "d": "I used playing tennis."
    },
    "answer": "a",
    "explanation": "'Used to + verb' denotes past habits or states no longer true in the present."
  },
  {
    "id": 78,
    "question": "What is 'phonemic awareness'?",
    "options": {
      "a": "Knowing the historical origin of words",
      "b": "The ability to hear, identify, and manipulate individual spoken sounds",
      "c": "Writing complete sentences grammatically",
      "d": "Reading aloud with speed"
    },
    "answer": "b",
    "explanation": "Phonemic awareness is the sub-skill of recognizing and working with individual phonemes in speech."
  },
  {
    "id": 79,
    "question": "Choose the word with a silent letter:",
    "options": {
      "a": "Desk",
      "b": "Knight",
      "c": "Camp",
      "d": "Fact"
    },
    "answer": "b",
    "explanation": "'Knight' has silent 'k' and 'gh'."
  },
  {
    "id": 80,
    "question": "What is the main advantage of authentic materials in language learning?",
    "options": {
      "a": "They contain no complex vocabulary.",
      "b": "They expose learners to real-world language used in genuine contexts.",
      "c": "They are specifically written to simplify grammar.",
      "d": "They always come with built-in translations."
    },
    "answer": "b",
    "explanation": "Authentic materials display real target language usage outside pedagogical simplification."
  },
  {
    "id": 81,
    "question": "Select the correct usage of 'used to' vs 'be used to':\nShe is from Canada, so she ________ cold weather.",
    "options": {
      "a": "used to",
      "b": "is used to",
      "c": "use to",
      "d": "was used"
    },
    "answer": "b",
    "explanation": "'Be used to + noun' means accustomed to something."
  },
  {
    "id": 82,
    "question": "What is 'error analysis' in linguistics?",
    "options": {
      "a": "Punishing students for mistakes",
      "b": "Studying learner errors to understand interlanguage development",
      "c": "Ignoring mistakes during instruction",
      "d": "Comparing grades across schools"
    },
    "answer": "b",
    "explanation": "Error Analysis investigates learner errors to gain insights into SLA mechanisms."
  },
  {
    "id": 83,
    "question": "Choose the correct sentence:",
    "options": {
      "a": "Either he or his brothers is going to attend.",
      "b": "Either he or his brothers are going to attend.",
      "c": "Either he or his brothers am going to attend.",
      "d": "Either he or his brothers be going to attend."
    },
    "answer": "b",
    "explanation": "When subjects are joined by 'either... or', the verb agrees with the subject closest to it ('brothers are')."
  },
  {
    "id": 84,
    "question": "What is the IPA symbol for the voiced dental fricative in 'this'?",
    "options": {
      "a": "/θ/",
      "b": "/ð/",
      "c": "/ʃ/",
      "d": "/ʒ/"
    },
    "answer": "b",
    "explanation": "The symbol /ð/ represents the voiced dental fricative (as in 'this', 'mother')."
  },
  {
    "id": 85,
    "question": "Which strategy involves predicting text content before reading based on titles and visuals?",
    "options": {
      "a": "Bottom-up processing",
      "b": "Top-down processing",
      "c": "Phonics decoding",
      "d": "Rote memorization"
    },
    "answer": "b",
    "explanation": "Top-down processing utilizes background knowledge, expectations, and context to construct meaning."
  },
  {
    "id": 86,
    "question": "Choose the correct expression of deduction in the past:\nHe ________ left his keys at home; he can't open the door.",
    "options": {
      "a": "must have",
      "b": "should have",
      "c": "might to",
      "d": "can have"
    },
    "answer": "a",
    "explanation": "'Must have + past participle' expresses logical certainty about a past event."
  },
  {
    "id": 87,
    "question": "What is 'collocation'?",
    "options": {
      "a": "Grammatical diagramming of sentences",
      "b": "The natural co-occurrence of words together in language",
      "c": "Spelling words backwards",
      "d": "Creating original rhyming words"
    },
    "answer": "b",
    "explanation": "Collocations are combinations of words that frequently occur together (e.g., 'make a decision')."
  },
  {
    "id": 88,
    "question": "Select the correct prefix to negate 'logical':",
    "options": {
      "a": "Un-",
      "b": "Dis-",
      "c": "Il-",
      "d": "Ir-"
    },
    "answer": "c",
    "explanation": "Words beginning with 'l' usually take the prefix 'il-' for negation ('illogical')."
  },
  {
    "id": 89,
    "question": "What is 'summative assessment'?",
    "options": {
      "a": "Assessment carried out continuously during a course",
      "b": "Assessment evaluating learning at the conclusion of an instructional period",
      "c": "Informal daily teacher observation",
      "d": "Self-reflection journaling"
    },
    "answer": "b",
    "explanation": "Summative assessment evaluates cumulative performance at the end of a unit or course."
  },
  {
    "id": 90,
    "question": "Choose the correct sentence in future perfect continuous:",
    "options": {
      "a": "By next month, I will study for two years.",
      "b": "By next month, I will have been studying for two years.",
      "c": "By next month, I am studying for two years.",
      "d": "By next month, I will be study for two years."
    },
    "answer": "b",
    "explanation": "Future perfect continuous uses will + have + been + verb-ing."
  },
  {
    "id": 91,
    "question": "What is the term for a variety of a language unique to a single individual?",
    "options": {
      "a": "Dialect",
      "b": "Sociolect",
      "c": "Idiolect",
      "d": "Accent"
    },
    "answer": "c",
    "explanation": "An idiolect is an individual's personal unique speech pattern and linguistic habit system."
  },
  {
    "id": 92,
    "question": "Select the correct form of inversion:\nOnly when the storm ended ________ able to leave.",
    "options": {
      "a": "we were",
      "b": "were we",
      "c": "we had been",
      "d": "did we"
    },
    "answer": "b",
    "explanation": "Restrictive expressions like 'Only when...' trigger inverted subject-verb order in the main clause."
  },
  {
    "id": 93,
    "question": "What is the focus of semantics?",
    "options": {
      "a": "Sentence sound stress",
      "b": "Linguistic meaning of words and sentences",
      "c": "Physical handwriting analysis",
      "d": "Speech speed"
    },
    "answer": "b",
    "explanation": "Semantics is the formal branch of linguistics devoted to literal and structural meaning."
  },
  {
    "id": 94,
    "question": "Choose the correct sentence:",
    "options": {
      "a": "I look forward to hear from you.",
      "b": "I look forward to hearing from you.",
      "c": "I look forward hearing from you.",
      "d": "I am looking forward hear from you."
    },
    "answer": "b",
    "explanation": "'Look forward to' requires a gerund object ('hearing')."
  },
  {
    "id": 95,
    "question": "Which methodology relies heavily on Cuisenaire rods and silent teacher gestures?",
    "options": {
      "a": "Total Physical Response",
      "b": "The Silent Way",
      "c": "Communicative Language Teaching",
      "d": "Community Language Learning"
    },
    "answer": "b",
    "explanation": "Caleb Gattegno developed The Silent Way using colored rods, charts, and teacher silence."
  },
  {
    "id": 96,
    "question": "Identify the non-finite verb in: 'She came to collect her prize.'",
    "options": {
      "a": "came",
      "b": "to collect",
      "c": "prize",
      "d": "She"
    },
    "answer": "b",
    "explanation": "Infinitive structures like 'to collect' are non-finite verb forms."
  },
  {
    "id": 97,
    "question": "What is the function of a diagnostic test?",
    "options": {
      "a": "To award end-of-year certificates",
      "b": "To pinpoint specific learning difficulties or knowledge gaps",
      "c": "To assess overall institutional quality",
      "d": "To test memory speed under pressure"
    },
    "answer": "b",
    "explanation": "Diagnostic testing identifies learning gaps to inform subsequent instructional planning."
  },
  {
    "id": 98,
    "question": "Choose the correct option:\nThe movie was ________ interest that everyone stayed until the very end.",
    "options": {
      "a": "so",
      "b": "such",
      "c": "of such",
      "d": "so much"
    },
    "answer": "c",
    "explanation": "'Of such interest' is a formal structure denoting degree leading to a result clause."
  },
  {
    "id": 99,
    "question": "What is a 'morpheme'?",
    "options": {
      "a": "A single spoken sound",
      "b": "The smallest meaningful unit in a language",
      "c": "A complete paragraph",
      "d": "A punctuation style"
    },
    "answer": "b",
    "explanation": "A morpheme cannot be divided into smaller meaningful linguistic parts."
  },
  {
    "id": 100,
    "question": "Identify the compound adjective in: 'She is a well-known author.'",
    "options": {
      "a": "well-known",
      "b": "author",
      "c": "is",
      "d": "She"
    },
    "answer": "a",
    "explanation": "'Well-known' is a hyphenated compound adjective modifying 'author'."
  },
  {
    "id": 101,
    "question": "Choose the correct phrase:\nIn spite ________ the heavy rain, they completed the marathon.",
    "options": {
      "a": "for",
      "b": "of",
      "c": "to",
      "d": "with"
    },
    "answer": "b",
    "explanation": "The prepositional expression is always 'in spite of'."
  },
  {
    "id": 102,
    "question": "What does 'extrinsic motivation' mean in education?",
    "options": {
      "a": "Motivation driven by internal enjoyment or curiosity",
      "b": "Motivation driven by external rewards or avoiding punishment",
      "c": "Lack of motivation entirely",
      "d": "Motivation resulting purely from subconscious thought"
    },
    "answer": "b",
    "explanation": "Extrinsic motivation stems from external factors like grades, money, or praise."
  },
  {
    "id": 103,
    "question": "Choose the correct verb form:\nBy the time we arrive, the concert ________.",
    "options": {
      "a": "will start",
      "b": "will have started",
      "c": "started",
      "d": "has started"
    },
    "answer": "b",
    "explanation": "Future perfect ('will have started') expresses an action completed prior to a future milestone."
  },
  {
    "id": 104,
    "question": "What is an 'allophone'?",
    "options": {
      "a": "A completely different word",
      "b": "A phonetic variant of a single phoneme that does not change word meaning",
      "c": "A dialect from another continent",
      "d": "A written symbol in an alphabet"
    },
    "answer": "b",
    "explanation": "Allophones are contextual variations in the pronunciation of a single phoneme."
  },
  {
    "id": 105,
    "question": "Select the correct third-person singular present form of 'catch':",
    "options": {
      "a": "catchs",
      "b": "catches",
      "c": "catchies",
      "d": "catching"
    },
    "answer": "b",
    "explanation": "Verbs ending in '-ch' add '-es' in third-person singular present simple."
  },
  {
    "id": 106,
    "question": "What is 'fluency' in language assessment?",
    "options": {
      "a": "Absolute total freedom from grammatical errors",
      "b": "The ability to speak or write smoothly, easily, and expressively",
      "c": "Knowing the complete historical roots of vocabulary",
      "d": "Writing rapidly in cursive"
    },
    "answer": "b",
    "explanation": "Fluency emphasizes smooth continuous flow and communication speed rather than perfect precision."
  },
  {
    "id": 107,
    "question": "Choose the correct sentence with a relative clause:",
    "options": {
      "a": "The book which you gave me is fascinating.",
      "b": "The book where you gave me is fascinating.",
      "c": "The book who you gave me is fascinating.",
      "d": "The book whom you gave me is fascinating."
    },
    "answer": "a",
    "explanation": "Inanimate objects like 'book' take the relative pronoun 'which' or 'that'."
  },
  {
    "id": 108,
    "question": "Which parameter is NOT used to describe English consonant production?",
    "options": {
      "a": "Place of articulation",
      "b": "Manner of articulation",
      "c": "Voicing",
      "d": "Lip rounding height index"
    },
    "answer": "d",
    "explanation": "Consonants are primarily classified by Place, Manner, and Voicing."
  },
  {
    "id": 109,
    "question": "Select the sentence containing a causative verb construction:",
    "options": {
      "a": "I painted my room yesterday.",
      "b": "I had my room painted yesterday.",
      "c": "My room was painted yesterday.",
      "d": "I will paint my room tomorrow."
    },
    "answer": "b",
    "explanation": "'Have something done' is a classic causative structure indicating arranging for someone else to perform an action."
  },
  {
    "id": 110,
    "question": "What is 'peer assessment'?",
    "options": {
      "a": "Evaluation conducted exclusively by the teacher",
      "b": "Evaluation of student work by fellow students",
      "c": "Evaluation of teachers by the principal",
      "d": "Parents grading homework"
    },
    "answer": "b",
    "explanation": "Peer assessment engages students in reviewing and assessing each other's work."
  },
  {
    "id": 111,
    "question": "Choose the correct conjunction:\nHe worked hard; ________, he passed the exam with top marks.",
    "options": {
      "a": "however",
      "b": "consequently",
      "c": "although",
      "d": "despite"
    },
    "answer": "b",
    "explanation": "'Consequently' shows a logical result/outcome of the preceding statement."
  },
  {
    "id": 112,
    "question": "What is 'anaphora' in text analysis?",
    "options": {
      "a": "Reference to something mentioned earlier in the text",
      "b": "Reference to something mentioned later in the text",
      "c": "A grammatical mistake in spelling",
      "d": "A physical speech impediment"
    },
    "answer": "a",
    "explanation": "Anaphoric reference points backward to an entity previously introduced in text/discourse."
  },
  {
    "id": 113,
    "question": "Identify the main clause in: 'When the bell rang, the students left.'",
    "options": {
      "a": "When the bell rang",
      "b": "the students left",
      "c": "the bell rang",
      "d": "rang the students"
    },
    "answer": "b",
    "explanation": "'The students left' can stand independently as a complete thought (main clause)."
  },
  {
    "id": 114,
    "question": "What is the primary objective of Communicative Language Teaching (CLT)?",
    "options": {
      "a": "Achieving communicative competence",
      "b": "Memorizing grammatical tables perfectly",
      "c": "Translating classic novels",
      "d": "Practicing isolated pronunciation drills"
    },
    "answer": "a",
    "explanation": "CLT aims fundamentally at developing functional communicative competence."
  },
  {
    "id": 115,
    "question": "Choose the correct word form:\nThe project ended in total ________.",
    "options": {
      "a": "fail",
      "b": "failure",
      "c": "failing",
      "d": "failed"
    },
    "answer": "b",
    "explanation": "The modifier 'total' requires the noun form 'failure'."
  },
  {
    "id": 116,
    "question": "What is an 'inflectional morpheme'?",
    "options": {
      "a": "A morpheme that creates a completely new word/meaning.",
      "b": "A suffix added to express grammatical relationships (e.g., plural '-s', past tense '-ed').",
      "c": "A prefix that negates a word.",
      "d": "A root word."
    },
    "answer": "b",
    "explanation": "Inflectional morphemes alter grammatical aspect/tense/number without changing word class or core meaning."
  },
  {
    "id": 117,
    "question": "Choose the correct modal of obligation:\nAll passengers ________ present their boarding passes prior to entry.",
    "options": {
      "a": "must",
      "b": "might",
      "c": "could",
      "d": "would"
    },
    "answer": "a",
    "explanation": "'Must' indicates strong objective requirement or official rule."
  },
  {
    "id": 118,
    "question": "What does the term 'L1 transfer' mean?",
    "options": {
      "a": "Moving to a new school district",
      "b": "The influence of a learner's native language on their second language acquisition",
      "c": "Translating a dictionary word for word",
      "d": "Forgetting one's first language"
    },
    "answer": "b",
    "explanation": "L1 transfer refers to applying native language patterns to target language production."
  },
  {
    "id": 119,
    "question": "Select the correct indirect speech form:\nDirect: 'I am tired,' he said.",
    "options": {
      "a": "He said that he is tired.",
      "b": "He said that he was tired.",
      "c": "He said that I was tired.",
      "d": "He told he was tired."
    },
    "answer": "b",
    "explanation": "In indirect speech, present simple shifts back to past simple ('was tired')."
  },
  {
    "id": 120,
    "question": "What is a 'nasal' consonant?",
    "options": {
      "a": "A sound produced with air escaping through the mouth only.",
      "b": "A sound produced with the velum lowered, allowing air to escape through the nose.",
      "c": "A sound made without vocal cord vibration.",
      "d": "A sound produced by clicking the tongue."
    },
    "answer": "b",
    "explanation": "Nasals (like /m/, /n/, /ŋ/) allow airflow through the nasal cavity."
  },
  {
    "id": 121,
    "question": "Choose the correct sentence:",
    "options": {
      "a": "Neither my manager nor my colleagues was present.",
      "b": "Neither my manager nor my colleagues were present.",
      "c": "Neither my manager nor my colleagues am present.",
      "d": "Neither my manager nor my colleagues be present."
    },
    "answer": "b",
    "explanation": "The verb agrees with the plural subject closest to it ('my colleagues were')."
  },
  {
    "id": 122,
    "question": "What is 'inductive grammar teaching'?",
    "options": {
      "a": "Presenting grammar rules first, followed by practice examples.",
      "b": "Providing examples first, allowing learners to infer the underlying rules.",
      "c": "Teaching grammar through native language translation only.",
      "d": "Avoiding grammar altogether."
    },
    "answer": "b",
    "explanation": "Inductive learning presents contextualized examples so students discover rules independently."
  },
  {
    "id": 123,
    "question": "Identify the word containing a diphthong:",
    "options": {
      "a": "Cat",
      "b": "Boy",
      "c": "Dog",
      "d": "Pen"
    },
    "answer": "b",
    "explanation": "'Boy' contains the diphthong /ɔɪ/."
  },
  {
    "id": 124,
    "question": "What is the function of a placement test?",
    "options": {
      "a": "To grade final graduation qualification",
      "b": "To sort students into appropriate instructional levels based on ability",
      "c": "To diagnose medical speech disorders",
      "d": "To evaluate teacher performance"
    },
    "answer": "b",
    "explanation": "Placement tests assign learners to suitable class levels according to current proficiency."
  },
  {
    "id": 125,
    "question": "Choose the correct form to complete the sentence:\nIf I ________ you, I would consult a professional.",
    "options": {
      "a": "was",
      "b": "were",
      "c": "am",
      "d": "have been"
    },
    "answer": "b",
    "explanation": "Second conditional hypothetical forms traditionally use the subjunctive 'were'."
  },
  {
    "id": 126,
    "question": "What is 'deductive grammar teaching'?",
    "options": {
      "a": "Explaining the rule explicitly before students practice examples.",
      "b": "Letting students guess rules from reading passages.",
      "c": "Teaching grammar purely through physical movements.",
      "d": "Translating sentences with no rules explained."
    },
    "answer": "a",
    "explanation": "Deductive instruction starts with explicit rule presentation followed by application exercises."
  },
  {
    "id": 127,
    "question": "Select the correct synonym for 'meticulous':",
    "options": {
      "a": "Painstaking",
      "b": "Hasty",
      "c": "Negligent",
      "d": "Superficial"
    },
    "answer": "a",
    "explanation": "'Painstaking' means showing diligent, precise, and careful effort."
  },
  {
    "id": 128,
    "question": "What is 'intonavigation' or 'intonation' in spoken language?",
    "options": {
      "a": "The speed of writing words",
      "b": "The variation of pitch while speaking to convey meaning or emotion",
      "c": "The length of sentences in a paragraph",
      "d": "The correct spelling of words"
    },
    "answer": "b",
    "explanation": "Intonation is the melodic pitch contour of speech used to express context, attitude, or sentence type."
  },
  {
    "id": 129,
    "question": "Choose the correct sentence:",
    "options": {
      "a": "She recommended that he attends the seminar.",
      "b": "She recommended that he attend the seminar.",
      "c": "She recommended that he will attend the seminar.",
      "d": "She recommended that he attended the seminar."
    },
    "answer": "b",
    "explanation": "The verb 'recommend' triggers a subjunctive structure using the base form of the verb ('attend')."
  },
  {
    "id": 130,
    "question": "What is 'validity' in assessment theory?",
    "options": {
      "a": "The consistency with which a test produces identical results",
      "b": "The degree to which a test measures what it claims to measure",
      "c": "The ease of printing the exam papers",
      "d": "The length of time students need to finish"
    },
    "answer": "b",
    "explanation": "Validity reflects how accurately an assessment evaluates the targeted domain or construct."
  },
  {
    "id": 131,
    "question": "Identify the word containing a prefix:",
    "options": {
      "a": "Unhappy",
      "b": "Happily",
      "c": "Happiness",
      "d": "Happy"
    },
    "answer": "a",
    "explanation": "'Unhappy' contains the negative prefix 'un-'."
  },
  {
    "id": 132,
    "question": "What is 'reliability' in assessment theory?",
    "options": {
      "a": "The extend to which a test measures real-world skills",
      "b": "The degree to which an assessment tool produces consistent results across administrations",
      "c": "The cost of test registration",
      "d": "The total page count of a test paper"
    },
    "answer": "b",
    "explanation": "Reliability indicates consistency and dependability of test measurement."
  },
  {
    "id": 133,
    "question": "Choose the correct verb tense form:\nI ________ for three hours when she finally arrived.",
    "options": {
      "a": "have waited",
      "b": "was waiting",
      "c": "had been waiting",
      "d": "am waiting"
    },
    "answer": "c",
    "explanation": "Past Perfect Continuous ('had been waiting') expresses an ongoing past action prior to another past moment."
  },
  {
    "id": 134,
    "question": "What is 'overgeneralization' in SLA?",
    "options": {
      "a": "Using a grammar rule in contexts where it does not apply (e.g., 'go' -> 'goed')",
      "b": "Learning words faster than normal",
      "c": "Forgetting vocabulary after an exam",
      "d": "Speaking with a strong native accent"
    },
    "answer": "a",
    "explanation": "Overgeneralization occurs when learners extend regular language rules to irregular exceptions."
  },
  {
    "id": 135,
    "question": "Select the sentence with a dangling modifier:",
    "options": {
      "a": "Walking down the street, the trees were beautiful.",
      "b": "Walking down the street, I admired the beautiful trees.",
      "c": "As I walked down the street, the trees looked beautiful.",
      "d": "I walked down the street and admired the trees."
    },
    "answer": "a",
    "explanation": "In (a), 'Walking down the street' illogically modifies 'the trees'."
  },
  {
    "id": 136,
    "question": "What is the study of language history and word origin called?",
    "options": {
      "a": "Phonology",
      "b": "Etymology",
      "c": "Syntax",
      "d": "Pragmatics"
    },
    "answer": "b",
    "explanation": "Etymology is the investigation of word origins and historical development."
  },
  {
    "id": 137,
    "question": "Choose the correct option:\nNo sooner ________ entered the room than the lights went out.",
    "options": {
      "a": "she had",
      "b": "had she",
      "c": "she has",
      "d": "did she"
    },
    "answer": "b",
    "explanation": "'No sooner' at sentence start requires subject-auxiliary inversion ('had she')."
  },
  {
    "id": 138,
    "question": "What is 'backchanneling' in spoken communication?",
    "options": {
      "a": "Interrupting the speaker aggressively",
      "b": "Short listener signals (e.g., 'uh-huh', 'yeah', nodding) showing active engagement",
      "c": "Talking behind someone's back",
      "d": "Changing the radio frequency"
    },
    "answer": "b",
    "explanation": "Backchannel signals provide continuous feedback to the speaker without taking the floor."
  },
  {
    "id": 139,
    "question": "Choose the correctly spelled option:",
    "options": {
      "a": "Recieve",
      "b": "Receive",
      "c": "Receeve",
      "d": "Recievee"
    },
    "answer": "b",
    "explanation": "Follows the rule 'i before e except after c' ('receive')."
  },
  {
    "id": 140,
    "question": "What is the primary role of 'DECE' in Ecuadorian educational institutions?",
    "options": {
      "a": "Managing financial accounting",
      "b": "Providing psychological and educational counseling and support",
      "c": "Directing English curriculum development",
      "d": "Evaluating physical infrastructure safety"
    },
    "answer": "b",
    "explanation": "DECE (Departamento de Consejería Estudiantil) offers psycho-educational guidance and support."
  },
  {
    "id": 141,
    "question": "Choose the correct phrase:\nHe succeeded ________ completing the project on schedule.",
    "options": {
      "a": "at",
      "b": "in",
      "c": "on",
      "d": "with"
    },
    "answer": "b",
    "explanation": "The verb 'succeed' takes the preposition 'in' + gerund."
  },
  {
    "id": 142,
    "question": "What is 'authentic assessment'?",
    "options": {
      "a": "Multiple choice tests scored by machine",
      "b": "Evaluating student learning through real-world, practical performance tasks",
      "c": "Standardized national exams",
      "d": "Translation dictation"
    },
    "answer": "b",
    "explanation": "Authentic assessment measures knowledge application in realistic contexts."
  },
  {
    "id": 143,
    "question": "Identify the word containing a schwa /ə/ sound:",
    "options": {
      "a": "About",
      "b": "Cat",
      "c": "See",
      "d": "Go"
    },
    "answer": "a",
    "explanation": "The unstressed initial syllable in 'about' is pronounced as a schwa /ə/."
  },
  {
    "id": 144,
    "question": "Choose the correct sentence:",
    "options": {
      "a": "The news are surprising.",
      "b": "The news is surprising.",
      "c": "The news were surprising.",
      "d": "The news be surprising."
    },
    "answer": "b",
    "explanation": "'News' is an uncountable noun and requires a singular verb ('is')."
  },
  {
    "id": 145,
    "question": "What is 'washback effect' in education?",
    "options": {
      "a": "The influence testing has on teaching and learning practices",
      "b": "Washing hands before class",
      "c": "The rate at which students forget information",
      "d": "Classroom cleaning protocols"
    },
    "answer": "a",
    "explanation": "Washback refers to the pedagogical consequences tests exert on teaching and study strategies."
  },
  {
    "id": 146,
    "question": "Select the sentence with a possessive adjective:",
    "options": {
      "a": "This car is mine.",
      "b": "This is my car.",
      "c": "The car belongs to me.",
      "d": "I bought this car."
    },
    "answer": "b",
    "explanation": "'My' is a possessive adjective modifying 'car'."
  },
  {
    "id": 147,
    "question": "What is a 'lexical chunk'?",
    "options": {
      "a": "An individual letter",
      "b": "A fixed or semi-fixed multi-word phrase learned as a single unit (e.g., 'by the way')",
      "c": "A entire textbook chapter",
      "d": "A paragraph break"
    },
    "answer": "b",
    "explanation": "Lexical chunks are pre-fabricated word groups stored and retrieved as single mental blocks."
  },
  {
    "id": 148,
    "question": "Choose the correct sentence structure:",
    "options": {
      "a": "She enjoys to play piano.",
      "b": "She enjoys playing the piano.",
      "c": "She enjoy playing piano.",
      "d": "She enjoys play the piano."
    },
    "answer": "b",
    "explanation": "'Enjoy' is followed by a gerund ('playing') and musical instruments take the article 'the'."
  },
  {
    "id": 149,
    "question": "What is 'UDAI' in the Ecuadorian inclusive education system?",
    "options": {
      "a": "Unidad de Apoyo a la Inclusión",
      "b": "Universidad Digital de Aprendizaje Inglés",
      "c": "Unión Docente de Acreditación Intercultural",
      "d": "Unidad Didáctica de Aprendizaje Integral"
    },
    "answer": "a",
    "explanation": "UDAI stands for Unidad de Apoyo a la Inclusión, providing specialized diagnostic support for SEN."
  },
  {
    "id": 150,
    "question": "Choose the correct tag question:\nYou haven't seen my keys, ________?",
    "options": {
      "a": "have you",
      "b": "haven't you",
      "c": "did you",
      "d": "didn't you"
    },
    "answer": "a",
    "explanation": "A negative main statement takes an affirmative tag question ('have you')."
  },
  {
    "id": 151,
    "question": "Andrea's friends were making too much noise late one night. Her father yelled at them and asked them to leave. Should he _________ (lose) his temper? How else could he ____________(respond)?",
    "options": {
      "a": "have lost / have responded",
      "b": "have loose / have responded",
      "c": "have loose / had respond",
      "d": "have loose / have respond"
    },
    "answer": "a",
    "explanation": "You can use would / should / could + have + past participle to talk hypothetically about the past. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 152,
    "question": "Choose the right option to complete the conversation:\nLuz: You know, I was upset that Cora didn't come to my party last month.\nJon: Yeah, I think I _________(would / be) upset, too.\nLuz: I was, but I guess I _______ (should / call) her to see if she was coming.\nJon: Maybe. But she still _______ (could / contact) you. Although maybe she was sick and couldn't call.",
    "options": {
      "a": "would have been/ should have called/ could have contacted",
      "b": "would have being / should have call / could have contact",
      "c": "would been / should call / could contact",
      "d": "would have been / should have called / could has contacted"
    },
    "answer": "a",
    "explanation": "You can use would / should / could + have + past participle to talk hypothetically about the past. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 153,
    "question": "Choose the right reported speech for the statement.\nSandy: I don’t have the right dress for the wedding yet. I think I am going to buy a new one.",
    "options": {
      "a": "She didn’t have the right dress for the wedding yet, she thought she was going go buy a new one.",
      "b": "She doesn’t have the right dress for the wedding yet, she thinks she is going go buy a new one.",
      "c": "She doesn’t have the right dress for the wedding yet, she thinks she is going go buy a new one.",
      "d": "She didn’t have the right dress for the wedding yet, she is thinking she was going go buy a new one."
    },
    "answer": "a",
    "explanation": "When you report the things people said, the verb tense often 'shifts back.' (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 154,
    "question": "Choose the right reported speech for the statement.\nCarla: I have a huge collection of shoes that I just don’t have room for.",
    "options": {
      "a": "She said she had a huge collection of shoes that she didn’t have room for.",
      "b": "She said she will have a huge collection of shoes that she didn’t have room for.",
      "c": "She said she has a huge collection of shoes that she didn’t have room for.",
      "d": "She said she had a huge collection of shoes that she won’t have room for."
    },
    "answer": "a",
    "explanation": "When you report the things people said, the verb tense often 'shifts back.' (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 155,
    "question": "Choose the right reported question for the question.\nMarker researcher: Can you stick to a monthly budget?",
    "options": {
      "a": "She asked me if I could stick to a monthly budget",
      "b": "She said if I could stick to a monthly budget.",
      "c": "She asked what I could stick to a monthly budget",
      "d": "She asked if I can stick to a monthly budget."
    },
    "answer": "a",
    "explanation": "When you report the things people ask, the verb tense often 'shifts back' and statement word order is used to make reported questions. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 156,
    "question": "Choose the right reported question for the question.\nMarket researcher: What is your main source of income?",
    "options": {
      "a": "She asked me what my main source of income was",
      "b": "She asked me what was my main source of income.",
      "c": "She asked me if what my main source of income is.",
      "d": "She asked me if my main source of income was."
    },
    "answer": "a",
    "explanation": "When you report the things people ask, the verb tense often 'shifts back' and statement word order is used to make reported questions. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 157,
    "question": "Choose the right option and the verb in parenthesis to complete hypothetically sentences about the past.\nIf he ______ (accept) the role, he _______ (become) famous.",
    "options": {
      "a": "had accepted / would have become",
      "b": "had accept / would have became",
      "c": "had accepted / have become",
      "d": "have accepted / would had become"
    },
    "answer": "a",
    "explanation": "You can use sentences with if to talk hypothetically about the past. Use the past perfect form in the if clause and a past modal in the main clause. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 158,
    "question": "Choose the right option and the verb in parenthesis to complete hypothetically sentences about the past.\nIf the actor _____ (attend) the award ceremony, he ____ (thank) his fans in person.",
    "options": {
      "a": "Had attended / would have thanked",
      "b": "Had attend / would thank",
      "c": "Had attend / would have thank",
      "d": "Had attended / would had thanked"
    },
    "answer": "a",
    "explanation": "You can use sentences with if to talk hypothetically about the past. Use the past perfect form in the if clause and a past modal in the main clause. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 159,
    "question": "Choose the right tag question for the statement.\nHe became a celebrity overnight, _____",
    "options": {
      "a": "Didn’t he?",
      "b": "Did he?",
      "c": "Will he?",
      "d": "Won’t he?"
    },
    "answer": "a",
    "explanation": "Tag questions are statements followed by short questions in the same tense. When the statements are affirmative, the tag questions are negative. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 160,
    "question": "Choose the right tag question for the statement.\nThey don’t enjoy being on the spotlight, _____",
    "options": {
      "a": "Do they?",
      "b": "Don’t they?",
      "c": "Did they?",
      "d": "Didn’t they?"
    },
    "answer": "a",
    "explanation": "Tag questions are statements followed by short questions in the same tense. When the statements are negative, the tag questions are affirmative. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 161,
    "question": "Choose the right option and the verb in parenthesis to complete future continuous and future perfect sentences.\nBy this time next year, she ________ (work) in the marketing department for over a decade.",
    "options": {
      "a": "will have been working",
      "b": "is working",
      "c": "has worked",
      "d": "will had working"
    },
    "answer": "a",
    "explanation": "The future perfect continuous is used for ongoing events that are in the past when you 'view' them from a point in the future. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 162,
    "question": "Choose the right option and the verb in parenthesis to complete future continuous and future perfect sentences.\nAt 9 a.m. tomorrow, the whole team ________ the new software system.",
    "options": {
      "a": "will be testing",
      "b": "is testing",
      "c": "will have tested",
      "d": "was testing."
    },
    "answer": "a",
    "explanation": "The future continuous is used for ongoing activities at a specific time in the future. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 163,
    "question": "Choose the right option and the verb in parenthesis to complete future continuous and future perfect sentences.\nBy the end of the week, the engineers ________ the final layout of the new workspace.",
    "options": {
      "a": "will have completed",
      "b": "are completing",
      "c": "will be completing",
      "d": "completed"
    },
    "answer": "a",
    "explanation": "The future perfect is used for events that will be completed before a specific time in the future. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 164,
    "question": "Choose the right phrase to link ideas to complete the sentences.\n_________ the governments’ efforts, pollution levels continue to rise.",
    "options": {
      "a": "Even though",
      "b": "Because of",
      "c": "As a result",
      "d": "Instead of"
    },
    "answer": "a",
    "explanation": "This word expresses contrast and is followed by a full clause (subject + verb). (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 165,
    "question": "Choose the right phrase to link ideas to complete the sentences.\n_____ the warming, people keep using plastic bags.",
    "options": {
      "a": "In spite of",
      "b": "Because of",
      "c": "As a result",
      "d": "Due to"
    },
    "answer": "a",
    "explanation": "This phrase expresses contrast and is followed by a noun phrase rather than a full clause. (McCarthy, McCarten, & Sandiford, 2015, Touchstone Student Book 4)"
  },
  {
    "id": 166,
    "question": "What is the main goal of didactics?",
    "options": {
      "a": "To measure student behavior",
      "b": "To entertain students with fun activities",
      "c": "To analyze how teaching leads to learning",
      "d": "To increase the number of assignments"
    },
    "answer": "c",
    "explanation": "Didactics studies the teaching–learning process. Its main goal is to understand how teaching actions produce learning. (Camilloni, A. R. W., 2007)"
  },
  {
    "id": 167,
    "question": "What does a didactic study include?",
    "options": {
      "a": "Analyzing how teaching leads to learning",
      "b": "Exclusive use of digital tools",
      "c": "Psychological evaluation of the student",
      "d": "Focus on teacher improvisation"
    },
    "answer": "a",
    "explanation": "A didactic study focuses on the relation between teaching and learning. Other aspects belong to different fields. (Zabalza, M. A., 2000)"
  },
  {
    "id": 168,
    "question": "What is the etymological origin of the word 'didactic'?",
    "options": {
      "a": "Latin: 'docere' and 'arte'",
      "b": "French: 'enseigner' and 'pédagogie'",
      "c": "German: 'lernen' and 'kunst'",
      "d": "Greek: ‘didaskein’ and ‘tekne’"
    },
    "answer": "d",
    "explanation": "The word comes from Greek: didaskein ('to teach') and tekne ('art/technique'), meaning the 'art of teaching.' (Reale, G., & Antiseri, D., 1991)"
  },
  {
    "id": 169,
    "question": "Which of the following is an example of didacticism?",
    "options": {
      "a": "A comedic play",
      "b": "A YouTube DIY tutorial",
      "c": "An action video game",
      "d": "A romantic poem"
    },
    "answer": "b",
    "explanation": "Didacticism means instruction with the explicit purpose of teaching. A tutorial teaches a skill. (Abrams, M. H., 1999)"
  },
  {
    "id": 170,
    "question": "What characterizes didactic teaching?",
    "options": {
      "a": "Unstructured open classes",
      "b": "Focus on autonomous learning",
      "c": "Structured lessons and periodic evaluations",
      "d": "Exclusive use of advanced technology"
    },
    "answer": "c",
    "explanation": "Didactic teaching is systematic and organized, including planning, clear steps, and evaluation. (Díaz Barriga, F., & Hernández, G., 2010)"
  },
  {
    "id": 171,
    "question": "Which is one of the didactic teaching strategies?",
    "options": {
      "a": "Modeling",
      "b": "Observation",
      "c": "Group collaboration",
      "d": "Visualization"
    },
    "answer": "a",
    "explanation": "Modeling means showing students how to do something so they can imitate it. It is a fundamental didactic strategy. (Bandura, A., 1977)"
  },
  {
    "id": 172,
    "question": "What is the main difference between didactics and pedagogy?",
    "options": {
      "a": "Pedagogy is older",
      "b": "Didactics is student-centered",
      "c": "Didactics is more theoretical",
      "d": "Didactics is teacher-centered"
    },
    "answer": "d",
    "explanation": "Pedagogy studies education broadly, while didactics emphasizes the teacher's direct role in transmitting knowledge. (Zabalza, M. A., 2000)"
  },
  {
    "id": 173,
    "question": "What is language?",
    "options": {
      "a": "It is based on signals, basically oral, a social product, conveys thought and is used for communication.",
      "b": "The way sounds are produced.",
      "c": "When the vocal cords produce voice.",
      "d": "The position of the soft palate."
    },
    "answer": "a",
    "explanation": "Language is a system of signs used for communication in a human society."
  },
  {
    "id": 174,
    "question": "The subject matter of Linguistics is:",
    "options": {
      "a": "Linguistics comprises all manifestations of human speech.",
      "b": "The way sounds are produced.",
      "c": "When the vocal cords produce voice.",
      "d": "The position of the soft palate."
    },
    "answer": "a",
    "explanation": "Linguistics deals with all human languages across all periods and cultures."
  },
  {
    "id": 175,
    "question": "What is dialect?",
    "options": {
      "a": "The relationship of linguistic signs that originally come from another language and, therefore, constitute a variety or variant of that language.",
      "b": "The most important variety in question not delimited geographically.",
      "c": "It is a separate language.",
      "d": "Dialects do not share the core structure of the main language."
    },
    "answer": "a",
    "explanation": "A dialect is a variety or modality of a language used in a given territory sharing a common origin. (Alvar, 1996; Moreno-Fernández, 2010)"
  },
  {
    "id": 176,
    "question": "Semiotics, also called Semiology is:",
    "options": {
      "a": "The study of signs (signified and signifier) and sign using behavior.",
      "b": "The way sounds are produced.",
      "c": "When the vocal cords produce voice.",
      "d": "The position of the soft palate."
    },
    "answer": "a",
    "explanation": "Semiotics is the study of sign systems and sign-using behavior (classified into icon, symbol, or index)."
  },
  {
    "id": 177,
    "question": "Noam Chomsky suggested the following:",
    "options": {
      "a": "There is no fundamental ability for language when a child is born.",
      "b": "Children acquire language in different ways and at different rates.",
      "c": "There is an innate human ability to acquire language.",
      "d": "Children learn language as the product of positive reinforcement."
    },
    "answer": "c",
    "explanation": "Chomsky proposed nativism, asserting that the human brain is innately predisposed for language acquisition."
  },
  {
    "id": 178,
    "question": "Synchronic linguistics task is:",
    "options": {
      "a": "To set up the fundamental principles of any idiosynchronic system at a given definite period of time.",
      "b": "Children acquire language in different ways and at different rates.",
      "c": "There is an innate human ability to acquire language.",
      "d": "Children learn language as the product of positive reinforcement."
    },
    "answer": "a",
    "explanation": "Synchronic linguistics studies language facts as they exist at a single specific point in time."
  },
  {
    "id": 179,
    "question": "Diachronic linguistics task is:",
    "options": {
      "a": "To study language evolution in a long period of time.",
      "b": "Children acquire language in different ways and at different rates.",
      "c": "There is an innate human ability to acquire language.",
      "d": "Children learn language as the product of positive reinforcement."
    },
    "answer": "a",
    "explanation": "Diachronic linguistics focuses on the historical evolution and changes of language over time."
  },
  {
    "id": 180,
    "question": "Which is not a sublevel of linguistic analysis?",
    "options": {
      "a": "Phonetics",
      "b": "Diachronic",
      "c": "Semantics",
      "d": "Morphology"
    },
    "answer": "b",
    "explanation": "Diachronic refers to an approach/perspective of study (over time), not a sublevel of structural analysis."
  },
  {
    "id": 181,
    "question": "Which of these terms refers to the functional study of speech sounds in a given language?",
    "options": {
      "a": "Phonetics",
      "b": "Phonology",
      "c": "Syntax",
      "d": "Morphology"
    },
    "answer": "b",
    "explanation": "Phonology deals with the abstract and functional organization of phonemes within a specific language."
  },
  {
    "id": 182,
    "question": "Which of these branches studies the meaning of words?",
    "options": {
      "a": "Morphemic",
      "b": "Phonetics",
      "c": "Semantics",
      "d": "Syntax"
    },
    "answer": "c",
    "explanation": "Semantics is the branch of linguistics devoted to studying word and sentence meaning."
  },
  {
    "id": 183,
    "question": "Which of these is not a type of linguistics?",
    "options": {
      "a": "Historical",
      "b": "Personal",
      "c": "Comparative",
      "d": "Synchronic"
    },
    "answer": "b",
    "explanation": "'Personal' is not a formal branch or classification type in linguistic science."
  },
  {
    "id": 184,
    "question": "What are the sublevels of the Morphosyntactical-grammatical level of linguistic analysis?",
    "options": {
      "a": "Phonetics and Phonology",
      "b": "Morphology and Syntax",
      "c": "Syntax and Phonetics",
      "d": "Phonetics and Morphology"
    },
    "answer": "b",
    "explanation": "This level consists of Morphology (internal word structure) and Syntax (sentence construction)."
  },
  {
    "id": 185,
    "question": "The concept and sound image respectively of the linguistic sign are:",
    "options": {
      "a": "The signified [signifié] and signifier [signifiant]",
      "b": "Syntax and Semantics",
      "c": "Syntax and Phonetics",
      "d": "Phonetics and Phonology"
    },
    "answer": "a",
    "explanation": "According to Saussure, the linguistic sign links a mental concept (signified) and a sound image (signifier)."
  },
  {
    "id": 186,
    "question": "Two main characteristics of the linguistic sign are:",
    "options": {
      "a": "The arbitrary and linear nature.",
      "b": "Syntax and Semantics",
      "c": "Syntax and Phonetics",
      "d": "Phonetics and Phonology"
    },
    "answer": "a",
    "explanation": "Arbitrariness and linearity are core characteristics defined by Saussure."
  },
  {
    "id": 187,
    "question": "Two main characteristics of the linguistic sign are:",
    "options": {
      "a": "The mutability and immutability.",
      "b": "Syntax and Semantics",
      "c": "Syntax and Phonetics",
      "d": "Phonetics and Phonology"
    },
    "answer": "a",
    "explanation": "Saussure noted that the linguistic sign is simultaneously immutable (fixed for current speakers) and mutable (changing over time)."
  },
  {
    "id": 188,
    "question": "What is the main purpose of inclusive education according to the Ecuadorian LOEI (Ley Orgánica de Educación Intercultural)?",
    "options": {
      "a": "To segregate students with SEN for developing new strategies.",
      "b": "To integrate only students with physical disabilities to regular system.",
      "c": "To guarantee equal access, and learning opportunities for all students.",
      "d": "To provide special schools for SEN learners in the mainstream system."
    },
    "answer": "c",
    "explanation": "LOEI guarantees equal access and learning opportunities for all learners within mainstream education. (Ministerio de Educación del Ecuador, 2011)"
  },
  {
    "id": 189,
    "question": "Select the right option that fits with the following description. This principle of Universal Design for Learning (UDL) is applied when a teacher uses videos, images, and audio recordings to teach vocabulary in English.",
    "options": {
      "a": "Representation.",
      "b": "Engagement.",
      "c": "Action and expression.",
      "d": "Evaluation."
    },
    "answer": "a",
    "explanation": "The Representation principle provides multiple ways of presenting information to support diverse learning styles. (MINEDUC, 2023)"
  },
  {
    "id": 190,
    "question": "Complete the statement. The document that establishes the institutional vision, mission, and inclusive policies of a school in Ecuador is ___________________.",
    "options": {
      "a": "DIAC",
      "b": "UDAI.",
      "c": "DECE.",
      "d": "PEI"
    },
    "answer": "d",
    "explanation": "The PEI (Proyecto Educativo Institucional) guides institutional vision and inclusive policies. (Vicepresidencia de la República del Ecuador, 2011)"
  },
  {
    "id": 191,
    "question": "Choose the option that is a non-significant curricular adaptation in English teaching.",
    "options": {
      "a": "Removing grammar content form the curriculum.",
      "b": "Providing extra visual aids and simplified instructions without altering objectives.",
      "c": "Eliminating oral exams from the evaluation system.",
      "d": "Modifying the expected learning outcomes in English language acquisition."
    },
    "answer": "b",
    "explanation": "Non-significant adaptations adjust methodologies or support tools without altering core learning goals. (MINEDUC, 2013)"
  },
  {
    "id": 192,
    "question": "What are significant curricular adaptations in English learning?",
    "options": {
      "a": "Adjustments that maintain the same goals but simplify instructions for learners.",
      "b": "The addition of extra materials without altering the evaluation in the teaching-learning process.",
      "c": "Changes that modify objectives, contents, and evaluations criteria activities to fit the student’s abilities.",
      "d": "Increased use of technology without modifying curricular elements in the teaching-learning process."
    },
    "answer": "c",
    "explanation": "Significant adaptations alter essential curricular elements like objectives, contents, and assessment criteria. (MINEDUC, 2013)"
  },
  {
    "id": 193,
    "question": "Read and choose the option that fits with the following statement. This principle of Universal Design for Learning is being applied when an English teacher offers students oral presentations, written essays, or digital storytelling, among others.",
    "options": {
      "a": "Evaluation",
      "b": "Engagement",
      "c": "Representation",
      "d": "Action and expression"
    },
    "answer": "d",
    "explanation": "Action and Expression offers learners multiple options to demonstrate what they know. (MINEDUC, 2023)"
  },
  {
    "id": 194,
    "question": "Select the right option that fits with the following description. This principle of Universal Design for learning is the reason for learning, so that students feel engages and motivated in the learning process by providing ways to capture attention with alternative pathways and strategies that respond to the student´s intra and inter-individual differences.",
    "options": {
      "a": "Engagement",
      "b": "Representation",
      "c": "Action and expression",
      "d": "Evaluation"
    },
    "answer": "a",
    "explanation": "Engagement focuses on motivation and tapping into learners' interests and internal drive. (MINEDUC, 2023)"
  },
  {
    "id": 195,
    "question": "Choose the option that belongs the following example: Offer various types of responses with alternatives in pace, time limit, and the action to be taken to answer the questions.",
    "options": {
      "a": "Engagement",
      "b": "Representation",
      "c": "Action and expression",
      "d": "Evaluation"
    },
    "answer": "c",
    "explanation": "Offering multiple methods for physical response and expression relates to Action and Expression. (MINEDUC, 2023)"
  },
  {
    "id": 196,
    "question": "Choose the correct option that fits with the following description. This approach allows successful learning for all students. It has allowed students to acquire information more effectively. It provides guidance to educators that is especially valuable for the diversity of classrooms and the diversity in modalities in learning.",
    "options": {
      "a": "PEI",
      "b": "DECE",
      "c": "CEPA",
      "d": "UDL"
    },
    "answer": "d",
    "explanation": "Universal Design for Learning (UDL) guides educators in addressing classroom diversity. (Levey, S., 2023)"
  },
  {
    "id": 197,
    "question": "How does Applied Behavior Analysis (ABA) contribute to inclusive English learning?",
    "options": {
      "a": "By focusing on punishment to reduce unwanted behaviors in SEN students.",
      "b": "By systematically reinforcing desired behaviors and skills in language learning.",
      "c": "By replacing the curriculum with individualized therapy sessions for SEN students.",
      "d": "By standardizing SEN students’ responses in all contexts."
    },
    "answer": "b",
    "explanation": "ABA utilizes reinforcement strategies to build positive communication behaviors. (Cooper et al., 2020)"
  },
  {
    "id": 198,
    "question": "Select the option that fits with the definition of Inclusive education.",
    "options": {
      "a": "It refers to those who have long-term physical, mental, intellectual, or sensory impairments which in interaction with various barriers may hinder their full and effective participation in society on an equal basis with others.",
      "b": "It is when groups of children are purposefully separated from the majority because of difference. E.g.: children with disabilities can be classified according to their impairment and allocated a school designed to respond to that particular impairment.",
      "c": "It is where children with disabilities are placed in the mainstream system, often in special classes, or in a general classroom with no or inadequate adaptations and support.",
      "d": "It is a process of addressing and responding to the diversity of needs of all leaners through increasing participation in learning, cultures and communities, and reducing exclusion within and from education."
    },
    "answer": "d",
    "explanation": "Inclusive education addresses and responds to diverse learner needs, eliminating educational exclusion. (UNESCO, 2005)"
  },
  {
    "id": 199,
    "question": "What are the Levels of linguistic analysis?",
    "options": {
      "a": "Phonic (Phonetics & Phonology), Morphosyntactical-grammatical (Morphology & Syntax) and Lexico-Semantic (Lexicology & Semantics) levels.",
      "b": "The Pragmatic and Semiotic levels.",
      "c": "The Stylistic and Belles Lettres levels.",
      "d": "The Discourse Analysis and Prose levels."
    },
    "answer": "a",
    "explanation": "The primary structural levels encompass Phonic, Morphosyntactical-grammatical, and Lexico-Semantic."
  },
  {
    "id": 200,
    "question": "Morphology is defined as:",
    "options": {
      "a": "The study of sounds in their production.",
      "b": "The study of morphemes, or the internal structures of words and how they can be modified and classified.",
      "c": "The classification of syntactic structures in utterances.",
      "d": "One of the levels of linguistic analysis."
    },
    "answer": "b",
    "explanation": "Morphology focuses on morphemes and the internal composition and formation of words."
  },
  {
    "id": 201,
    "question": "A morpheme is:",
    "options": {
      "a": "The sounds in language.",
      "b": "The words and phrases of language.",
      "c": "The physical properties of speech sounds.",
      "d": "A morphological element with functional relations in a linguistic system."
    },
    "answer": "d",
    "explanation": "A morpheme is the smallest meaningful (free) or meaningless (bound) unit carrying functional relations in language."
  },
  {
    "id": 202,
    "question": "What does Phonetics study?",
    "options": {
      "a": "The functional practical aspect of sounds in language.",
      "b": "The etymological history of words.",
      "c": "The physical properties of speech sound production, transmission and perception.",
      "d": "The syntactical relation of words in a sentence."
    },
    "answer": "c",
    "explanation": "Phonetics investigates physical sound production, acoustic transmission, and auditory perception."
  },
  {
    "id": 203,
    "question": "A phoneme is:",
    "options": {
      "a": "The smallest linguistic contrastive unit which can bring about a change in meaning. E. g. /t/ as in the word town /taʊn/.",
      "b": "A word of a paragraph.",
      "c": "A syllable without vowel.",
      "d": "A derivation of a morpheme."
    },
    "answer": "a",
    "explanation": "A phoneme is an abstract, minimal contrastive unit that can differentiate word meaning."
  },
  {
    "id": 204,
    "question": "An allophone can be defined as:",
    "options": {
      "a": "A letter in word.",
      "b": "A variant of a phoneme depending on the position in context. E. g. aspirated [pʰ] as in the word people [pʰipɫ].",
      "c": "A clause or sentence in a paragraph.",
      "d": "One manner of articulation."
    },
    "answer": "b",
    "explanation": "Allophones are contextual phonetic realizations/variants of a underlying phoneme."
  },
  {
    "id": 205,
    "question": "Vowels from the phonetic and linguistic standpoints are:",
    "options": {
      "a": "The physical properties of speech sound production, transmission and perception.",
      "b": "The functional practical aspect of sounds in language.",
      "c": "The etymological history of words.",
      "d": "Sounds produced without any partial or total obstruction and being central -the nucleus- in a syllable."
    },
    "answer": "d",
    "explanation": "Vowels are produced without vocal tract obstruction and function as syllable nuclei."
  },
  {
    "id": 206,
    "question": "Consonants phonetically and linguistically are:",
    "options": {
      "a": "The functional practical aspect of sounds in language.",
      "b": "The etymological history of words.",
      "c": "The physical properties of speech sound production, transmission and perception.",
      "d": "Sounds produced with obstruction (partial or total) and being lateral in a syllable."
    },
    "answer": "d",
    "explanation": "Consonants involve obstruction of airflow and form syllable margins/boundaries."
  },
  {
    "id": 207,
    "question": "The Manner of Articulation in consonant production is:",
    "options": {
      "a": "The study of sounds in their production.",
      "b": "The way the organs of speech get close or together to produce sounds.",
      "c": "The classification of syntactic structures in utterances.",
      "d": "One of the levels of linguistic analysis."
    },
    "answer": "b",
    "explanation": "Manner of articulation describes how speech organs interact to constrict or direct airflow."
  },
  {
    "id": 208,
    "question": "The Area of Articulation for consonants is:",
    "options": {
      "a": "The place or point where the organs of speech get close or together to pronounce a sound.",
      "b": "The way sounds are produced.",
      "c": "When the vocal cords produce voice.",
      "d": "The position of the soft palate."
    },
    "answer": "a",
    "explanation": "Place/Area of articulation denotes the specific location where active and passive articulators meet."
  },
  {
    "id": 209,
    "question": "In English, consonant voicing refers to:",
    "options": {
      "a": "Whether or not vocal cords vibrate when producing a consonant sound.",
      "b": "The position of the soft palate.",
      "c": "One manner of articulation.",
      "d": "The position of the soft palate."
    },
    "answer": "a",
    "explanation": "Voicing depends entirely on whether the vocal folds vibrate during articulation."
  },
  {
    "id": 210,
    "question": "A Plosive is the type of consonant that:",
    "options": {
      "a": "Is also known as an occlusive or simply a stop in which the air flow is completely blocked.",
      "b": "Has no obstruction in its production.",
      "c": "Has no release in its production.",
      "d": "Is only voiceless."
    },
    "answer": "a",
    "explanation": "Plosives involve complete occlusion of airflow followed by a sudden burst release."
  },
  {
    "id": 211,
    "question": "This Plosive stop /d/ is classified as:",
    "options": {
      "a": "Voiced, oral and alveolar.",
      "b": "Bilabial, voiceless and oral.",
      "c": "Voiceless, nasal and alveolar.",
      "d": "Voiceless, oral and alveolar."
    },
    "answer": "a",
    "explanation": "/d/ is produced with vocal fold vibration (voiced), oral airflow, and tongue tip contact at the alveolar ridge."
  },
  {
    "id": 212,
    "question": "Which of the following best describes the communicative approach to teaching English?",
    "options": {
      "a": "Focus on grammar rules and translation exercises",
      "b": "Emphasis on memorizing vocabulary lists",
      "c": "Prioritizing real-life communication and interaction",
      "d": "Teaching through literature and poetry only."
    },
    "answer": "c",
    "explanation": "The communicative approach emphasizes meaningful real-life interaction and fluency over isolated grammar drill."
  },
  {
    "id": 213,
    "question": "When teaching vocabulary in high school, which technique is most effective for long-term retention?",
    "options": {
      "a": "Repetition of word lists",
      "b": "Using words in context through tasks and activities",
      "c": "Asking students to copy words multiple times",
      "d": "Testing students weekly on spelling only"
    },
    "answer": "b",
    "explanation": "Contextualized learning connects vocabulary to usage and existing schemas, facilitating retention."
  },
  {
    "id": 214,
    "question": "A teacher assigns a group project where students create a short video in English. This activity primarily develops:",
    "options": {
      "a": "Only reading skills",
      "b": "Only grammar accuracy",
      "c": "Integrated skills: speaking, writing, and creativity",
      "d": "Listening without interaction"
    },
    "answer": "c",
    "explanation": "Project work naturally integrates multiple language skills along with collaborative creation."
  },
  {
    "id": 215,
    "question": "Which strategy best motivates teenagers to learn English?",
    "options": {
      "a": "Solely focusing on exam preparation",
      "b": "Relating content to their interests and real-life experiences",
      "c": "Using only teacher-centered lectures",
      "d": "Avoiding technology to reduce distraction"
    },
    "answer": "b",
    "explanation": "Relating learning materials to personal interests increases intrinsic motivation in adolescent learners."
  },
  {
    "id": 216,
    "question": "Which method has been commonly employed by Ecuadorian high school English teachers, according to recent studies?",
    "options": {
      "a": "Communicative Language Teaching",
      "b": "Total Physical Response",
      "c": "Grammar–Translation and Audio-Lingual methods.",
      "d": "Blended communicative approaches"
    },
    "answer": "c",
    "explanation": "Studies point out heavy historic reliance on traditional Grammar-Translation and Audio-Lingual methodologies in local high schools."
  },
  {
    "id": 217,
    "question": "What is the main goal of the Communicative Approach promoted in Ecuador’s national curriculum?",
    "options": {
      "a": "Memorizing grammar rules",
      "b": "Achieving communicative competence in real contexts",
      "c": "Passing standardized grammar tests",
      "d": "Reading only classic English literature"
    },
    "answer": "b",
    "explanation": "The national curriculum aims to build functional communicative competence for real-life contexts."
  },
  {
    "id": 218,
    "question": "According to the Ecuadorian curriculum, English is taught in high school primarily as a:",
    "options": {
      "a": "Subject for memorizing literary texts.",
      "b": "Tool for communication and access to global opportunities.",
      "c": "Requirement for passing standardized exams only.",
      "d": "Translation-based academic exercise."
    },
    "answer": "b",
    "explanation": "MINEDUC frames English as a practical tool fostering global citizenship, employment, and higher education access."
  },
  {
    "id": 219,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Language is the most powerful way in communication world.",
      "b": "Language improves the quality of life and shows how people from different places live and think.",
      "c": "Language is one of the vital factors that influence human life progress.",
      "d": "All the options."
    },
    "answer": "d",
    "explanation": "All listed statements reflect valid theoretical definitions of language. (Assemi et al., 2012)"
  },
  {
    "id": 220,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Until the 1980’s, culture was seen as the literacy or humanities component of language study and was associated with the communicative language teaching method of teaching foreign languages.",
      "b": "Until the 1970’s, culture was seen as the literacy or humanities component of language study and was associated with the grammar-translation method of teaching foreign languages.",
      "c": "Until the 1980’s, culture was seen as the literacy or humanities component of language study and was associated with the presentation, practice, production method of teaching foreign languages.",
      "d": "All the options."
    },
    "answer": "b",
    "explanation": "Prior to the 1970s communicative turn, culture was treated as literary humanities tied to grammar-translation. (Kramsch, 2012)"
  },
  {
    "id": 221,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Culture can be formed by itself.",
      "b": "Culture does not convert to personality.",
      "c": "Culture is what brings us together as human beings, as social creatures.",
      "d": "None of the options."
    },
    "answer": "c",
    "explanation": "Culture is fundamentally a social process uniting human beings. (Assemi et al., 2012)"
  },
  {
    "id": 222,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Culture cannot be formed by itself.",
      "b": "Culture does not convert to personality.",
      "c": "Change in culture is observable and material.",
      "d": "All the options."
    },
    "answer": "a",
    "explanation": "Culture requires social interaction and cannot emerge spontaneously in isolation. (Assemi et al., 2012)"
  },
  {
    "id": 223,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Postmodernism includes skeptical interpretations of culture.",
      "b": "Postmodernism does not include literature, art, philosophy, and history.",
      "c": "Postmodernism does not include economics, architecture, fiction, and literary criticism.",
      "d": "All the options."
    },
    "answer": "a",
    "explanation": "Postmodernism is characterized by grand-narrative skepticism regarding culture. (Larsari & Wildová, 2022)"
  },
  {
    "id": 224,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Postmodernism is often associated with deconstruction and poststructuralism.",
      "b": "Postmodernist educational concepts are not mentioned as relativism.",
      "c": "Postmodernist educational concepts are not mentioned as decolonization.",
      "d": "All the options."
    },
    "answer": "a",
    "explanation": "Postmodernism frequently aligns with poststructuralist deconstruction theories. (Larsari & Wildová, 2022)"
  },
  {
    "id": 225,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Postmodernist educational concepts are mentioned as decentralization.",
      "b": "Postmodernist educational concepts are mentioned as deconstruction.",
      "c": "Postmodernist educational concepts are mentioned as eclecticism.",
      "d": "All the options."
    },
    "answer": "d",
    "explanation": "Postmodernist pedagogy encompasses decentralization, deconstruction, and eclecticism. (Larsari & Wildová, 2022)"
  },
  {
    "id": 226,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Interference is the cause of learning difficulties and errors.",
      "b": "Interference is helpful for acquiring second language habits.",
      "c": "Interference is the same as transfer.",
      "d": "None of the options."
    },
    "answer": "a",
    "explanation": "Interference caused by L1 differences creates distinct learning errors in L2. (Littlewood, 1984)"
  },
  {
    "id": 227,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "In contrastive analysis we can compare the learner’s first language with the second language he is trying to learn.",
      "b": "In strong analysis we can compare the hypothesis with the language.",
      "c": "In weak analysis we can compare the hypothesis with the language.",
      "d": "All the options."
    },
    "answer": "a",
    "explanation": "Contrastive analysis systematically compares features of L1 and L2. (Littlewood, 1984)"
  },
  {
    "id": 228,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Practical experience suggests that many errors made by learners would not have been predicted by contrastive analysis.",
      "b": "Practical experience suggests that many errors made by learners would have been predicted by contrastive analysis.",
      "c": "Practical experience suggests that many attempts made by learners would have been predicted by contrastive analysis.",
      "d": "All the options."
    },
    "answer": "a",
    "explanation": "Interlanguage errors often stem from developmental causes rather than L1 transfer alone. (Littlewood, 1984)"
  },
  {
    "id": 229,
    "question": "Read and choose the true statement.",
    "options": {
      "a": "Overgeneralization of a rule can cause a right prediction.",
      "b": "Overgeneralization of a rule can cause a wrong prediction.",
      "c": "Overgeneralization of a rule can cause a prediction.",
      "d": "All the options."
    },
    "answer": "b",
    "explanation": "Overgeneralizing L2 rules leads directly to developmental error patterns. (Littlewood, 1984)"
  },
  {
    "id": 230,
    "question": "Select the best option to complete the idea.\nSTATEMENT: “Remote work”(tele-trabajo) is a neologism that became common after the pandemic. That makes it _____________.",
    "options": {
      "a": "a neologism of form.",
      "b": "a neologism of meaning.",
      "c": "a barbarism.",
      "d": "a loan word."
    },
    "answer": "a",
    "explanation": "'Remote work' is a newly developed phrase/form entering mainstream usage. (Global Language Services, 2024)"
  },
  {
    "id": 231,
    "question": "Select the best option to complete the statement, based in the context of the dialogue.\nMarianita: \"Andrés refuses to eat meat.\"\nNarcisa: “He’s a vegan.”\nStatement: Vegan is ____________________ distinct from vegetarianism, emphasizing zero animal products.",
    "options": {
      "a": "a foreign word.",
      "b": "a neologism.",
      "c": "a barbarism.",
      "d": "a loan word."
    },
    "answer": "b",
    "explanation": "'Vegan' is a coined term created to distinguish full animal product abstention. (Etymonline)"
  },
  {
    "id": 232,
    "question": "Select the best option to complete the question/idea.\nSentence: The chef cut the vegetables with a sharp knife.\nQuestion: In this sentence, the Agent is _____",
    "options": {
      "a": "the chef",
      "b": "the vegetables",
      "c": "the knife",
      "d": "the kitchen"
    },
    "answer": "a",
    "explanation": "The Agent is the conscious participant who intentionally initiates the action ('the chef')."
  },
  {
    "id": 233,
    "question": "Select the best option to complete the question/idea.\nSentence: Maria sent a letter to her friend.\nQuestion: The Recipient in this sentence is _____",
    "options": {
      "a": "Maria",
      "b": "a letter",
      "c": "her friend",
      "d": "sent"
    },
    "answer": "c",
    "explanation": "The Recipient represents the entity that receives the object ('her friend')."
  },
  {
    "id": 234,
    "question": "Select the best option to complete the question/idea\nSentence: The company built a new bridge in the city.\nQuestion: The Patient in this sentence is _____",
    "options": {
      "a": "the city",
      "b": "the company",
      "c": "a new bridge",
      "d": "built"
    },
    "answer": "c",
    "explanation": "The Patient undergoes the action or change of state ('a new bridge')."
  },
  {
    "id": 235,
    "question": "Select the best option to complete the question/idea.\nSentence: The tourists admired the painting in the museum.\nQuestion: The Experiencer in this sentence is _____",
    "options": {
      "a": "the tourists",
      "b": "the museum",
      "c": "the painting",
      "d": "admired"
    },
    "answer": "a",
    "explanation": "The Experiencer is the entity experiencing psychological/sensory state ('the tourists')."
  },
  {
    "id": 236,
    "question": "Select the best option to complete the question/idea.\nSentence: Despite her tiredness, she managed to finish the project.\nQuestion: The word tiredness is a ______.",
    "options": {
      "a": "verb",
      "b": "adverb",
      "c": "noun",
      "d": "adjective"
    },
    "answer": "c",
    "explanation": "The nominalizing suffix '-ness' converts the adjective 'tired' into the noun 'tiredness.'"
  },
  {
    "id": 237,
    "question": "Select the best option to complete the question/idea.\nSentence: She spoke so fast that it was hard to understand her.\nQuestion: The word fast here is a ______.",
    "options": {
      "a": "Adverb",
      "b": "Adjective",
      "c": "Verb",
      "d": "Noun"
    },
    "answer": "a",
    "explanation": "In this context, 'fast' functions as an adverb modifying the verb 'spoke.'"
  },
  {
    "id": 238,
    "question": "Choose the correct option.\nThe materials that are designed for native speakers, the real texts designed not for language speakers of the language in question are: ____________________. Any newspaper article or radio advertisement are examples of these.",
    "options": {
      "a": "Authentic material",
      "b": "Pedagogical material",
      "c": "Didactic material",
      "d": "Non-Authentic material"
    },
    "answer": "a",
    "explanation": "Authentic materials are real-world texts produced for native speakers, not created specifically for pedagogy. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 239,
    "question": "Circle the letter that corresponds to the right answer.\nThis process includes:\n- Assessment of learners and their achievements\n- Learner satisfaction\n- Performance indicators for teachers\n- A critical examination of the materials\n- Comparisons with other courses",
    "options": {
      "a": "Evaluation",
      "b": "Methodology",
      "c": "Needs Analysis",
      "d": "Reliability"
    },
    "answer": "a",
    "explanation": "Evaluation is a holistic examination of all elements of a learning course or program. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 240,
    "question": "Circle the letter that corresponds to the right answer.\n1. Validity | A. The way a speaker use language differently in different circunstances.\n2. Reliability | B. It makes reference to the degree to which a method assesses what it claims to assess.\n3. Register | C. It refers to the times an assessment instrument measures consistenly the performance of the student.",
    "options": {
      "a": "1C 2B 3A",
      "b": "1A 2B 3C",
      "c": "1B 2A 3C",
      "d": "1B 2C 3A"
    },
    "answer": "d",
    "explanation": "Validity measures target construct (1B), Reliability denotes assessment consistency (2C), Register relates to situation-dependent language choice (3A). (Hutchinson & Waters, 1987)"
  },
  {
    "id": 241,
    "question": "Circle the letter that corresponds to the correct answer.\nIt is a method of language education that combines various approaches and methodologies to teach language depending on the aims of the lesson and the abilities of the learners. Different teaching methods are borrowed and adapted to suit the requirement of the learners.",
    "options": {
      "a": "Direct method",
      "b": "Eclectic approach",
      "c": "Suggestopedia",
      "d": "Lexical approach"
    },
    "answer": "b",
    "explanation": "The eclectic approach selects techniques from various methods to fit student needs. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 242,
    "question": "Circle the letter that corresponds to the incorrect recommendation for teaching English for Specific Purposes.",
    "options": {
      "a": "Harness the potential of technological innovation in ESP teaching.",
      "b": "Be aware that learners may have different perceptions of tasks and situations, objectives and needs.",
      "c": "Be aware that kids are new in this field and maybe they are not motivated to learn.",
      "d": "Accept training and support if you, as an ESP teacher are not an specialist in the particular field."
    },
    "answer": "d",
    "explanation": "ESP primarily focuses on adults with professional/academic needs rather than general child education. (Basturkmen, 2010)"
  },
  {
    "id": 243,
    "question": "Circle the letter that corresponds to the correct answer.\nThe teaching process can happen in the following contexts. Circle the letter that corresponds to the context in which English is taught in our country.",
    "options": {
      "a": "The target language is taught in an environment where it is the primary means of communication but students have no need to use it.",
      "b": "Immediate need and immediate easily-accessible opportunity in the local community.",
      "c": "There is little or no use of the target language in the local environment.",
      "d": "It includes contexts where people need to learn language quickly to use it in an overseas country, but will find little use in the immediate environment."
    },
    "answer": "c",
    "explanation": "In Ecuador, English functions as a Foreign Language (EFL) with minimal environmental use outside class."
  },
  {
    "id": 244,
    "question": "Choose the correct answer.\nRead the following case in an English class and identify the methodology that the teacher is using.\nStudents would take on the roles of both the interviewer and the interviewee, with the task of conducting a professional interview in English. The interviewer would ask questions related to a specific job, while the interviewee would prepare responses that highlight their skills, experiences, and qualifications. Students could be assigned different job roles, such as a marketing manager, a software developer, or a teacher, and would need to use job-specific vocabulary and professional language throughout the task. This role-play not only encourages students to practice speaking and listening skills in a realistic setting but also helps them learn how to adapt their language to different contexts and build confidence in using English for professional purposes.",
    "options": {
      "a": "Lexical approach",
      "b": "Suggestopedia",
      "c": "Task Based Learning",
      "d": "Grammar translation method"
    },
    "answer": "c",
    "explanation": "Task-Based Learning revolves around completing realistic target-language tasks. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 245,
    "question": "Circle the letter that corresponds to the correct answer.\nA teacher might introduce a lesson centered on common expressions used in everyday conversations, such as 'How's it going?', 'I'm looking forward to it,' or 'That's a good point.' The teacher would present these expressions in context, explaining their meaning, pronunciation, and usage, and then have students practice using them in various situations, such as role-playing a casual conversation with a friend or making plans for the weekend. The goal is to help students recognize and use fixed phrases and natural language patterns, which enhances their fluency and makes their speech sound more authentic and native-like. This approach encourages learners to see language as a collection of chunks that can be combined and adapted in different contexts.",
    "options": {
      "a": "Lexical approach",
      "b": "Suggestopedia",
      "c": "Task Based Learning",
      "d": "Eclectic approach"
    },
    "answer": "a",
    "explanation": "The Lexical Approach focuses on lexical chunks and fixed collocations. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 246,
    "question": "Circle the letter that corresponds to the correct answer.\nThey are individuals, groups, or organizations that have an interest or power on particular projects, decisions, or activities. They can be directly or indirectly involved and may influence or be influenced by the outcome. They can be employees, customers, investors, suppliers, government agencies, community members, or any other entity with a vested interest in the process or result.",
    "options": {
      "a": "Proffesors",
      "b": "Stakeholders",
      "c": "Needs analysis",
      "d": "Registers"
    },
    "answer": "b",
    "explanation": "Stakeholders are entities/parties holding vested interests or decision power. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 247,
    "question": "Circle the letter that corresponds to the right answer.\nIt refers to the testing of learners to check their progress. It could be a measure of their achievement (summative) or a feedback mechanism as a course of study progresses (formative).",
    "options": {
      "a": "Evaluation",
      "b": "Assessment",
      "c": "Methodology",
      "d": "Needs analysis"
    },
    "answer": "b",
    "explanation": "Assessment is the process of measuring student learning and progress (formative or summative). (Hutchinson & Waters, 1987)"
  },
  {
    "id": 248,
    "question": "Choose the correct option.\nWhen a reader looks through a text quickly to get a general idea of what it is about, focusing on detail, the strategy used is:",
    "options": {
      "a": "Scanning",
      "b": "Skimming",
      "c": "Intensive reading",
      "d": "Extensive Reading"
    },
    "answer": "b",
    "explanation": "Skimming is reading quickly to extract the overall core idea/gist of a text. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 249,
    "question": "Choose the correct option.\nIf a student reads a long novel for pleasure, without focusing on every detail, this type of reading is called:",
    "options": {
      "a": "Intensive reading",
      "b": "Skimming",
      "c": "Scanning",
      "d": "Extensive reading"
    },
    "answer": "d",
    "explanation": "Extensive reading refers to reading longer texts for general comprehension and enjoyment. (Hutchinson & Waters, 1987)"
  },
  {
    "id": 250,
    "question": "Choose the correct option.\nA teacher asks students to work in pairs and role-play a situation such as ordering food in a restaurant. This strategy focuses on:",
    "options": {
      "a": "Translation exercises",
      "b": "Controlled drills",
      "c": "Communicative practice",
      "d": "Grammar explanation"
    },
    "answer": "c",
    "explanation": "Pair role-playing facilitates functional interactive communication simulating real life. (Littlewood, 1981)"
  }
];

// Export for ES modules or Node.js depending on your project setup
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionsData;
}
// Dictionary Data
// Format: Each word has an array of sentences with English and Hindi translations
// Add more words here as you share them!

const dictionaryData = [
  {
    id: 1,
    word: "Pose",
    meanings: [
      {
        english: "This meeting can pose the question.",
        hindi: "यह मीटिंग सवाल उठा सकती है।",
      },
      {
        english: "Pollution can pose a serious threat to public health.",
        hindi: "प्रदूषण सार्वजनिक स्वास्थ्य के लिए गंभीर खतरा पैदा कर सकता है।",
      },
      {
        english: "The new rules may pose a challenge for small businesses.",
        hindi: "नए नियम छोटे व्यवसायों के लिए चुनौती खड़ी कर सकते हैं।",
      },
    ],
  },
  {
    id: 2,
    word: "Delicate",
    synonyms: ["fragile", "sensitive", "subtle", "fine", "tender"],
    meanings: [
      {
        english: "This is a very delicate matter, handle it carefully.",
        hindi: "यह बहुत नाज़ुक मामला है, इसे सावधानी से संभालो।",
      },
      {
        english: "The baby has very delicate skin.",
        hindi: "बच्चे की त्वचा बहुत नाज़ुक होती है।",
      },
      {
        english: "The vase is made of delicate glass.",
        hindi: "यह फूलदान नाज़ुक कांच से बना है।",
      },
    ],
  },
  {
    id: 3,
    word: "Delicately",
    synonyms: ["gently", "softly", "carefully", "subtly", "tenderly"],
    meanings: [
      {
        english: "She delicately placed the flowers on the table.",
        hindi: "उसने नाज़ुक ढंग से फूल मेज़ पर रखे।",
      },
      {
        english: "The artist delicately painted every detail.",
        hindi: "कलाकार ने बारीकी से हर विवरण को चित्रित किया।",
      },
      {
        english: "He delicately handled the situation without hurting anyone.",
        hindi: "उसने किसी को ठेस पहुँचाए बिना स्थिति को सूझबूझ से संभाला।",
      },
    ],
  },
  {
    id: 4,
    word: "Dotted",
    synonyms: ["spotted", "speckled", "scattered", "sprinkled", "peppered"],
    meanings: [
      {
        english: "The sky was dotted with stars.",
        hindi: "आसमान तारों से भरा हुआ था।",
      },
      {
        english: "Please sign on the dotted line.",
        hindi: "कृपया बिंदुओं वाली लाइन पर हस्ताक्षर करें।",
      },
      {
        english: "Small villages are dotted across the landscape.",
        hindi: "छोटे-छोटे गाँव पूरे इलाके में फैले हुए हैं।",
      },
      {
        english: "The bedsheet was dotted with flower patterns.",
        hindi: "चादर पर फूलों के डिज़ाइन बने हुए थे।",
      },
      {
        english: "The bed was dotted with flowers everywhere.",
        hindi: "बिस्तर पर जगह-जगह फूल फैले हुए थे।",
      },
    ],
  },
  {
    id: 5,
    word: "Downpour",
    synonyms: ["heavy rain", "cloudburst", "deluge", "torrential rain", "rainstorm"],
    meanings: [
      {
        english: "The only thing the earth needed was a downpour.",
        hindi: "धरती को बस एक मूसलाधार बारिश की ज़रूरत थी।",
      },
      {
        english: "We got caught in a sudden downpour.",
        hindi: "हम अचानक मूसलाधार बारिश में फँस गए।",
      },
      {
        english: "The downpour flooded the streets within minutes.",
        hindi: "मूसलाधार बारिश ने कुछ ही मिनटों में सड़कों को डुबो दिया।",
      },
    ],
  },
  {
    id: 6,
    word: "Shower",
    synonyms: ["drizzle", "light rain", "sprinkle", "sprinkling"],
    meanings: [
      {
        english: "The only thing the earth needed was a downpour or at least a shower.",
        hindi: "धरती को बस मूसलाधार बारिश या कम से कम हल्की बारिश की ज़रूरत थी।",
      },
      {
        english: "A brief shower cooled down the temperature.",
        hindi: "हल्की बारिश ने तापमान को ठंडा कर दिया।",
      },
      {
        english: "We expected a shower but it turned into a storm.",
        hindi: "हमें हल्की बारिश की उम्मीद थी लेकिन यह तूफान में बदल गई।",
      },
    ],
  },
  {
    id: 7,
    word: "Throughout",
    synonyms: ["all through", "during", "across", "everywhere", "all over"],
    meanings: [
      {
        english: "It rained throughout the night.",
        hindi: "पूरी रात बारिश होती रही।",
      },
      {
        english: "She remained calm throughout the meeting.",
        hindi: "वह पूरी मीटिंग के दौरान शांत रही।",
      },
      {
        english: "The news spread throughout the city.",
        hindi: "खबर पूरे शहर में फैल गई।",
      },
      {
        english: "We can enjoy throughout the night.",
        hindi: "हम पूरी रात मज़े कर सकते हैं।",
      },
    ],
  },
  {
    id: 8,
    word: "Intimately",
    synonyms: ["closely", "deeply", "personally", "thoroughly", "familiarly"],
    meanings: [
      {
        english: "He is intimately familiar with the subject.",
        hindi: "वह इस विषय से गहराई से परिचित है।",
      },
      {
        english: "The two cultures are intimately connected.",
        hindi: "दोनों संस्कृतियाँ गहरे रूप से जुड़ी हुई हैं।",
      },
      {
        english: "She knows the city intimately after living there for years.",
        hindi: "वहाँ सालों रहने के बाद वह शहर को अच्छी तरह जानती है।",
      },
      {
        english: "We have an intimate friendship.",
        hindi: "हमारी गहरी दोस्ती है।",
      },
    ],
  },
  {
    id: 9,
    word: "God willing",
    synonyms: ["Inshallah", "hopefully", "if fate allows", "by God's grace"],
    meanings: [
      {
        english: "God willing, we will meet again soon.",
        hindi: "अगर भगवान ने चाहा, तो हम जल्द फिर मिलेंगे।",
      },
      {
        english: "God willing, everything will be fine.",
        hindi: "ईश्वर की कृपा से सब ठीक हो जाएगा।",
      },
      {
        english: "God willing, I will pass the exam this time.",
        hindi: "भगवान ने चाहा तो इस बार मैं परीक्षा पास कर लूँगा।",
      },
    ],
  },
  {
    id: 10,
    word: "Exclaimed",
    synonyms: ["shouted", "cried out", "declared", "blurted", "called out"],
    meanings: [
      {
        english: "When he returned, he exclaimed, 'These aren't raindrops falling from the sky,'",
        hindi: "जब वह वापस लौटा, तो वह बोला, 'ये आसमान से गिरने वाली बारिश की बूँदें नहीं हैं,'",
      },
      {
        english: "She exclaimed in surprise when she saw the gift.",
        hindi: "तोहफा देखकर वह हैरानी से चिल्लाई।",
      },
      {
        english: "\"This is amazing!\" he exclaimed.",
        hindi: "\"यह अद्भुत है!\" उसने जोश से कहा।",
      },
    ],
  },
  {
    id: 11,
    word: "Regarded",
    synonyms: ["looked at", "observed", "viewed", "considered", "gazed at"],
    meanings: [
      {
        english: "He regarded the field of ripe corn.",
        hindi: "उसने पकी हुई मक्के की फसल को ध्यान से देखा।",
      },
      {
        english: "She regarded him with suspicion.",
        hindi: "उसने उसे शक की नज़र से देखा।",
      },
      {
        english: "He is regarded as one of the best teachers.",
        hindi: "उन्हें सबसे अच्छे शिक्षकों में से एक माना जाता है।",
      },
    ],
  },
  {
    id: 12,
    word: "Draped",
    synonyms: ["covered", "wrapped", "cloaked", "enveloped", "shrouded"],
    meanings: [
      {
        english: "Draped in a curtain of rain.",
        hindi: "बारिश के पर्दे में ढका हुआ।",
      },
      {
        english: "She draped a shawl over her shoulders.",
        hindi: "उसने अपने कंधों पर शॉल लपेट लिया।",
      },
      {
        english: "The mountains were draped in fog.",
        hindi: "पहाड़ कोहरे में ढके हुए थे।",
      },
    ],
  },
  {
    id: 13,
    word: "Curtain",
    synonyms: ["screen", "veil", "cover", "drape", "blind"],
    meanings: [
      {
        english: "Draped in a curtain of rain.",
        hindi: "बारिश के पर्दे में ढका हुआ।",
      },
      {
        english: "She pulled the curtain aside to look outside.",
        hindi: "उसने बाहर देखने के लिए पर्दा हटाया।",
      },
      {
        english: "A curtain of smoke covered the sky.",
        hindi: "धुएँ के पर्दे ने आसमान को ढक लिया।",
      },
    ],
  },
];

export default dictionaryData;

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
      {
        english: "This migration can pose a risk to the production environment.",
        hindi: "यह माइग्रेशन प्रोडक्शन एनवायरनमेंट के लिए खतरा पैदा कर सकता है।",
      },
      {
        english: "Untested code can pose serious bugs in deployment.",
        hindi: "बिना टेस्ट किया कोड डिप्लॉयमेंट में गंभीर बग पैदा कर सकता है।",
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
      {
        english: "The database schema is very delicate, one wrong change can break everything.",
        hindi: "डेटाबेस स्कीमा बहुत नाज़ुक है, एक गलत बदलाव सब कुछ तोड़ सकता है।",
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
      {
        english: "The tester delicately reported the bug without blaming the developer.",
        hindi: "टेस्टर ने डेवलपर को दोष दिए बिना बग को सूझबूझ से रिपोर्ट किया।",
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
      {
        english: "The code was dotted with comments explaining the logic.",
        hindi: "कोड में जगह-जगह लॉजिक समझाने वाले कमेंट्स थे।",
      },
      {
        english: "The test report was dotted with failed test cases.",
        hindi: "टेस्ट रिपोर्ट में जगह-जगह फेल टेस्ट केस थे।",
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
      {
        english: "After the release, there was a downpour of bug reports from users.",
        hindi: "रिलीज़ के बाद यूज़र्स से बग रिपोर्ट्स की बाढ़ आ गई।",
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
      {
        english: "The automation scripts ran throughout the night.",
        hindi: "ऑटोमेशन स्क्रिप्ट्स पूरी रात चलती रहीं।",
      },
      {
        english: "We maintained code quality throughout the sprint.",
        hindi: "हमने पूरे स्प्रिंट में कोड क्वालिटी बनाए रखी।",
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
      {
        english: "A tester should be intimately familiar with the application's workflow.",
        hindi: "एक टेस्टर को एप्लिकेशन के वर्कफ़्लो से गहराई से परिचित होना चाहिए।",
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
      {
        english: "The developer exclaimed, 'All test cases passed on the first run!'",
        hindi: "डेवलपर बोला, 'सभी टेस्ट केस पहली बार में पास हो गए!'",
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
      {
        english: "Selenium is regarded as the most popular automation tool.",
        hindi: "सेलेनियम को सबसे लोकप्रिय ऑटोमेशन टूल माना जाता है।",
      },
      {
        english: "He is regarded as the best tester in the team.",
        hindi: "उन्हें टीम का सबसे अच्छा टेस्टर माना जाता है।",
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
      {
        english: "The dashboard was draped in error messages after deployment.",
        hindi: "डिप्लॉयमेंट के बाद डैशबोर्ड एरर मैसेज से भरा हुआ था।",
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
  {
    id: 14,
    word: "Hailstones",
    synonyms: ["ice pellets", "frozen rain", "sleet", "ice balls"],
    meanings: [
      {
        english: "The hailstones began to fall from the sky.",
        hindi: "आसमान से ओले गिरने लगे।",
      },
      {
        english: "The hailstones destroyed the entire crop.",
        hindi: "ओलों ने पूरी फसल बर्बाद कर दी।",
      },
      {
        english: "These aren't raindrops, they are hailstones!",
        hindi: "ये बारिश की बूँदें नहीं हैं, ये ओले हैं!",
      },
      {
        english: "Critical bugs hit the project like hailstones before the release.",
        hindi: "रिलीज़ से पहले प्रोजेक्ट पर ओलों की तरह गंभीर बग आ गए।",
      },
    ],
  },
  {
    id: 15,
    word: "Resembles",
    synonyms: ["looks like", "similar to", "appears like", "mirrors", "takes after"],
    meanings: [
      {
        english: "She resembles her mother.",
        hindi: "वह अपनी माँ जैसी दिखती है।",
      },
      {
        english: "This building resembles a palace.",
        hindi: "यह इमारत एक महल जैसी दिखती है।",
      },
      {
        english: "His handwriting resembles his father's.",
        hindi: "उसकी लिखावट उसके पिता जैसी है।",
      },
      {
        english: "This bug resembles the one we fixed last sprint.",
        hindi: "यह बग पिछले स्प्रिंट में ठीक किए गए बग जैसा दिखता है।",
      },
      {
        english: "The new UI design resembles the competitor's app.",
        hindi: "नया UI डिज़ाइन प्रतियोगी की ऐप जैसा दिखता है।",
      },
    ],
  },
  {
    id: 16,
    word: "Pearls",
    synonyms: ["gems", "jewels", "beads", "treasures"],
    meanings: [
      {
        english: "The raindrops looked like pearls falling from the sky.",
        hindi: "बारिश की बूँदें आसमान से गिरते मोतियों जैसी लग रही थीं।",
      },
      {
        english: "She wore a necklace of pearls.",
        hindi: "उसने मोतियों का हार पहना था।",
      },
      {
        english: "Dew drops on the leaves shone like pearls.",
        hindi: "पत्तों पर ओस की बूँदें मोतियों की तरह चमक रही थीं।",
      },
      {
        english: "His code reviews are pearls of wisdom for junior developers.",
        hindi: "उनकी कोड रिव्यू जूनियर डेवलपर्स के लिए ज्ञान के मोती हैं।",
      },
      {
        english: "Good test cases are like pearls — rare and valuable.",
        hindi: "अच्छे टेस्ट केस मोतियों की तरह होते हैं — दुर्लभ और कीमती।",
      },
    ],
  },
  {
    id: 17,
    word: "Rather",
    synonyms: ["instead", "preferably", "somewhat", "quite", "fairly"],
    meanings: [
      {
        english: "I would rather stay home than go out.",
        hindi: "मैं बाहर जाने की बजाय घर पर रहना पसंद करूँगा।",
      },
      {
        english: "The task was rather difficult than expected.",
        hindi: "काम उम्मीद से कहीं ज़्यादा मुश्किल था।",
      },
      {
        english: "He is rather good at solving problems.",
        hindi: "वह समस्याएँ सुलझाने में काफी अच्छा है।",
      },
      {
        english: "I would rather write automation scripts than test manually.",
        hindi: "मैं मैन्युअल टेस्ट करने की बजाय ऑटोमेशन स्क्रिप्ट लिखना पसंद करूँगा।",
      },
      {
        english: "The bug was rather tricky to reproduce.",
        hindi: "बग को दोबारा पैदा करना काफी मुश्किल था।",
      },
    ],
  },
  {
    id: 18,
    word: "Often",
    synonyms: ["frequently", "regularly", "usually", "commonly", "repeatedly"],
    meanings: [
      {
        english: "He often goes for a walk in the evening.",
        hindi: "वह अक्सर शाम को टहलने जाता है।",
      },
      {
        english: "It often rains in July.",
        hindi: "जुलाई में अक्सर बारिश होती है।",
      },
      {
        english: "She often helps her neighbours.",
        hindi: "वह अक्सर अपने पड़ोसियों की मदद करती है।",
      },
      {
        english: "Regression bugs often appear after a new deployment.",
        hindi: "नई डिप्लॉयमेंट के बाद अक्सर रिग्रेशन बग आते हैं।",
      },
      {
        english: "Developers often forget to handle edge cases.",
        hindi: "डेवलपर्स अक्सर एज केस हैंडल करना भूल जाते हैं।",
      },
    ],
  },
];

export default dictionaryData;

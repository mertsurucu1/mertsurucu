/* ==========================================================================
   Lightweight English fallback
   Turkish answers come from data/qa.json. This compact keyword list
   keeps the language toggle useful without duplicating the Turkish data file.
   ========================================================================== */

const knowledge = [
  {
    keywords: [
      "tam adı", "full name", "adı nedir", "ismi nedir", "kağan mert", "kagan mert",
      "who is mert", "what does mert do", "about mert", "mert profile", "software developer", "researcher"
    ],
    tr: "Tam adı Kağan Mert Sürücü’dür. Bilgisayar mühendisliği mezunudur ve endüstri mühendisliği alanında yüksek lisans yapmaktadır.",
    en: "Kağan Mert Sürücü is a Computer Engineering graduate and an Industrial Engineering master’s student. He works on software development, data analysis, artificial intelligence and academic research.",
    source: "CV · Genel Profil"
  },
  {
    keywords: ["tez", "thesis", "lora", "fine tuning", "fine-tuning", "fine-tune", "qwen", "kumru", "distillation", "fonbulucu", "dil modeli", "dil modelleri", "language model", "metrik", "metric", "rouge", "bleu", "meteor", "llm-as-a-judge"],
    tr: "Mert’in yüksek lisans tezi, Fonbulucu’daki halka açık girişimcilik verilerinden görev tabanlı bir Türkçe veri kümesi oluşturmasına dayanıyor. GPT-4 destekli data distillation ile veriyi genişletti; Qwen3-0.6B ve Kumru-2B modellerini LoRA ile fine-tune etti. Sonuçları ROUGE, BLEU, METEOR ve LLM-as-a-Judge yöntemleriyle karşılaştırdı.",
    en: "Mert’s master’s thesis uses public entrepreneurship data from Fonbulucu to create a task-based Turkish dataset. He expanded it with GPT-4-assisted data distillation, fine-tuned Qwen3-0.6B and Kumru-2B with LoRA, and compared them using ROUGE, BLEU, METEOR and LLM-as-a-Judge.",
    source: "CV · Yüksek Lisans Tezi"
  },
  {
    keywords: ["yüksek lisans", "master", "endüstri", "industrial", "üniversite", "education", "eğitim"],
    tr: "Mert, 2024’te Necmettin Erbakan Üniversitesi Endüstri Mühendisliği yüksek lisans programına başladı ve programı 2026’da tamamlamayı hedefliyor. Çalışmalarında Python ile veri analizi, veri görselleştirme, akademik raporlama ve proje yönetimi deneyimi edindi.",
    en: "Mert started his master’s in Industrial Engineering at Necmettin Erbakan University in 2024 and aims to complete it in 2026. His work includes data analysis, visualization, academic reporting with Python and project management.",
    source: "CV · Eğitim"
  },
  {
    keywords: ["lisans", "bachelor", "bilgisayar mühendisliği", "computer engineering", "karatay", "gpa", "ortalama"],
    tr: "Bilgisayar Mühendisliği lisansını KTO Karatay Üniversitesi’nde 2018–2023 arasında 3.11/4.00 ortalamayla tamamladı. Veri yapıları, veri madenciliği ve büyük veri derslerinin yanında özellikle mobil uygulama geliştirmeye odaklandı.",
    en: "He completed his Computer Engineering bachelor’s at KTO Karatay University between 2018 and 2023 with a 3.11/4.00 GPA, focusing especially on mobile development alongside data structures, data mining and big data.",
    source: "CV · Eğitim"
  },
  {
    keywords: ["lise", "high school", "konya anadolu", "sayısal", "science-focused"],
    tr: "Mert, 2013–2017 yılları arasında Konya Anadolu Lisesi’nde sayısal ağırlıklı programda okudu. Bu dönemde temel fen bilimleri bilgisini ve analitik düşünme becerilerini geliştirdi.",
    en: "Mert attended Konya Anatolian High School between 2013 and 2017 in a science-focused curriculum, developing foundational science knowledge and analytical thinking skills.",
    source: "CV · Eğitim"
  },
  {
    keywords: ["mobil", "mobile", "swift", "swiftui", "uikit", "flutter", "kotlin", "react native", "ios", "android", "cross-platform", "cross platform", "çapraz platform"],
    tr: "Mobil tarafta Swift, SwiftUI, UIKit, Kotlin, Java, Flutter ve React Native ile çalıştı. Lisans döneminde mobil geliştirmeye yoğunlaştı; bitirme projesindeki kimlik doğrulama sistemini de bir mobil test uygulamasıyla doğruladı.",
    en: "For mobile development, he has worked with Swift, SwiftUI, UIKit, Kotlin, Java, Flutter and React Native. He focused on mobile during his bachelor’s and validated his graduation project with a mobile test app.",
    source: "CV · Yetenekler"
  },
  {
    keywords: ["bitirme", "mezuniyet", "graduation", "kimlik", "identity", "doğrulama", "authentication", "mesajlaşma"],
    tr: "Lisans bitirme projesinde ekip arkadaşlarıyla mesajlaşma uygulamaları üzerinden çalışan bir kimlik doğrulama sistemi geliştirdi. Sistemi mobil bir test uygulamasıyla doğrulayıp çalışan prototip olarak sundu.",
    en: "For his graduation project, he and his team built an identity verification system working through messaging applications. They validated it with a mobile test app and presented a functional prototype.",
    source: "CV · Bitirme Projesi"
  },
  {
    keywords: ["araştırma", "research", "bursiyer", "scholar", "girişimcilik", "entrepreneurship", "proje"],
    tr: "Eylül 2024–Aralık 2025 arasında Necmettin Erbakan Üniversitesi’nde, yapay zekâ ile girişimcilik araçlarını bir araya getiren bilimsel araştırma projesinde bursiyerdi. Araştırma, veri hazırlama ve yazılım süreçlerine katkı verdi.",
    en: "From September 2024 to December 2025, he was a scholar in a scientific research project at Necmettin Erbakan University combining AI and entrepreneurship tools, contributing to research, data preparation and software.",
    source: "CV · Deneyim"
  },
  {
    keywords: ["staj", "intern", "tuyan", "ajans", "agency", "web", "html", "css", "bootstrap", "javascript"],
    tr: "2021’de Tuyan Tasarım ve Reklam Ajansı’ndaki zorunlu stajını kendi isteğiyle yaklaşık altı aya uzattı. HTML, CSS, JavaScript ve Bootstrap ile arayüzler geliştirdi; geliştirici, tasarımcı ve yöneticilerle birlikte çalışma deneyimi kazandı.",
    en: "In 2021, he voluntarily extended his required internship at Tuyan Design and Advertising Agency to about six months. He built interfaces with HTML, CSS, JavaScript and Bootstrap and worked with developers, designers and managers.",
    source: "CV · Deneyim"
  },
  {
    keywords: ["tasarım", "design", "figma", "adobe", "illustrator", "photoshop", "xd", "arayüz", "interface"],
    tr: "Mert’in tasarım deneyimi ajans stajında güçlendi. Arayüz ve görsel tasarım süreçlerinde Figma, Adobe XD, Illustrator ve Photoshop kullandı. Bu nedenle geliştirmeye yalnızca kod olarak değil, arayüz ve ürün deneyimi açısından da yaklaşıyor.",
    en: "Mert strengthened his design experience during his agency internship, using Figma, Adobe XD, Illustrator and Photoshop. This lets him approach development through interface and product experience, not only code.",
    source: "CV · Deneyim & Yetenekler"
  },
  {
    keywords: ["veri", "data", "python", "pandas", "numpy", "matplotlib", "tensorflow", "scikit", "matlab", "makine öğrenmesi", "machine learning", "veri analizi", "data analysis", "görselleştirme", "visualization"],
    tr: "Veri çalışmalarında Python, Pandas, NumPy, Matplotlib, TensorFlow ve scikit-learn kullanıyor. MATLAB ile sayısal hesaplama, çok ölçütlü karar analizi ve veri görselleştirme deneyimi de var.",
    en: "For data work, he uses Python, Pandas, NumPy, Matplotlib, TensorFlow and scikit-learn. He also has MATLAB experience in numerical computing, multi-criteria decision analysis and visualization.",
    source: "CV · Yetenekler"
  },
  {
    keywords: ["database", "veritabanı", "firebase", "firestore", "mysql", "postgresql", "supabase", "rest", "api"],
    tr: "Veri katmanında Firebase’in Firestore, Authentication ve Storage servisleriyle; ayrıca MySQL, PostgreSQL/Supabase ve REST API entegrasyonlarıyla çalıştı.",
    en: "For data layers, he has worked with Firebase Firestore, Authentication and Storage, as well as MySQL, PostgreSQL/Supabase and REST API integrations.",
    source: "CV · Yetenekler"
  },
  {
    keywords: ["oyun", "game", "unity", "c#", "masaüstü", "desktop"],
    tr: "Mert, C# ve Unity ile masaüstü oyunları tasarlıyor. 2025’te C# Programlama ve yüz yüze Unity ile Oyun Geliştirme eğitimlerini tamamladı.",
    en: "Mert designs desktop games with C# and Unity. In 2025, he completed courses in C# programming and an in-person Unity game development workshop.",
    source: "CV · Kişisel Bilgiler"
  },
  {
    keywords: ["satranç", "chess", "basketbol", "basketball", "spor", "sport", "hobi", "hobby", "ilgi", "boş zaman", "free time"],
    tr: "Geçmişte satranç ve basketbolu profesyonel düzeyde oynadı; bugün sporculuk kariyerini satranç alanında sürdürüyor. Teknoloji dışında İngilizce çeviri ve konuşma pratiğine de zaman ayırıyor.",
    en: "He previously played chess and basketball professionally and currently continues his athletic career in chess. Outside technology, he also spends time practicing English translation and speaking.",
    source: "CV · Kişisel Bilgiler"
  },
  {
    keywords: ["ingilizce", "english", "dil", "language", "b1"],
    tr: "CV’sine göre İngilizce seviyesi B1. Seviyesini geliştirmek için düzenli olarak metin çevirileri ve konuşma pratiği yapıyor.",
    en: "According to his résumé, his English level is B1. He regularly practices text translation and speaking to improve it.",
    source: "CV · Diller"
  },
  {
    keywords: ["farklı", "different", "kim", "who", "hakkında", "about", "tanı", "özellik", "akademik geçmiş", "academic background", "teknik geçmiş", "technical background", "kendini", "kısaca", "şu anda", "currently", "ne üzerinde çalışıyor", "çalışma alanları", "uzmanlık alanları", "fields of work"],
    tr: "Mert’i farklı kılan şey, bilgisayar mühendisliği altyapısını endüstri mühendisliği, yapay zekâ araştırması ve ürün geliştirmeyle birleştirmesi. Mobil uygulama, veri, arayüz ve oyun geliştirme gibi farklı alanlara merakla yaklaşırken satrançtan gelen analitik disiplini de sürdürüyor.",
    en: "What makes Mert distinctive is how he combines a computer engineering background with industrial engineering, AI research and product development. His curiosity spans mobile, data, interfaces and games, supported by the analytical discipline of chess.",
    source: "CV · Genel Profil"
  },
  {
    keywords: [
      "project", "projects", "portfolio", "github", "repository", "repositories",
      "source code", "public code", "experimental work"
    ],
    tr: "Mert’in güncel kodları, deneysel çalışmaları ve herkese açık projeleri GitHub profilinde yer almaktadır.",
    en: "You can explore Mert’s current code, experimental work and public projects on his GitHub profile: https://github.com/mertsurucu1",
    source: "GitHub · Projeler"
  },
  {
    keywords: [
      "current job", "currently employed", "work now", "where does mert work",
      "job offer", "job offers", "open to work", "available for work", "hiring"
    ],
    tr: "Mert şu anda aktif olarak bir kurumda çalışmamaktadır ve uygun iş tekliflerine açıktır.",
    en: "Mert is not currently employed by an organization. He is open to suitable job offers and professional opportunities in software development, data analysis, artificial intelligence and related fields.",
    source: "Güncel Çalışma Durumu"
  },
  {
    keywords: ["iletişim", "contact", "email", "e-posta", "github", "linkedin", "ulaş", "website", "web sitesi", "mertsurucu.com"],
    tr: "Mert’e kamertsurucu@gmail.com adresinden ulaşabilirsin. Kişisel sitesi mertsurucu.com, GitHub kullanıcı adı mertsurucu1 ve LinkedIn profili /in/mertsurucu1 adresindedir.",
    en: "You can reach Mert via email at kamertsurucu@gmail.com, LinkedIn at https://linkedin.com/in/mertsurucu1, GitHub at https://github.com/mertsurucu1 or his website at https://mertsurucu.com.",
    source: "CV · İletişim"
  },
  {
    keywords: ["sertifika", "sertifikalar", "certificate", "certificates", "kurs", "course", "eğitim", "eğitimler", "training", "etik", "ethics", "git eğitimi", "github eğitimi"],
    tr: "Mert’in Web of Science (04.03.2024), Git ve GitHub (04.05.2024), ProQuest (26.11.2024), girişimcilik (26.12.2024), bilgi teknolojileri (04.05.2025), C# (30.08.2025), Unity ile oyun geliştirme (28.09.2025) ve yapay zekânın etik kullanımı (11.02.2026) alanlarında katılım sertifikaları bulunuyor.",
    en: "Mert holds participation certificates in Web of Science (04 Mar 2024), Git and GitHub (04 May 2024), ProQuest (26 Nov 2024), entrepreneurship (26 Dec 2024), information technologies (04 May 2025), C# (30 Aug 2025), Unity game development (28 Sep 2025) and ethical AI use (11 Feb 2026).",
    source: "CV · Sertifikalar"
  },
  {
    keywords: ["frontend", "front end", "react", "tailwind", "bootstrap", "web teknolojileri", "web technologies"],
    tr: "Web tarafında HTML, CSS, JavaScript, React, Bootstrap ve Tailwind ile çalışıyor. Ajans deneyiminde gerçek web arayüzleri geliştirirken Figma ve Adobe araçlarıyla tasarım sürecine de katkı verdi.",
    en: "On the web, he works with HTML, CSS, JavaScript, React, Bootstrap and Tailwind. During his agency experience, he built real web interfaces and also contributed to design using Figma and Adobe tools.",
    source: "CV · Yetenekler & Deneyim"
  },
  {
    keywords: ["programlama dilleri", "programming languages", "hangi dilleri", "java", "c++", "c#", "javascript"],
    tr: "CV’sinde Java, C++, Python, JavaScript, C#, Swift ve Kotlin yer alıyor. Ayrıca Dart tabanlı Flutter ve JavaScript tabanlı React Native ile mobil geliştirme deneyimi bulunuyor.",
    en: "His résumé lists Java, C++, Python, JavaScript, C#, Swift and Kotlin. He also has mobile experience with Dart-based Flutter and JavaScript-based React Native.",
    source: "CV · Yetenekler"
  },
  {
    keywords: ["office", "excel", "word", "powerpoint", "microsoft"],
    tr: "Mert, akademik çalışmalarında Microsoft Excel, Word ve PowerPoint’i düzenli olarak kullanıyor.",
    en: "Mert regularly uses Microsoft Excel, Word and PowerPoint for academic work.",
    source: "CV · Yetenekler"
  }
];

// Natural English question patterns also feed the correction vocabulary.
const englishQuestionPatterns = [
  "who are you",
  "who is Mert",
  "what does Mert do",
  "tell me about Mert",
  "how can I contact Mert",
  "what is Mert email address",
  "where is Mert LinkedIn profile",
  "where is Mert GitHub profile",
  "what projects has Mert worked on",
  "show me Mert projects",
  "where does Mert work now",
  "is Mert open to work",
  "what is Mert education",
  "what is Mert experience",
  "what technologies does Mert use",
  "what is Mert thesis about",
  "what certificates does Mert have",
  "what is Mert English level",
  "what are Mert interests"
];

/* ==========================================================================
   Runtime state and DOM references
   ========================================================================== */

const state = { lang: "tr", busy: false };
const chatLog = document.querySelector("#chatLog");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const langToggle = document.querySelector(".lang-toggle");
const siteLoader = document.querySelector("#siteLoader");
const app = document.querySelector("#app");

/* ==========================================================================
   JSON knowledge-base loader
   data/qa.json contains the approved canonical questions, alternatives and
   answers. Keeping content outside app.js makes the retrieval code readable.
   ========================================================================== */

/** Loads the public knowledge base before the opening animation is dismissed. */
async function loadKnowledgeBase() {
  try {
    const response = await fetch("./data/qa.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(`Bilgi bankası yüklenemedi (${response.status})`);
    const entries = await response.json();
    if (!entries.length) throw new Error("Bilgi bankasında geçerli kayıt bulunamadı");
    window.MERT_QA = entries;
  } catch (error) {
    console.error(error);
    window.MERT_QA = [];
  }
}

function formatMessageTime() {
  return new Intl.DateTimeFormat(state.lang === "tr" ? "tr-TR" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

/* ==========================================================================
   Turkish and English normalization with conservative spelling correction
   ========================================================================== */

/**
 * Produces a comparison-safe form: lowercase, accent-free and punctuation-free.
 * A few common chat abbreviations are expanded before fuzzy correction starts.
 */
function normalize(value) {
  return value
    .replace(/c\+\+/gi, "cplusplus")
    .replace(/c#/gi, "csharp")
    .replace(/\bingilzce\b/gi, "ingilizce")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/\bmert(?:in|i|e|le|ten)?\b/g, "mert")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\b(?:sn|snn)\b/g, "sen")
    .replace(/\b(?:kimsn|kimsnz)\b/g, "kimsin")
    .replace(/\b(?:slm|selamlar)\b/g, "selam")
    .replace(/\b(?:mrb|mrhba)\b/g, "merhaba")
    .replace(/\b(?:nsl|nasl)\b/g, "nasil")
    .replace(/\b(?:nasilsn|nasilsiniz)\b/g, "nasilsin")
    .replace(/\b(?:tsk|tşk|tesekur)\b/g, "tesekkur")
    .replace(/\b(?:tesekurler|tesekrler)\b/g, "tesekkurler")
    .replace(/\b(?:linkedn|linkdin)\b/g, "linkedin")
    .replace(/\b(?:githb|gitub)\b/g, "github")
    .replace(/\b(?:profli|profl)\b/g, "profil")
    .replace(/\bu\b/g, "you")
    .replace(/\bur\b/g, "your")
    .replace(/\br\b/g, "are")
    .replace(/\b(?:wht|wat)\b/g, "what")
    .replace(/\b(?:hw|howw)\b/g, "how")
    .replace(/\b(?:wher|whr)\b/g, "where")
    .replace(/\bcn\b/g, "can")
    .replace(/\bds\b/g, "does")
    .replace(/\bwrk\b/g, "work")
    .replace(/\b(?:cntct|contct)\b/g, "contact")
    .replace(/\b(?:abt)\b/g, "about")
    .replace(/\bedu\b/g, "education")
    .replace(/\bexp\b/g, "experience")
    .replace(/\btech\b/g, "technology")
    .replace(/\b(?:pls|plz)\b/g, "please")
    .replace(/\b(?:thx|tnx)\b/g, "thanks")
    .replace(/\b(?:im)\b/g, "i am");
}

const stopWords = new Set([
  "mert", "kagan", "kağan", "surucu", "sürücü", "nedir", "nelerdir", "neler", "ne",
  "hangi", "nasil", "nasıl", "mi", "mı", "mu", "mü", "midir", "mıdır",
  "mudur", "müdür", "var", "hakkinda", "hakkında", "gibi", "bir", "bu",
  "su", "şu", "anda", "ile", "icin", "için", "ve", "veya", "da", "de",
  "misin", "mısın", "musun", "müsün", "anlatabilir", "verebilir",
  "kurarim", "kurarım", "kurabilirim",
  "what", "who", "where", "when", "why", "how", "is", "are", "does", "do",
  "did", "can", "could", "would", "please", "tell", "show", "me", "about",
  "the", "his", "he", "of", "in", "on", "at", "from", "a", "an", "to", "for"
].map(normalize));

function meaningfulTokens(value) {
  return normalize(value)
    .split(/\s+/)
    .map((token) => {
      if (/^ulas/.test(token)) return "ulas";
      if (/^iletisim/.test(token)) return "iletisim";
      if (/^baglanti/.test(token)) return "baglanti";
      if (/^calis/.test(token)) return "calis";
      if (/^gelistir/.test(token)) return "gelistir";
      if (/^egitim/.test(token)) return "egitim";
      if (/^sertifika/.test(token)) return "sertifika";
      if (/^proje/.test(token)) return "proje";
      if (/^deneyim/.test(token)) return "deneyim";
      if (/^kariyer/.test(token)) return "kariyer";
      if (/^site/.test(token)) return "site";
      if (/^(ogren|bilgi|bulun)/.test(token)) return "bilgi";
      if (/^hobi/.test(token)) return "hobi";
      if (/^yas/.test(token)) return "yas";
      if (/^yap/.test(token)) return "yap";
      if (/^kullanici/.test(token)) return "kullanici";
      if (/^hesap/.test(token)) return "hesap";
      if (/^adres/.test(token)) return "adres";
      if (/^profil/.test(token)) return "profil";
      if (/^project/.test(token)) return "project";
      if (/^experien/.test(token)) return "experience";
      if (/^educat/.test(token)) return "education";
      if (/^technolog/.test(token)) return "technology";
      if (/^certificat/.test(token)) return "certificate";
      if (/^contact/.test(token)) return "contact";
      if (/^work/.test(token)) return "work";
      return token;
    })
    .filter((token) => token.length > 1 && !stopWords.has(token));
}

/**
 * Restricted Damerau-Levenshtein distance.
 * Unlike plain edit distance, adjacent letter swaps such as "satarnc" are
 * counted as one mistake, which is common on mobile keyboards.
 */
function transpositionDistance(left, right) {
  const rows = Array.from(
    { length: left.length + 1 },
    () => new Array(right.length + 1).fill(0)
  );

  for (let leftIndex = 0; leftIndex <= left.length; leftIndex += 1) {
    rows[leftIndex][0] = leftIndex;
  }
  for (let rightIndex = 0; rightIndex <= right.length; rightIndex += 1) {
    rows[0][rightIndex] = rightIndex;
  }

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const substitutionCost = left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1;
      rows[leftIndex][rightIndex] = Math.min(
        rows[leftIndex - 1][rightIndex] + 1,
        rows[leftIndex][rightIndex - 1] + 1,
        rows[leftIndex - 1][rightIndex - 1] + substitutionCost
      );

      if (
        leftIndex > 1
        && rightIndex > 1
        && left[leftIndex - 1] === right[rightIndex - 2]
        && left[leftIndex - 2] === right[rightIndex - 1]
      ) {
        rows[leftIndex][rightIndex] = Math.min(
          rows[leftIndex][rightIndex],
          rows[leftIndex - 2][rightIndex - 2] + 1
        );
      }
    }
  }

  return rows[left.length][right.length];
}

let cachedCorrectionVocabulary = null;

/**
 * Builds the correction dictionary from the actual QA questions and categories.
 * It is cached after first use; adding a question automatically expands it.
 */
function correctionVocabulary() {
  if (cachedCorrectionVocabulary) return cachedCorrectionVocabulary;

  const phrases = [
    "sen kimsin merhaba selam nasılsın teşekkür yardım ne sorabilirim",
    "linkedin github profil e-posta iletişim ulaşabilirim",
    ...englishQuestionPatterns,
    ...knowledge.flatMap((item) => item.keywords),
    ...(Array.isArray(window.MERT_QA)
      ? window.MERT_QA.flatMap((item) => [
          item.question,
          item.category,
          ...(item.alternatives ?? [])
        ])
      : [])
  ];

  cachedCorrectionVocabulary = [...new Set(
    phrases
      .flatMap((phrase) => normalize(phrase).split(/\s+/))
      .filter((token) => token.length >= 3)
  )];

  return cachedCorrectionVocabulary;
}

function correctionLimit(tokenLength) {
  if (tokenLength <= 3) return 0;
  if (tokenLength <= 5) return 1;
  return 2;
}

function correctToken(token, vocabulary) {
  if (token.length <= 3 || vocabulary.includes(token) || /\d/u.test(token)) return token;

  const limit = correctionLimit(token.length);
  let bestDistance = limit + 1;
  let bestCandidates = [];

  vocabulary.forEach((candidate) => {
    if (Math.abs(candidate.length - token.length) > limit) return;
    const distance = transpositionDistance(token, candidate);
    const ratio = distance / Math.max(token.length, candidate.length);
    if (distance > limit || ratio > 0.3) return;

    if (distance < bestDistance) {
      bestDistance = distance;
      bestCandidates = [candidate];
    } else if (distance === bestDistance) {
      bestCandidates.push(candidate);
    }
  });

  return bestCandidates.length === 1 ? bestCandidates[0] : token;
}

/**
 * Corrects only a uniquely close word. Ambiguous or distant words are kept
 * unchanged so the assistant cannot silently turn nonsense into a valid intent.
 */
function correctQuery(value) {
  const normalized = normalize(value)
    .replace(/\b(\p{L}{2,}(?:yor|di|mis|bilir|olur|var|yok))(?:mi|mu)\b/gu, "$1 mi")
    .replace(/\s+/g, " ")
    .trim();
  const vocabulary = correctionVocabulary();

  return normalized
    .split(" ")
    .map((token) => correctToken(token, vocabulary))
    .join(" ");
}

/**
 * Requires most meaningful words to belong to the controlled vocabulary.
 * This blocks false positives such as "python muz" or "linkedin patates".
 */
function hasSufficientKnownLanguage(value) {
  const vocabularyItems = correctionVocabulary();
  const vocabulary = new Set(vocabularyItems);
  const vocabularyStems = new Set(vocabularyItems.flatMap(meaningfulTokens));
  const tokens = normalize(value)
    .split(/\s+/)
    .filter((token) => token.length > 2 && !stopWords.has(token));

  if (tokens.length < 2) return true;
  const knownCount = tokens.filter((token) =>
    vocabulary.has(token)
    || meaningfulTokens(token).some((stem) => vocabularyStems.has(stem))
  ).length;
  return knownCount / tokens.length > 0.5;
}

/* ==========================================================================
   Retrieval scoring
   Exact JSON question matches are handled first in retrieve(); these helpers rank
   only differently worded questions.
   ========================================================================== */

function tokenSimilarity(queryToken, targetToken) {
  if (queryToken === targetToken) return 5;
  if (queryToken.length >= 5 && targetToken.length >= 5) {
    const tolerance = Math.max(queryToken.length, targetToken.length) >= 7 ? 2 : 1;
    if (transpositionDistance(queryToken, targetToken) <= tolerance) return 3;
  }
  return 0;
}

/** Scores token similarity, phrase containment and category overlap. */
function scoreQuestion(query, item) {
  const queryTokens = meaningfulTokens(query);
  if (!queryTokens.length) return 0;

  const alternatives = item.alternatives ?? [];
  const normalizedQuery = normalize(query).trim();
  const normalizedCanonical = normalize(item.question);
  const phrasings = [item.question, ...alternatives];

  const phraseScores = phrasings.map((phrasing) => {
    const targetTokens = meaningfulTokens(phrasing);
    let matched = 0;
    let score = 0;

    queryTokens.forEach((queryToken) => {
      const bestTokenScore = targetTokens.reduce(
        (best, targetToken) => Math.max(best, tokenSimilarity(queryToken, targetToken)),
        0
      );
      if (bestTokenScore) matched += 1;
      score += bestTokenScore;
    });

    const coverage = matched / queryTokens.length;
    if (coverage < 0.5) return 0;

    const normalizedPhrasing = normalize(phrasing);
    if (normalizedQuery.length >= 5 && normalizedPhrasing.includes(normalizedQuery)) {
      score += 8;
    }

    return score + coverage * 4;
  });

  let bestScore = Math.max(0, ...phraseScores);
  if (normalizedQuery.length >= 5 && normalizedCanonical.includes(normalizedQuery)) {
    bestScore += 4;
  }

  const categoryTokens = meaningfulTokens(item.category);
  if (queryTokens.some((token) => categoryTokens.includes(token))) bestScore += 2;

  return bestScore;
}

/** Adds small domain-specific boosts where generic words could be ambiguous. */
function intentBonus(query, item) {
  const normalizedQuery = normalize(query);
  const queryTokens = meaningfulTokens(query);
  const normalizedQuestion = normalize(item.question);
  const normalizedCategory = normalize(item.category);
  const hasToken = (...tokens) => tokens.some((token) => queryTokens.includes(token));
  let bonus = 0;

  const asksGithubAccount = normalizedQuery.includes("github")
    && hasToken("adres", "hesap", "kullanici", "profil", "baglanti")
    && !hasToken("proje", "repo", "kod");
  if (asksGithubAccount && normalizedQuestion.includes("github hesabi")) bonus += 18;

  const asksGeneralProjects = hasToken("proje", "repo", "kod")
    && !hasToken("tez", "bitirme", "kimlik", "arastirma", "tuyan", "staj");
  if (asksGeneralProjects && normalizedQuestion.includes("github hesabi")) bonus += 16;

  const asksSiteContent = hasToken("site", "bilgi");
  if (asksSiteContent && normalizedQuestion.includes("bu sitede hangi bilgiler")) bonus += 14;

  const thesisTerms = ["tez", "lora", "qwen", "kumru", "distillation", "rouge", "bleu", "meteor"];
  if (
    thesisTerms.some((term) => normalizedQuery.includes(term))
    && normalizedQuestion.includes("tez calismasi")
  ) bonus += 18;

  const mobileTerms = ["mobil", "android", "ios", "swift", "swiftui", "uikit", "kotlin", "flutter"];
  if (
    mobileTerms.some((term) => normalizedQuery.includes(term))
    && normalizedCategory.includes("yazilim ve teknik beceriler")
  ) bonus += 12;

  const technicalTerms = [
    "python", "firebase", "firestore", "matlab", "unity", "tensorflow",
    "scikit", "react", "tailwind", "supabase", "postgresql", "mysql"
  ];
  if (
    technicalTerms.some((term) => normalizedQuery.includes(term))
    && normalizedCategory.includes("yazilim ve teknik beceriler")
  ) bonus += 10;

  return bonus;
}

/* ==========================================================================
   Safe link extraction
   Text is still inserted with text nodes; detected addresses become explicit
   anchors and CTA buttons without using untrusted HTML.
   ========================================================================== */

const linkPattern = /https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[a-z]{2,}|(?:www\.)?(?:linkedin\.com|github\.com|mertsurucu\.com|ukd\.tsf\.org\.tr)(?:\/[^\s]*)?/giu;

function cleanLinkText(value) {
  return value.replace(/[),.;!?]+$/u, "");
}

function linkHref(value) {
  if (value.includes("@") && !/^https?:\/\//iu.test(value)) return `mailto:${value}`;
  if (/^https?:\/\//iu.test(value)) return value;
  return `https://${value}`;
}

function linkLabel(href) {
  if (href.startsWith("mailto:")) return "E-posta gönder";
  if (href.includes("linkedin.com")) return "LinkedIn profilini aç";
  if (href.includes("github.com")) return "GitHub profilini aç";
  if (href.includes("mertsurucu.com")) return "Web sitesini aç";
  if (href.includes("tsf.org.tr")) return "Satranç kaydını aç";
  return "İlgili bağlantıyı aç";
}

function extractLinks(text) {
  const links = [];
  const seen = new Set();

  for (const match of text.matchAll(linkPattern)) {
    const visibleText = cleanLinkText(match[0]);
    const href = linkHref(visibleText);
    if (!visibleText || seen.has(href)) continue;
    seen.add(href);
    links.push({ visibleText, href, label: linkLabel(href) });
  }

  return links;
}

function knowledgeResult(item) {
  const links = extractLinks(item.answer);
  return {
    answer: item.answer,
    cta: links.map(({ label, href }) => ({ label, href }))
  };
}

/* ==========================================================================
   Conversation and answer selection
   Flow: conversation → exact QA → fuzzy QA → safe no-information response.
   ========================================================================== */

function conversationalReply(query) {
  const normalized = correctQuery(query);
  const is = (phrases) => phrases.some((phrase) => normalized === normalize(phrase));
  const includes = (phrases) => phrases.some((phrase) => normalized.includes(normalize(phrase)));

  if (is(["merhaba", "selam", "hey", "hello", "hi", "günaydın", "iyi akşamlar"])) {
    return {
      answer: state.lang === "tr"
        ? "Merhaba! Ben Mert’in kişisel asistanıyım. Eğitimi, deneyimleri, teknik becerileri, tez çalışması veya ilgi alanları hakkında sana yardımcı olabilirim."
        : "Hello! I’m Mert’s personal assistant. I can help with his education, experience, technical skills, thesis and interests."
    };
  }

  if (is(["sen", "kimsin"]) || includes(["sen kimsin", "kimsin sen", "who are you"])) {
    return {
      answer: state.lang === "tr"
        ? "Ben Mert’in kişisel dijital asistanıyım. Yalnızca Mert tarafından sağlanan ve doğrulanan bilgilerle cevap veririm; bilmediğim konularda tahmin yürütmem."
        : "I’m Mert’s personal digital assistant. I answer only with information provided and approved by Mert, and I don’t guess."
    };
  }

  if (includes(["nasılsın", "nasilsin", "how are you"])) {
    return {
      answer: state.lang === "tr"
        ? "Teşekkür ederim, yardıma hazırım. Mert hakkında ne öğrenmek istersin?"
        : "I’m ready to help, thank you. What would you like to know about Mert?"
    };
  }

  if (includes(["teşekkür", "tesekkur", "sağ ol", "sag ol", "thanks", "thank you"])) {
    return {
      answer: state.lang === "tr"
        ? "Rica ederim. Mert hakkında başka bir sorun olursa buradayım."
        : "You’re welcome. I’m here if you have another question about Mert."
    };
  }

  if (includes(["ne sorabilirim", "ne sor", "nasıl yardımcı", "nasil yardimci", "yardım", "yardim", "what can i ask", "help"])) {
    return {
      answer: state.lang === "tr"
        ? "Mert’in eğitimi, yüksek lisans tezi, yapay zekâ çalışmaları, yazılım deneyimi, kullandığı teknolojiler, sertifikaları, spor geçmişi ve iletişim bilgileri hakkında soru sorabilirsin."
        : "You can ask about Mert’s education, master’s thesis, AI work, software experience, technologies, certificates, sports background and contact details."
    };
  }

  return null;
}

/**
 * Finds the best approved answer without generating new personal information.
 * @param {string} question User input.
 * @returns {{answer: string, source?: string, cta?: {label: string, href: string}[] | null}}
 */
function retrieve(question) {
  const correctedQuestion = correctQuery(question);
  const query = normalize(correctedQuestion);
  const hasAny = (words) => words.some((word) => query.includes(normalize(word)));
  const conversation = conversationalReply(correctedQuestion);

  if (conversation) return conversation;

  if (state.lang === "tr" && Array.isArray(window.MERT_QA)) {
    const normalizedExactQuery = normalize(question).replace(/\s+/g, " ").trim();
    const exactItem = [...window.MERT_QA].reverse().find((item) =>
      [item.question, ...(item.alternatives ?? [])].some(
        (phrase) => normalize(phrase).replace(/\s+/g, " ").trim() === normalizedExactQuery
      )
    );

    if (exactItem) return knowledgeResult(exactItem);

    const queryTokens = meaningfulTokens(correctedQuestion);
    const asksGeneralContact = ["ulas", "iletisim", "baglanti"].some(
      (token) => queryTokens.includes(token)
    ) && !hasAny(["site", "web", "github", "linkedin", "mail", "e-posta", "kod", "proje"]);

    const rankedQuestions = window.MERT_QA
      .map((item) => {
        const isGeneralContactRecord = normalize(item.question)
          .includes("mert e nasil ulasabilirim");
        return {
          item,
          score: scoreQuestion(correctedQuestion, item)
            + intentBonus(correctedQuestion, item)
            + (asksGeneralContact && isGeneralContactRecord ? 12 : 0)
        };
      })
      .sort((left, right) => right.score - left.score);
    const best = rankedQuestions[0];

    if (best && best.score >= 7 && hasSufficientKnownLanguage(correctedQuestion)) {
      return knowledgeResult(best.item);
    }
  }

  if (state.lang === "tr") {
    return {
      answer: "Bu konuda Mert tarafından doğrulanmış bir bilgim bulunmuyor. Yanlış yönlendirmemek için tahmin yürütmeyeceğim. Mert’in eğitimi, deneyimleri, teknik becerileri veya çalışmaları hakkında başka bir şey sorabilirsin.",
      source: "Bilgi bulunamadı",
      cta: null
    };
  }

  const scored = knowledge.map((item) => {
    const score = item.keywords.reduce((total, keyword) => {
      const normalizedKeyword = normalize(keyword).trim();
      if (normalizedKeyword.length < 2) return total;
      return total + (query.includes(normalizedKeyword) ? Math.max(2, normalizedKeyword.split(" ").length * 2) : 0);
    }, 0);
    return { item, score };
  }).sort((a, b) => b.score - a.score);

  if (
    !scored[0]
    || scored[0].score === 0
    || !hasSufficientKnownLanguage(correctedQuestion)
  ) {
    return {
      answer: state.lang === "tr"
        ? "Bu konuda Mert tarafından doğrulanmış bir bilgim bulunmuyor. Yanlış yönlendirmemek için tahmin yürütmeyeceğim. Mert’in eğitimi, deneyimleri, teknik becerileri veya çalışmaları hakkında başka bir şey sorabilirsin."
        : "I don’t have enough approved information to answer this reliably. You can ask about Mert’s education, experience, technical skills or projects.",
      source: state.lang === "tr" ? "Bilgi bulunamadı" : "No approved source found",
      cta: null
    };
  }

  const result = knowledgeResult({ answer: scored[0].item[state.lang] });
  return { ...result, source: scored[0].item.source };
}

/* ==========================================================================
   Chat rendering and interactions
   ========================================================================== */

function appendMessage(type, text, _source = "", cta = null) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${type}`;
  const label = type === "user"
    ? `${state.lang === "tr" ? "SEN" : "YOU"} · ${formatMessageTime()}`
    : formatMessageTime();
  const assistantAvatar = type === "assistant"
    ? `
      <span class="assistant-avatar" aria-hidden="true">
        <img src="./public/assets/assistant-robot.gif" alt="" />
      </span>
    `
    : "";

  const safeText = document.createElement("p");
  let cursor = 0;
  for (const match of text.matchAll(linkPattern)) {
    const visibleText = cleanLinkText(match[0]);
    const matchEnd = match.index + visibleText.length;
    safeText.appendChild(document.createTextNode(text.slice(cursor, match.index)));

    const inlineLink = document.createElement("a");
    inlineLink.href = linkHref(visibleText);
    inlineLink.textContent = visibleText;
    if (inlineLink.href.startsWith("http")) {
      inlineLink.target = "_blank";
      inlineLink.rel = "noreferrer";
    }
    safeText.appendChild(inlineLink);
    cursor = matchEnd;
  }
  safeText.appendChild(document.createTextNode(text.slice(cursor)));
  wrapper.innerHTML = `${assistantAvatar}<div class="message-label">${label}</div>`;
  wrapper.appendChild(safeText);

  const actions = Array.isArray(cta) ? cta : (cta ? [cta] : []);
  if (actions.length) {
    const actionGroup = document.createElement("div");
    actionGroup.className = "message-actions";
    actions.forEach((action) => {
      const link = document.createElement("a");
      link.className = "message-cta";
      link.href = action.href;
      link.textContent = `${action.label} ↗`;
      if (action.href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      actionGroup.appendChild(link);
    });
    wrapper.appendChild(actionGroup);
  }

  chatLog.appendChild(wrapper);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function appendTyping() {
  const wrapper = document.createElement("div");
  wrapper.className = "message assistant";
  wrapper.id = "typing";
  wrapper.innerHTML = `
    <span class="assistant-avatar" aria-hidden="true">
      <img src="./public/assets/assistant-robot.gif" alt="" />
    </span>
    <div class="message-label">${formatMessageTime()}</div>
    <p class="typing"><i></i><i></i><i></i></p>
  `;
  chatLog.appendChild(wrapper);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function ask(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion || state.busy) return;
  state.busy = true;
  appendMessage("user", cleanQuestion);
  chatInput.value = "";
  appendTyping();

  window.setTimeout(() => {
    document.querySelector("#typing")?.remove();
    const result = retrieve(cleanQuestion);
    appendMessage("assistant", result.answer, result.source, result.cta);
    state.busy = false;
    chatInput.focus();
  }, 620);
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  ask(chatInput.value);
});

document.querySelectorAll("#promptChips button").forEach((button) => {
  button.addEventListener("click", () => {
    ask(button.dataset[`question${state.lang === "tr" ? "Tr" : "En"}`]);
  });
});

langToggle.addEventListener("click", () => {
  state.lang = state.lang === "tr" ? "en" : "tr";
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-tr][data-en]").forEach((node) => {
    node.textContent = node.dataset[state.lang];
  });

  document.querySelectorAll(".lang-toggle span").forEach((node) => {
    node.classList.toggle("active", node.textContent.toLocaleLowerCase() === state.lang);
  });

  chatInput.placeholder = chatInput.dataset[`placeholder${state.lang === "tr" ? "Tr" : "En"}`];
});

let introStarted = false;

function startIntro() {
  if (introStarted) return;
  introStarted = true;
  state.busy = true;
  appendTyping();

  window.setTimeout(() => {
    document.querySelector("#typing")?.remove();
    appendMessage(
      "assistant",
      state.lang === "tr"
        ? "Merhaba, ben Mert’in kişisel asistanıyım. Sana hangi konuda yardımcı olabilirim?"
        : "Hello, I’m Mert’s personal assistant. How can I help you?"
    );
    state.busy = false;
    if (
      typeof window.matchMedia !== "function"
      || window.matchMedia("(pointer: fine)").matches
    ) {
      chatInput.focus();
    }
  }, 520);
}

function revealApp() {
  siteLoader?.classList.add("is-hidden");
  app?.classList.remove("is-loading");
  app?.classList.add("is-ready");
  window.setTimeout(startIntro, 180);
}

// The loader also gives the JSON request enough time to complete.
if (typeof window.addEventListener === "function") {
  window.addEventListener("load", async () => {
    await loadKnowledgeBase();
    window.setTimeout(revealApp, 1050);
  });
}

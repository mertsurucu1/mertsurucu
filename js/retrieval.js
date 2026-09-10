export const MAX_QUERY_LENGTH = 280;
const MAX_TOPICS = 100;
const MAX_TEXT_LENGTH = 5000;
const UI_KEYS = [
  "greeting", "unknown", "loadError", "typing", "you",
  "linkEmail", "linkLinkedIn", "linkGitHub", "linkChess", "linkGeneric"
];

const stopWords = new Set([
  "mert", "kagan", "surucu", "nedir", "nelerdir", "neler", "ne", "hangi",
  "nasil", "mi", "midir", "var", "hakkinda", "gibi", "bir", "bu", "su",
  "anda", "ile", "icin", "ve", "veya", "da", "de", "anlat", "anlatir",
  "what", "who", "where", "when", "why", "how", "is", "are", "does", "do",
  "did", "can", "could", "would", "please", "tell", "show", "me", "about",
  "the", "his", "he", "of", "in", "on", "at", "from", "a", "an", "to", "for"
]);

const tokenStems = [
  [/^ulas/u, "ulas"], [/^iletisim/u, "iletisim"], [/^baglanti/u, "baglanti"],
  [/^eris/u, "iletisim"], [/^irtibat/u, "iletisim"], [/^calis/u, "calis"],
  [/^gelistir/u, "gelistir"], [/^egitim/u, "egitim"], [/^mezun/u, "mezun"],
  [/^okul/u, "okul"], [/^ogren/u, "ogrenim"], [/^universit/u, "universite"],
  [/^akadem/u, "akademik"], [/^lisans/u, "lisans"], [/^sertifika/u, "sertifika"],
  [/^proje/u, "proje"], [/^deneyim/u, "deneyim"], [/^tecrub/u, "deneyim"],
  [/^kariyer/u, "kariyer"], [/^site/u, "site"], [/^hobi/u, "hobi"],
  [/^yas/u, "yas"], [/^dog/u, "dogum"], [/^kullanici/u, "kullanici"],
  [/^hesap/u, "hesap"], [/^adres/u, "adres"], [/^profil/u, "profil"],
  [/^project/u, "project"], [/^experien/u, "experience"], [/^educat/u, "education"],
  [/^technolog/u, "technology"], [/^certificat/u, "certificate"],
  [/^contact/u, "contact"], [/^work/u, "work"], [/^graduat/u, "graduate"],
  [/^school/u, "school"], [/^stud/u, "study"], [/^career/u, "career"],
  [/^employ/u, "employment"], [/^intern/u, "internship"], [/^skill/u, "skill"],
  [/^competenc/u, "skill"], [/^capabilit/u, "skill"], [/^hobb/u, "interest"],
  [/^interest/u, "interest"], [/^sport/u, "sport"], [/^athlet/u, "sport"],
  [/^birth/u, "birth"], [/^born/u, "birth"], [/^birthday/u, "birth"],
  [/^reach/u, "contact"], [/^build/u, "project"], [/^built/u, "project"],
  [/^repos/u, "repository"], [/^veritaban/u, "veritabani"], [/^tasar/u, "tasarim"]
];

export function normalizeText(value) {
  return String(value ?? "")
    .slice(0, MAX_QUERY_LENGTH)
    .toLocaleLowerCase("tr-TR")
    .replace(/c\+\+/giu, "cplusplus")
    .replace(/c#/giu, "csharp")
    .replace(/(?<!\p{L})iş(?:i|ler|te|ten)?(?!\p{L})/giu, "meslek")
    .replace(/\btezz+\b/gu, "tez")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/ı/gu, "i")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\b(?:sn|snn)\b/gu, "sen")
    .replace(/\b(?:kimsn|kimsnz)\b/gu, "kimsin")
    .replace(/\b(?:slm|selamlar|mrb|mrhba)\b/gu, "merhaba")
    .replace(/\b(?:nsl|nasl)\b/gu, "nasil")
    .replace(/\b(?:linkedn|linkdin)\b/gu, "linkedin")
    .replace(/\b(?:githb|gitub)\b/gu, "github")
    .replace(/\b(?:wht|wat)\b/gu, "what")
    .replace(/\b(?:wher|whr)\b/gu, "where")
    .replace(/\b(?:cntct|contct)\b/gu, "contact")
    .replace(/\s+/gu, " ")
    .trim();
}

function stemToken(token) {
  const match = tokenStems.find(([pattern]) => pattern.test(token));
  return match ? match[1] : token;
}

export function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .map(stemToken)
    .filter((token) => token.length > 1 && !stopWords.has(token))
    .slice(0, 32);
}

function editDistance(left, right) {
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  const current = new Array(right.length + 1);

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    current[0] = leftIndex;
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const substitution = previous[rightIndex - 1]
        + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1);
      current[rightIndex] = Math.min(
        previous[rightIndex] + 1,
        current[rightIndex - 1] + 1,
        substitution
      );
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[right.length];
}

function correctionLimit(length) {
  if (length <= 3) return 0;
  if (length <= 5) return 1;
  return 2;
}

function isText(value, maxLength = MAX_TEXT_LENGTH) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function isStringList(value, maxItems = 100) {
  return Array.isArray(value)
    && value.length > 0
    && value.length <= maxItems
    && value.every((item) => isText(item, 300));
}

function validateTopic(topic, ids) {
  if (!topic || typeof topic !== "object" || Array.isArray(topic)) return false;
  if (!/^[a-z0-9_]+$/u.test(topic.id) || ids.has(topic.id)) return false;
  ids.add(topic.id);

  return isText(topic.category, 120)
    && isStringList(topic.tags, 20)
    && isStringList(topic.keywords?.tr)
    && isStringList(topic.keywords?.en)
    && isStringList(topic.questions?.tr)
    && isStringList(topic.questions?.en)
    && isText(topic.answers?.tr)
    && isText(topic.answers?.en)
    && isText(topic.source, 200);
}

function validateSmallTalk(item, ids) {
  if (!item || typeof item !== "object" || !/^[a-z0-9_]+$/u.test(item.id) || ids.has(item.id)) {
    return false;
  }
  ids.add(item.id);

  return isStringList(item.patterns, 30)
    && isText(item.answers?.tr, 500)
    && isText(item.answers?.en, 500);
}

export function validateKnowledgeBase(data) {
  const ids = new Set();
  const smallTalkIds = new Set();
  if (
    !data
    || data.schemaVersion !== 2
    || !Array.isArray(data.locales)
    || !data.locales.includes("tr")
    || !data.locales.includes("en")
    || !["tr", "en"].every((locale) => (
      data.ui?.[locale]
      && UI_KEYS.every((key) => isText(data.ui[locale][key], 500))
    ))
    || !Array.isArray(data.smallTalk)
    || data.smallTalk.length > 20
    || !data.smallTalk.every((item) => validateSmallTalk(item, smallTalkIds))
    || !Array.isArray(data.topics)
    || data.topics.length === 0
    || data.topics.length > MAX_TOPICS
    || !data.topics.every((topic) => validateTopic(topic, ids))
  ) {
    throw new TypeError("Bilgi bankası beklenen şemaya uymuyor.");
  }

  return data;
}

function buildVocabulary(topics) {
  const words = topics.flatMap((topic) => [
    ...topic.keywords.tr,
    ...topic.keywords.en,
    ...topic.questions.tr,
    ...topic.questions.en
  ]).flatMap((text) => normalizeText(text).split(" "));

  return [...new Set(words.filter((word) => word.length >= 2))];
}

function correctToken(token, vocabulary) {
  if (token.length <= 3 || vocabulary.has(token) || /\d/u.test(token)) return token;
  const limit = correctionLimit(token.length);
  let bestDistance = limit + 1;
  let bestCandidate = token;
  let candidateCount = 0;

  for (const candidate of vocabulary.byLength.get(token.length) ?? []) {
    const distance = editDistance(token, candidate);
    if (distance > limit || distance / Math.max(token.length, candidate.length) > 0.3) continue;
    if (distance < bestDistance) {
      bestDistance = distance;
      bestCandidate = candidate;
      candidateCount = 1;
    } else if (distance === bestDistance) {
      candidateCount += 1;
    }
  }

  for (const candidateLength of [token.length - 1, token.length + 1]) {
    for (const candidate of vocabulary.byLength.get(candidateLength) ?? []) {
      const distance = editDistance(token, candidate);
      if (distance > limit || distance / Math.max(token.length, candidate.length) > 0.3) continue;
      if (distance < bestDistance) {
        bestDistance = distance;
        bestCandidate = candidate;
        candidateCount = 1;
      } else if (distance === bestDistance) {
        candidateCount += 1;
      }
    }
  }

  return candidateCount === 1 ? bestCandidate : token;
}

function compileVocabulary(words) {
  const vocabulary = new Set(words);
  vocabulary.byLength = new Map();
  for (const word of words) {
    const bucket = vocabulary.byLength.get(word.length) ?? [];
    bucket.push(word);
    vocabulary.byLength.set(word.length, bucket);
  }
  return vocabulary;
}

function correctQuery(query, vocabulary) {
  return normalizeText(query)
    .split(" ")
    .map((token) => correctToken(token, vocabulary))
    .join(" ");
}

function compileTopic(topic, language) {
  const questions = topic.questions[language].map((text) => ({
    normalized: normalizeText(text),
    tokens: tokenize(text)
  }));
  const keywords = topic.keywords[language].map((text) => ({
    normalized: normalizeText(text),
    tokens: tokenize(text)
  }));

  return { topic, questions, keywords };
}

function tokenCoverage(queryTokens, targetTokens) {
  if (!queryTokens.length || !targetTokens.length) return 0;
  const matched = queryTokens.filter((token) => targetTokens.includes(token)).length;
  return matched / queryTokens.length;
}

function scoreTopic(query, queryTokens, compiled) {
  let score = 0;

  for (const question of compiled.questions) {
    if (query === question.normalized) return 220;
    const coverage = tokenCoverage(queryTokens, question.tokens);
    if (coverage >= 0.5) {
      const precision = question.tokens.length
        ? queryTokens.filter((token) => question.tokens.includes(token)).length / question.tokens.length
        : 0;
      score = Math.max(score, coverage * 70 + precision * 18);
    }
    if (query.length >= 5 && question.normalized.includes(query)) score = Math.max(score, 78);
  }

  for (const keyword of compiled.keywords) {
    if (query === keyword.normalized) return 200 + keyword.tokens.length;
    if (keyword.normalized.includes(" ") && query.includes(keyword.normalized)) {
      score = Math.max(score, 110 + keyword.tokens.length);
    }
    if (keyword.tokens.length && keyword.tokens.every((token) => queryTokens.includes(token))) {
      score = Math.max(score, 92 + keyword.tokens.length * 3);
    }
  }

  const metadataTokens = tokenize(`${compiled.topic.category} ${compiled.topic.tags.join(" ")}`);
  if (queryTokens.some((token) => metadataTokens.includes(token))) score += 5;
  return score;
}

export function createRetriever(rawData) {
  const data = validateKnowledgeBase(rawData);
  const vocabularyWords = buildVocabulary(data.topics);
  const vocabulary = compileVocabulary(vocabularyWords);
  const knownStems = new Set(vocabularyWords.flatMap(tokenize));
  const compiled = {
    tr: data.topics.map((topic) => compileTopic(topic, "tr")),
    en: data.topics.map((topic) => compileTopic(topic, "en"))
  };

  function retrieve(input, language = "tr") {
    const locale = language === "en" ? "en" : "tr";
    const corrected = correctQuery(input, vocabulary);
    const query = normalizeText(corrected);
    const queryTokens = tokenize(query);
    if (!query) return null;

    const knownCount = queryTokens.filter((token) => knownStems.has(token)).length;
    if (queryTokens.length > 1 && knownCount / queryTokens.length <= 0.5) return null;

    const ranked = compiled[locale]
      .map((topic) => ({ topic, score: scoreTopic(query, queryTokens, topic) }))
      .sort((left, right) => right.score - left.score);
    const best = ranked[0];
    if (!best || best.score < 45) return null;

    return {
      topicId: best.topic.topic.id,
      answer: best.topic.topic.answers[locale],
      source: best.topic.topic.source,
      confidence: Math.min(1, best.score / 200)
    };
  }

  return Object.freeze({ retrieve, topicCount: data.topics.length, vocabularySize: vocabulary.size });
}

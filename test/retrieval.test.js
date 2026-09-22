import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { createRetriever, normalizeText, validateKnowledgeBase } from "../js/retrieval.js";

const knowledge = JSON.parse(
  fs.readFileSync(new URL("../data/knowledge.json", import.meta.url), "utf8")
);
const retriever = createRetriever(knowledge);

const cases = [
  ["tr", "mezun", "education_overview"],
  ["tr", "okul hayatı", "education_overview"],
  ["tr", "hangi üniversiteden mezun oldu", "bachelor_school"],
  ["tr", "hangi bölümden mezun", "bachelor_degree"],
  ["tr", "ne zaman mezun oldu", "bachelor_details"],
  ["tr", "tezz", "thesis"],
  ["tr", "swift", "mobile_development"],
  ["tr", "satarnc", "sports"],
  ["tr", "iletişim", "contact"],
  ["tr", "firebase", "databases"],
  ["tr", "figma", "design_tools"],
  ["tr", "avrasya kongresi", "certificates"],
  ["en", "school life", "education_overview"],
  ["en", "which university did Mert graduate from", "bachelor_school"],
  ["en", "what was Mert's major", "bachelor_degree"],
  ["en", "graduation year", "bachelor_details"],
  ["en", "thesis", "thesis"],
  ["en", "mobile development", "mobile_development"],
  ["en", "work history", "work_experience"],
  ["en", "open to work", "current_work"],
  ["en", "chess", "sports"]
];

for (const [language, question, topicId] of cases) {
  test(`${language} routes “${question}” to ${topicId}`, () => {
    assert.equal(retriever.retrieve(question, language)?.topicId, topicId);
  });
}

test("every stored question routes to its own topic in both languages", () => {
  for (const topic of knowledge.topics) {
    for (const language of knowledge.locales) {
      for (const question of topic.questions[language]) {
        assert.equal(
          retriever.retrieve(question, language)?.topicId,
          topic.id,
          `${language}: ${question}`
        );
      }
    }
  }
});

test("every single keyword returns an answer in both languages", () => {
  for (const topic of knowledge.topics) {
    for (const language of knowledge.locales) {
      for (const keyword of topic.keywords[language]) {
        assert.ok(
          retriever.retrieve(keyword, language)?.answer,
          `${language}: ${topic.id} / ${keyword}`
        );
      }
    }
  }
});

test("rejects unrelated and mixed input instead of guessing", () => {
  assert.equal(retriever.retrieve("muz patates hava durumu", "tr"), null);
  assert.equal(retriever.retrieve("python muz patates", "tr"), null);
  assert.equal(retriever.retrieve("banana weather potato", "en"), null);
});

test("normalization handles Turkish, punctuation and technical names", () => {
  assert.equal(normalizeText("İŞ, C++ ve C#"), "meslek cplusplus ve csharp");
});

test("knowledge schema has unique stable topic IDs", () => {
  assert.equal(validateKnowledgeBase(knowledge).topics.length, 40);
  assert.equal(new Set(knowledge.topics.map((topic) => topic.id)).size, 40);
});

test("certificate replies include the 2026 congress participation certificate", () => {
  const turkish = retriever.retrieve("Mert’in sertifikaları nelerdir?", "tr")?.answer;
  const english = retriever.retrieve("Which certificates does Mert have?", "en")?.answer;

  assert.match(turkish, /5\. Uluslararası Avrasya/u);
  assert.match(turkish, /19–20 Eylül 2026/u);
  assert.match(english, /5th International Eurasian/u);
  assert.match(english, /19–20 Sep 2026/u);
});

test("certificate replies preserve full descriptions and chronological order", () => {
  const turkish = retriever.retrieve("Mert’in sertifikaları nelerdir?", "tr")?.answer;
  const english = retriever.retrieve("Which certificates does Mert have?", "en")?.answer;

  assert.match(turkish, /“Versiyon Kontrol: Git ve GitHub”/u);
  assert.match(turkish, /“ProQuest Yazar Çalıştayı”/u);
  assert.match(turkish, /“Road to Entrepreneurship”/u);
  assert.match(english, /BTK Academy Course Participation Certificate \(Online\)/u);
  assert.doesNotMatch(turkish, /Yüz Yüze/u);
  assert.doesNotMatch(english, /On-site/u);
  assert.ok(turkish.indexOf("04.03.2024") < turkish.indexOf("19–20 Eylül 2026"));
  assert.ok(english.indexOf("04.03.2024") < english.indexOf("19–20 Sep 2026"));
});

test("rejects malformed knowledge data", () => {
  assert.throws(() => validateKnowledgeBase({ schemaVersion: 1, topics: [] }));

  const missingUiText = structuredClone(knowledge);
  delete missingUiText.ui.tr.greeting;
  assert.throws(() => validateKnowledgeBase(missingUiText));

  const duplicateSmallTalk = structuredClone(knowledge);
  duplicateSmallTalk.smallTalk.push(structuredClone(duplicateSmallTalk.smallTalk[0]));
  assert.throws(() => validateKnowledgeBase(duplicateSmallTalk));
});

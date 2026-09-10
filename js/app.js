import { createRetriever, MAX_QUERY_LENGTH, normalizeText } from "./retrieval.js";
import { safeHref } from "./link-security.js";

const state = { language: "tr", busy: false, retriever: null, content: null };

const elements = {
  app: document.querySelector("#app"),
  form: document.querySelector("#chatForm"),
  input: document.querySelector("#chatInput"),
  languageButton: document.querySelector(".lang-toggle"),
  loader: document.querySelector("#siteLoader"),
  log: document.querySelector("#chatLog"),
  submit: document.querySelector("#chatForm button[type='submit']")
};

const fallback = {
  tr: "Bilgi bankası yüklenemedi. Lütfen sayfayı yenileyip tekrar dene.",
  en: "The knowledge base could not be loaded. Please refresh the page and try again."
};

const linkPattern = /https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[a-z]{2,}|(?:www\.)?(?:linkedin\.com|github\.com|mertsurucu\.com|ukd\.tsf\.org\.tr)(?:\/[^\s]*)?/giu;

function ui(key) {
  return state.content?.ui?.[state.language]?.[key] ?? fallback[state.language];
}

function conversationalReply(question) {
  const normalized = normalizeText(question);
  const match = state.content?.smallTalk.find(({ patterns }) => patterns.some((pattern) => (
    normalized === normalizeText(pattern)
  )));
  return match?.answers[state.language] ?? null;
}

function linkLabel(href) {
  if (href.startsWith("mailto:")) return ui("linkEmail");
  if (href.includes("linkedin.com")) return ui("linkLinkedIn");
  if (href.includes("github.com")) return ui("linkGitHub");
  if (href.includes("tsf.org.tr")) return ui("linkChess");
  return ui("linkGeneric");
}

function messageTime() {
  return new Intl.DateTimeFormat(state.language === "tr" ? "tr-TR" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

function createAvatar() {
  const avatar = document.createElement("span");
  avatar.className = "assistant-avatar";
  avatar.setAttribute("aria-hidden", "true");
  const image = document.createElement("img");
  image.src = "./public/assets/assistant-robot.gif";
  image.alt = "";
  avatar.appendChild(image);
  return avatar;
}

function appendLinkedText(container, text) {
  let cursor = 0;
  for (const match of text.matchAll(linkPattern)) {
    const visible = match[0].replace(/[),.;!?]+$/u, "");
    const href = safeHref(visible);
    container.appendChild(document.createTextNode(text.slice(cursor, match.index)));
    if (href) {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = visible;
      if (href.startsWith("https:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.referrerPolicy = "no-referrer";
      }
      container.appendChild(link);
    } else {
      container.appendChild(document.createTextNode(visible));
    }
    cursor = match.index + visible.length;
  }
  container.appendChild(document.createTextNode(text.slice(cursor)));
}

function appendMessage(type, text) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${type}`;
  if (type === "assistant") wrapper.appendChild(createAvatar());

  const label = document.createElement("div");
  label.className = "message-label";
  label.textContent = type === "user"
    ? `${ui("you")} · ${messageTime()}`
    : messageTime();
  wrapper.appendChild(label);

  const paragraph = document.createElement("p");
  appendLinkedText(paragraph, text);
  wrapper.appendChild(paragraph);

  if (type === "assistant") {
    const links = [...text.matchAll(linkPattern)]
      .map((match) => safeHref(match[0].replace(/[),.;!?]+$/u, "")))
      .filter(Boolean);
    if (links.length) {
      const actions = document.createElement("div");
      actions.className = "message-actions";
      [...new Set(links)].forEach((href) => {
        const link = document.createElement("a");
        link.className = "message-cta";
        link.href = href;
        link.textContent = `${linkLabel(href)} ↗`;
        if (href.startsWith("https:")) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.referrerPolicy = "no-referrer";
        }
        actions.appendChild(link);
      });
      wrapper.appendChild(actions);
    }
  }

  elements.log.appendChild(wrapper);
  elements.log.scrollTop = elements.log.scrollHeight;
}

function appendTyping() {
  const wrapper = document.createElement("div");
  wrapper.className = "message assistant";
  wrapper.id = "typing";
  wrapper.appendChild(createAvatar());

  const label = document.createElement("div");
  label.className = "message-label";
  label.textContent = messageTime();
  wrapper.appendChild(label);

  const dots = document.createElement("p");
  dots.className = "typing";
  dots.setAttribute("aria-label", ui("typing"));
  for (let index = 0; index < 3; index += 1) dots.appendChild(document.createElement("i"));
  wrapper.appendChild(dots);
  elements.log.appendChild(wrapper);
  elements.log.scrollTop = elements.log.scrollHeight;
}

function setBusy(busy) {
  state.busy = busy;
  elements.input.disabled = busy;
  elements.submit.disabled = busy;
}

function answerQuestion(question) {
  const conversation = conversationalReply(question);
  if (conversation) return conversation;
  if (!state.retriever) return fallback[state.language];
  return state.retriever.retrieve(question, state.language)?.answer ?? ui("unknown");
}

function ask(question) {
  const cleanQuestion = String(question ?? "").trim().slice(0, MAX_QUERY_LENGTH);
  if (!cleanQuestion || state.busy) return;
  setBusy(true);
  appendMessage("user", cleanQuestion);
  elements.input.value = "";
  appendTyping();

  window.setTimeout(() => {
    document.querySelector("#typing")?.remove();
    appendMessage("assistant", answerQuestion(cleanQuestion));
    setBusy(false);
    elements.input.focus({ preventScroll: true });
  }, 420);
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  ask(elements.input.value);
});

document.querySelectorAll("#promptChips button").forEach((button) => {
  button.addEventListener("click", () => {
    ask(button.dataset[`question${state.language === "tr" ? "Tr" : "En"}`]);
  });
});

elements.languageButton.addEventListener("click", () => {
  state.language = state.language === "tr" ? "en" : "tr";
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-tr][data-en]").forEach((node) => {
    node.textContent = node.dataset[state.language];
  });
  document.querySelectorAll(".lang-toggle span").forEach((node) => {
    node.classList.toggle("active", node.textContent.toLocaleLowerCase() === state.language);
  });
  elements.languageButton.setAttribute(
    "aria-label",
    elements.languageButton.dataset[`label${state.language === "tr" ? "Tr" : "En"}`]
  );
  elements.input.placeholder = elements.input.dataset[`placeholder${state.language === "tr" ? "Tr" : "En"}`];
});

async function loadKnowledge() {
  try {
    const response = await fetch("./data/knowledge.json", {
      cache: "default",
      credentials: "same-origin"
    });
    if (!response.ok) throw new Error(`Knowledge request failed (${response.status})`);
    const content = await response.json();
    state.retriever = createRetriever(content);
    state.content = content;
  } catch (error) {
    console.error("Bilgi bankası yüklenemedi.", error);
  }
}

async function start() {
  await loadKnowledge();
  window.setTimeout(() => {
    elements.loader.classList.add("is-hidden");
    elements.app.classList.remove("is-loading");
    elements.app.classList.add("is-ready");
    window.setTimeout(() => appendMessage("assistant", state.retriever ? ui("greeting") : fallback[state.language]), 180);
  }, 700);
}

window.addEventListener("load", start, { once: true });

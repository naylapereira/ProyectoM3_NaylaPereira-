import { chatView } from "../views/chatView.js";
import { initializeChat } from "../chat.js";

export function selectCharacter(card, appContainer) {
  const characterName = card.querySelector(
    ".character-card__name"
  ).textContent;

  const characterImage = card.querySelector(
    ".character-card__image"
  ).src;

  appContainer.innerHTML = chatView(
    characterName,
    characterImage
  );

  initializeChat();
}
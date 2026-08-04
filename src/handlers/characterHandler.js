import { chatView } from "../views/chatView.js";
import { initializeChat } from "../chat.js";

export function selectCharacter(card) {
  const characterId = card.dataset.character;

  window.history.pushState(
    {},
    "",
    `/chat/${characterId}`
  );

  window.dispatchEvent(new PopStateEvent("popstate"));
}
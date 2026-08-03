import { clearConversation, addMessage } from "../services/conversationService.js";
import { createWelcomeMessage } from "../components/messages/welcomeMessage.js";
import { getWelcomeMessage } from "../utils/welcomeMessages.js";
import { getCurrentTime } from "../utils.js";

export function initializeClearHistory({
  character,
  characterImage,
  messagesContainer,
}) {
  const clearButton = document.querySelector(
    "[data-clear-history]"
  );

  if (!clearButton) {
    return;
  }

  clearButton.addEventListener("click", () => {
    const confirmed = window.confirm(
      `¿Querés borrar la conversación con ${character}?`
    );

    if (!confirmed) {
      return;
    }

    clearConversation(character);
    messagesContainer.innerHTML = "";

    const welcomeText = getWelcomeMessage(character);
    const currentTime = getCurrentTime();

    const welcomeMessage = createWelcomeMessage({
      text: welcomeText,
      time: currentTime,
      imageSrc: characterImage.src,
      imageAlt: character,
    });

    messagesContainer.appendChild(welcomeMessage);

    addMessage(character, {
      role: "model",
      text: welcomeText,
      time: currentTime,
    });
  });
}
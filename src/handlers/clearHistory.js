import { clearConversation, addMessage } from "../services/conversationService.js";
import { createWelcomeMessage } from "../components/messages/welcomeMessage.js";
import { getWelcomeMessage } from "../utils/welcomeMessages.js";
import { getCurrentTime } from "../utils.js";
import { createClearHistoryModal } from "../components/clearHistoryModal.js";

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
    const modal = createClearHistoryModal(character);

  document.body.appendChild(modal);

  const closeModal = () => {
    modal.remove();
  };

  modal
    .querySelectorAll("[data-close-clear-modal]")
    .forEach((element) => {
      element.addEventListener("click", closeModal);
    });

  modal
    .querySelector("[data-confirm-clear-history]")
    .addEventListener("click", () => {
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

      closeModal();
    });

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
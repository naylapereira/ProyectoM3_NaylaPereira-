import { getCurrentTime } from "./utils.js";
import { getCharacterReply } from "./services/chatService.js";
import { getWelcomeMessage } from "./utils/welcomeMessages.js";
import { getConversation, addMessage } from "./services/conversationService.js";
import { createCharacterMessage } from "./components/messages/characterMessage.js";
import { createWelcomeMessage } from "./components/messages/welcomeMessage.js";
import { createErrorMessage } from "./components/messages/errorMessage.js";
import { renderConversation } from "./handlers/renderConversation.js";
import { scrollToLatestMessage } from "./utils/scroll.js";
import { getChatElements } from "./utils/chatElements.js";
import { getCharacterName } from "./utils/getCharacterName.js";
import { sendUserMessage } from "./handlers/sendUserMessage.js";
import { focusInput } from "./utils/focusInput.js";
import { showTypingIndicator } from "./handlers/showTypingIndicator.js";
import { handleCharacterResponse } from "./handlers/handleCharacterResponse.js";
import { initializeClearHistory } from "./handlers/clearHistory.js";

export function initializeChat() {
  const elements = getChatElements();

  if (!elements) {
    return;
  }

  const {
    chatForm,
    chatInput,
    messagesContainer,
    characterElement,
    characterImage,
  } = elements;

  focusInput(chatInput);

  const character = getCharacterName(characterElement);
  
  const conversationHistory = getConversation(character);

  initializeClearHistory({
    character,
    characterImage,
    messagesContainer,
  });

  renderConversation({
    conversation: conversationHistory,
    container: messagesContainer,
    character,
    characterImage,
  });

  if (conversationHistory.length > 1) {
    scrollToLatestMessage(messagesContainer, false);
  }

  const welcomeMessage = createWelcomeMessage({
    text: getWelcomeMessage(character),
    time: getCurrentTime(),
    imageSrc: characterImage.src,
    imageAlt: character,
  });

  if (conversationHistory.length === 0) {
    messagesContainer.appendChild(welcomeMessage);

    addMessage(character, {
      role: "model",
      text: getWelcomeMessage(character),
      time: getCurrentTime(),
    });
  }

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const messageText = chatInput.value.trim();

    if (messageText === "") {
      return;
    }

    sendUserMessage({
      character,
      messageText,
      messagesContainer,
      chatInput,
    });

    const typingMessage = showTypingIndicator({
      messagesContainer,
    });

    try {
      await handleCharacterResponse({
        conversationHistory,
        character,
        characterImage,
        typingMessage,
        messagesContainer,
        chatInput,
      });
    }

    catch (error) {
      typingMessage.remove();

      console.error(error);

      let errorText =
        "Ocurrió un error al generar la respuesta.";

      if (error.status === 429) {
        errorText =
          "Llegamos al límite diario de consultas de la IA. Probá nuevamente un poco más tarde.";
      }

      const errorMessage = createErrorMessage(
        errorText,
        getCurrentTime()
      );

      messagesContainer.appendChild(errorMessage);

      scrollToLatestMessage(messagesContainer);

      chatInput.focus();
    }
  });
}
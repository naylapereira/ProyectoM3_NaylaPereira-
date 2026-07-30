import { getCurrentTime } from "./utils.js";
import { getCharacterReply } from "./services/chatService.js";

function scrollToLatestMessage(messagesContainer) {
  messagesContainer.scrollTo({
    top: messagesContainer.scrollHeight,
    behavior: "smooth",
  });
}

export function initializeChat() {
  const conversationHistory = [];

  const chatForm = document.querySelector(".chat__form");
  const chatInput = document.querySelector(".chat__form input");
  const messagesContainer = document.querySelector("#chat-messages");

  if (!chatForm || !chatInput || !messagesContainer) {
    return;
  }

  chatInput.focus();

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const messageText = chatInput.value.trim();

    if (messageText === "") {
      return;
    }

    const messageElement = document.createElement("article");

    messageElement.classList.add(
      "chat-message",
      "chat-message--user"
    );

    messageElement.innerHTML = `
      <p class="chat-message__text">${messageText}</p>
      <time class="chat-message__time">${getCurrentTime()}</time>
    `;

    messagesContainer.appendChild(messageElement);
    
    conversationHistory.push({
      role: "user",
      text: messageText,
    });

    chatInput.value = "";
    chatInput.focus();

    scrollToLatestMessage(messagesContainer);

    const typingMessage = document.createElement("article");

    typingMessage.classList.add(
      "chat-message",
      "chat-message--character",
      "chat-message--typing"
    );

    typingMessage.innerHTML = `
      <div class="typing-indicator" aria-label="El personaje está escribiendo">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;

    messagesContainer.appendChild(typingMessage);

    scrollToLatestMessage(messagesContainer);

    try {
      const characterElement = document.querySelector(
        "[data-character-name]"
      );

      if (!characterElement) {
        throw new Error("No se encontró el nombre del personaje");
      }

      const character = characterElement.textContent.trim();
      
      const characterImage = document.querySelector(
        "[data-character-image]"
      );

      const imageSrc = characterImage.src;
      const imageAlt = characterImage.alt;

      const reply = await getCharacterReply(
        conversationHistory,
        character
      );

      typingMessage.remove();

      const characterMessage = document.createElement("article");

      characterMessage.classList.add(
        "chat-message",
        "chat-message--character"
      );

      characterMessage.innerHTML = `
        <img
          class="chat-message__avatar"
          src="${imageSrc}"
          alt="${imageAlt}"
        />

        <div class="chat-message__content">
          <p class="chat-message__text">${reply}</p>

          <time class="chat-message__time">
            ${getCurrentTime()}
          </time>
        </div>
      `;

      messagesContainer.appendChild(characterMessage);
      
      conversationHistory.push({
        role: "model",
        text: reply,
      });

      scrollToLatestMessage(messagesContainer);

      chatInput.focus();
    } 

    catch (error) {
      typingMessage.remove();

      console.error(error);

      const errorMessage = document.createElement("article");

      errorMessage.classList.add(
        "chat-message",
        "chat-message--character"
      );

      errorMessage.innerHTML = `
        <p class="chat-message__text">
          Ocurrió un error al generar la respuesta.
        </p>

        <time class="chat-message__time">
          ${getCurrentTime()}
        </time>
      `;

      messagesContainer.appendChild(errorMessage);

      scrollToLatestMessage(messagesContainer);

      chatInput.focus();
    }
  });
}
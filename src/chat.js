import { getCurrentTime } from "./utils.js";

function scrollToLatestMessage(messagesContainer) {
  messagesContainer.scrollTo({
    top: messagesContainer.scrollHeight,
    behavior: "smooth",
  });
}

export function initializeChat() {
  const chatForm = document.querySelector(".chat__form");
  const chatInput = document.querySelector(".chat__form input");
  const messagesContainer = document.querySelector("#chat-messages");

  if (!chatForm || !chatInput || !messagesContainer) {
    return;
  }

  chatForm.addEventListener("submit", (event) => {
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

    chatInput.value = "";
    chatInput.focus();

    scrollToLatestMessage(messagesContainer);

    setTimeout(() => {
      const characterMessage = document.createElement("article");

      characterMessage.classList.add(
        "chat-message",
        "chat-message--character"
      );

      characterMessage.innerHTML = `
        <p class="chat-message__text">
          Esta es una respuesta de prueba del personaje.
        </p>

        <time class="chat-message__time">
          ${getCurrentTime()}
        </time>
      `;

      messagesContainer.appendChild(characterMessage);

      scrollToLatestMessage(messagesContainer);
    }, 800);
  });
}
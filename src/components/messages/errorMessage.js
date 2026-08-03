export function createErrorMessage(text, time) {
  const message = document.createElement("article");

  message.classList.add(
    "chat-message",
    "chat-message--character"
  );

  message.innerHTML = `
    <div class="chat-message__content">
      <p class="chat-message__text">${text}</p>

      <time class="chat-message__time">
        ${time}
      </time>
    </div>
  `;

  return message;
}
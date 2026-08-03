export function createUserMessage(text, time) {
  const message = document.createElement("article");

  message.classList.add(
    "chat-message",
    "chat-message--user"
  );

  message.innerHTML = `
    <p class="chat-message__text">${text}</p>

    <time class="chat-message__time">
      ${time}
    </time>
  `;

  return message;
}
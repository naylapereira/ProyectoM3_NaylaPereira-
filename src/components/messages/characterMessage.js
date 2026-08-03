export function createCharacterMessage({
  text,
  time,
  imageSrc,
  imageAlt,
}) {
  const message = document.createElement("article");

  message.classList.add(
    "chat-message",
    "chat-message--character"
  );

  message.innerHTML = `
    <img
      class="chat-message__avatar"
      src="${imageSrc}"
      alt="${imageAlt}"
    />

    <div class="chat-message__content">
      <p class="chat-message__text">${text}</p>

      <div class="chat-message__footer">
        <time class="chat-message__time">
          ${time}
        </time>

        <button
          type="button"
          class="chat-message__copy"
          data-copy-message
          data-message-text="${encodeURIComponent(text)}"
          aria-label="Copiar respuesta"
          title="Copiar respuesta"
        >
          📋
        </button>
      </div>
    </div>
  `;

  return message;
}
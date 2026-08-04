export function createTypingMessage(imageSrc, imageAlt) {
  const message = document.createElement("article");

  message.classList.add(
    "chat-message",
    "chat-message--character",
    "chat-message--typing"
  );

  message.innerHTML = `
    <div
      class="typing-indicator"
      aria-label="El personaje está escribiendo"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  return message;
}
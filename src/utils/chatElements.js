export function getChatElements() {
  const chatForm = document.querySelector(".chat__form");
  const chatInput = document.querySelector(".chat__form input");
  const messagesContainer = document.querySelector("#chat-messages");
  const characterElement = document.querySelector(
    "[data-character-name]"
  );
  const characterImage = document.querySelector(
    "[data-character-image]"
  );

  if (
    !chatForm ||
    !chatInput ||
    !messagesContainer ||
    !characterElement ||
    !characterImage
  ) {
    return null;
  }

  return {
    chatForm,
    chatInput,
    messagesContainer,
    characterElement,
    characterImage,
  };
}
import { createTypingMessage } from "../components/messages/typingMessage.js";
import { scrollToLatestMessage } from "../utils/scroll.js";

export function showTypingIndicator({
  messagesContainer,
  characterImage,
}) {
  const typingMessage = createTypingMessage(
    characterImage.src,
    characterImage.alt
  );

  messagesContainer.appendChild(typingMessage);

  scrollToLatestMessage(messagesContainer);

  return typingMessage;
}
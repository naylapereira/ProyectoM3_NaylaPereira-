import { createTypingMessage } from "../components/messages/typingMessage.js";
import { scrollToLatestMessage } from "../utils/scroll.js";

export function showTypingIndicator({
  messagesContainer,
}) {
  const typingMessage = createTypingMessage();

  messagesContainer.appendChild(typingMessage);
  scrollToLatestMessage(messagesContainer);

  return typingMessage;
}
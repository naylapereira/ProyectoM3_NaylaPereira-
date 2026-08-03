import { createUserMessage } from "../components/messages/userMessage.js";
import { addMessage } from "../services/conversationService.js";
import { getCurrentTime } from "../utils.js";
import { focusInput } from "../utils/focusInput.js";
import { scrollToLatestMessage } from "../utils/scroll.js";

export function sendUserMessage({
  character,
  messageText,
  messagesContainer,
  chatInput,
}) {
  const currentTime = getCurrentTime();

  const messageElement = createUserMessage(
    messageText,
    currentTime
  );

  messagesContainer.appendChild(messageElement);

  addMessage(character, {
    role: "user",
    text: messageText,
    time: currentTime,
  });

  chatInput.value = "";
  focusInput(chatInput);

  scrollToLatestMessage(messagesContainer);
}
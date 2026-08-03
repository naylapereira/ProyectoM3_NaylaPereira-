import { getCharacterReply } from "../services/chatService.js";
import { createCharacterMessage } from "../components/messages/characterMessage.js";
import { addMessage } from "../services/conversationService.js";
import { getCurrentTime } from "../utils.js";
import { scrollToLatestMessage } from "../utils/scroll.js";
import { focusInput } from "../utils/focusInput.js";

export async function handleCharacterResponse({
  conversationHistory,
  character,
  characterImage,
  typingMessage,
  messagesContainer,
  chatInput,
}) {
  const reply = await getCharacterReply(
    conversationHistory,
    character
  );

  typingMessage.remove();

  const characterMessage = createCharacterMessage({
    text: reply,
    time: getCurrentTime(),
    imageSrc: characterImage.src,
    imageAlt: characterImage.alt,
  });

  messagesContainer.appendChild(characterMessage);

  addMessage(character, {
    role: "model",
    text: reply,
    time: getCurrentTime(),
  });

  scrollToLatestMessage(messagesContainer);

  focusInput(chatInput);
}
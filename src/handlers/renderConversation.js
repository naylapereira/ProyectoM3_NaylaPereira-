import { createUserMessage } from "../components/messages/userMessage.js";
import { createCharacterMessage } from "../components/messages/characterMessage.js";

export function renderConversation({
  conversation,
  container,
  character,
  characterImage,
}) {
  conversation.forEach((message) => {
    const messageElement =
      message.role === "user"
        ? createUserMessage(message.text, message.time)
        : createCharacterMessage({
            text: message.text,
            time: message.time,
            imageSrc: characterImage.src,
            imageAlt: character,
          });

    container.appendChild(messageElement);
  });
}
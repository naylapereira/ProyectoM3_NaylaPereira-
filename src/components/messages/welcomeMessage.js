import { createCharacterMessage } from "./characterMessage.js";

export function createWelcomeMessage({
  text,
  time,
  imageSrc,
  imageAlt,
}) {
  return createCharacterMessage({
    text,
    time,
    imageSrc,
    imageAlt,
  });
}
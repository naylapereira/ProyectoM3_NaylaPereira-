export function getCharacterName(characterElement) {
  if (!characterElement) {
    return "";
  }

  return characterElement.textContent.trim();
}
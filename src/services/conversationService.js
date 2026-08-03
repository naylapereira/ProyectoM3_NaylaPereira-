const STORAGE_KEY = "intensamente-conversations";

function loadConversations() {
  try {
    const storedConversations = localStorage.getItem(STORAGE_KEY);

    return storedConversations
      ? JSON.parse(storedConversations)
      : {};
  } catch (error) {
    console.error("No se pudo cargar el historial:", error);
    return {};
  }
}

function saveConversations(conversations) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(conversations)
  );
}

const conversationsByCharacter = loadConversations();

export function getConversation(character) {
  if (!conversationsByCharacter[character]) {
    conversationsByCharacter[character] = [];
  }

  return conversationsByCharacter[character];
}

export function addMessage(character, message) {
  const conversation = getConversation(character);

  conversation.push(message);
  saveConversations(conversationsByCharacter);
}

export function clearConversation(character) {
  conversationsByCharacter[character] = [];
  saveConversations(conversationsByCharacter);
}
const welcomeMessages = {
  Alegría:
    "¡Hola! Qué lindo verte por acá ☀️ ¿Qué te gustaría contarme?",
  Tristeza:
    "Hola... estoy acá para escucharte. Podés contarme lo que necesites.",
  Furia:
    "¡Por fin llegaste! Decime qué pasó y vemos quién tiene la culpa.",
  Temor:
    "¡Hola! Espero que esté todo bien... ¿está todo bien, no?",
  Desagrado:
    "Hola. Espero que tengas algo interesante para contarme.",
};

export function getWelcomeMessage(characterName) {
  return (
    welcomeMessages[characterName] ||
    "¡Hola! Estoy acá para conversar con vos."
  );
}
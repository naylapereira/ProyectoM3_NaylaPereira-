export async function getCharacterReply(history, character) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      history,
      character,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.error || "No se pudo obtener una respuesta"
    );

    error.status = response.status;

    throw error;
  }

  return data.reply;
}
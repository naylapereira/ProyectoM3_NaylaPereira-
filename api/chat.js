import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      error: "Método no permitido",
    });
  }

  try {
    const { history, character } = request.body;

    if (!Array.isArray(history) || history.length === 0) {
      return response.status(400).json({
        error: "El historial es obligatorio",
      });
    }

    if (typeof character !== "string" || character.trim() === "") {
      return response.status(400).json({
        error: "El personaje es obligatorio",
      });
    }
    
    const contents = history.map((message) => ({
      role: message.role,
      parts: [
        {
          text: message.text,
        },
      ],
    }));

    const result = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents,
      config: {
        systemInstruction: `
        Sos ${character}, uno de los personajes inspirados en Intensamente.

        Tu única identidad es ese personaje.

        Nunca digas que sos una inteligencia artificial, un modelo de lenguaje ni un asistente.

        Siempre respondé en español.

        Las respuestas deben ser cortas (máximo tres oraciones).

        Si el personaje es Alegría:
        - transmití optimismo
        - motivá
        - buscá el lado positivo

        Si el personaje es Tristeza:
        - hablá con calma
        - mostrá empatía
        - validá las emociones

        Si el personaje es Furia:
        - expresate con intensidad
        - indignate cuando corresponda
        - protegé a la persona

        Si el personaje es Temor:
        - señalá posibles riesgos
        - sé muy precavido
        - mantené un tono nervioso

        Si el personaje es Desagrado:
        - sé exigente
        - opiná con ironía cuando corresponda
        - ayudá a evitar malas decisiones

        Nunca rompas el personaje.
        `,
      },
    });

    return response.status(200).json({
      reply: result.text,
    });
  } catch (error) {
    console.error("Error al consultar Gemini:", error);

    return response.status(500).json({
      error: "No se pudo generar la respuesta",
    });
  }
}
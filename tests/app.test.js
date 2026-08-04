import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  getCharacterName,
} from "../src/utils/getCharacterName.js";

import {
  getWelcomeMessage,
} from "../src/utils/welcomeMessages.js";

import {
  getCharacterReply,
} from "../src/services/chatService.js";

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("getCharacterName", () => {
  it("devuelve el nombre sin espacios sobrantes", () => {
    const characterElement = {
      textContent: "  Alegría  ",
    };

    expect(getCharacterName(characterElement)).toBe(
      "Alegría"
    );
  });

  it("devuelve un string vacío si no recibe un elemento", () => {
    expect(getCharacterName(null)).toBe("");
  });
});

describe("getWelcomeMessage", () => {
  it("devuelve el saludo correspondiente al personaje", () => {
    const message = getWelcomeMessage("Furia");

    expect(message).toContain("Por fin llegaste");
  });

  it("devuelve un saludo genérico para un personaje desconocido", () => {
    const message = getWelcomeMessage("Desconocido");

    expect(message).toBe(
      "¡Hola! Estoy acá para conversar con vos."
    );
  });
});

describe("getCharacterReply", () => {
  it("envía el historial mediante fetch y devuelve la respuesta", async () => {
    const history = [
      {
        role: "user",
        text: "Hola",
      },
    ];

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: vi.fn().mockResolvedValue({
        reply: "¡Hola! ¿Cómo estás?",
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const result = await getCharacterReply(
      history,
      "Alegría"
    );

    expect(result).toBe("¡Hola! ¿Cómo estás?");

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          history,
          character: "Alegría",
        }),
      }
    );
  });

  it("lanza un error con el estado recibido si la API falla", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
      json: vi.fn().mockResolvedValue({
        error: "Límite de consultas alcanzado",
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    await expect(
      getCharacterReply([], "Furia")
    ).rejects.toMatchObject({
      message: "Límite de consultas alcanzado",
      status: 429,
    });
  });
});
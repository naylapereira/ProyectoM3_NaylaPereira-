import { describe, expect, it, vi } from "vitest";
import { getCurrentTime } from "../src/utils.js";

describe("getCurrentTime", () => {
  it("devuelve una hora en formato HH:MM", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-08-04T14:35:00"));

    const result = getCurrentTime();

    expect(result).toMatch(/\d{2}:\d{2}/);

    vi.useRealTimers();
  });

  it("devuelve un string", () => {
    const result = getCurrentTime();

    expect(typeof result).toBe("string");
  });
});
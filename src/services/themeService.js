const THEME_KEY = "intensamente-theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";

  applyTheme(savedTheme);
  updateThemeButton(savedTheme);
}

export function toggleTheme() {
  const currentTheme =
    document.documentElement.dataset.theme || "light";

  const newTheme =
    currentTheme === "light" ? "dark" : "light";

  localStorage.setItem(THEME_KEY, newTheme);

  applyTheme(newTheme);
  updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
  const button = document.querySelector("[data-theme-toggle]");
  const icon = button?.querySelector(".theme-toggle__icon");
  const tooltip = button?.querySelector("[data-theme-tooltip]");

  if (!button || !icon || !tooltip) {
    return;
  }

  const isLightTheme = theme === "light";

  icon.textContent = isLightTheme ? "🌙" : "☀️";

  const label = isLightTheme
    ? "Activar modo oscuro"
    : "Activar modo claro";

  button.setAttribute("aria-label", label);
  tooltip.textContent = label;
}
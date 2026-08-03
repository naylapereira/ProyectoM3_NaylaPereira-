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

  if (!button) {
    return;
  }

  button.textContent = theme === "light" ? "🌙" : "☀️";
}
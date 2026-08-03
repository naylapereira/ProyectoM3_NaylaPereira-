import { navbar } from "./components/navbar.js";
import { homeView } from "./views/homeView.js";
import { charactersView } from "./views/charactersView.js";
import { aboutView } from "./views/aboutView.js";
import { selectCharacter } from "./handlers/characterHandler.js";
import { initializeCopyMessages } from "./handlers/copyMessage.js";
import { initializeTheme, toggleTheme } from "./services/themeService.js";

const app = document.querySelector("#app");

const routes = {
  "/home": homeView,
  "/chat": charactersView,
  "/about": aboutView,
};

function renderView() {
  const path = window.location.pathname;
  const selectedView = routes[path] || homeView;

  app.innerHTML = `
    ${navbar()}
    ${selectedView()}
  `;
}

function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderView();
}

document.addEventListener("click", (event) => {
  const characterCard = event.target.closest("[data-character]");

  if (characterCard) {
    selectCharacter(characterCard, app);
    return;
  }

  const themeButton = event.target.closest(
    "[data-theme-toggle]"
  );

  if (themeButton) {
    toggleTheme();
    return;
  }

  const navigationElement = event.target.closest("[data-link]");

  if (!navigationElement) {
    return;
  }

  navigateTo(navigationElement.dataset.link);
});

window.addEventListener("popstate", renderView);

if (window.location.pathname === "/") {
  window.history.replaceState({}, "", "/home");
}

renderView();
initializeCopyMessages();
initializeTheme();
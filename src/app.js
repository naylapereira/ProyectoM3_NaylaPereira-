import { navbar } from "./components/navbar.js";
import { homeView } from "./views/homeView.js";
import { charactersView } from "./views/charactersView.js";
import { aboutView } from "./views/aboutView.js";
import { chatView } from "./views/chatView.js";
import { initializeChat } from "./chat.js";
import { selectCharacter } from "./handlers/characterHandler.js";
import { initializeCopyMessages } from "./handlers/copyMessage.js";
import { initializeTheme, toggleTheme } from "./services/themeService.js";
import { initializeMobileViewport } from "./utils/mobileViewport.js";
import { notFoundView } from "./views/notFoundView.js";

const app = document.querySelector("#app");

const routes = {
  "/home": homeView,
  "/chat": charactersView,
  "/about": aboutView,
};

const characters = {
  furia: {
    name: "Furia",
    image: "/characters/furia.png",
  },
  alegria: {
    name: "Alegría",
    image: "/characters/alegria.png",
  },
  tristeza: {
    name: "Tristeza",
    image: "/characters/tristeza.png",
  },
  desagrado: {
    name: "Desagrado",
    image: "/characters/desagrado.png",
  },
  temor: {
    name: "Temor",
    image: "/characters/temor.png",
  },
};

function normalizePath(path) {
  if (path !== "/" && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

function renderView() {
  const currentPath = window.location.pathname;
  const path = normalizePath(currentPath);

  if (path !== currentPath) {
    window.history.replaceState(
      {},
      "",
      `${path}${window.location.search}${window.location.hash}`
    );
  }

  document.body.classList.toggle(
    "chat-open",
    path.startsWith("/chat/")
  );

  const characterRoute = path.match(/^\/chat\/([^/]+)$/);

  if (characterRoute) {
    const characterId = characterRoute[1];
    const character = characters[characterId];

    if (!character) {
      app.innerHTML = `
        ${navbar()}
        ${notFoundView()}
      `;

      initializeTheme();
      return;
    }

    app.innerHTML = `
      ${navbar()}
      ${chatView(character.name, character.image)}
    `;

    initializeTheme();
    initializeChat();
    return;
  }

  if (path.startsWith("/chat/")) {
    app.innerHTML = `
      ${navbar()}
      ${notFoundView()}
    `;

    initializeTheme();
    return;
  }

  const selectedView = routes[path] || notFoundView;

  app.innerHTML = `
    ${navbar()}
    ${selectedView()}
  `;

  initializeTheme();
}

function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderView();
}

document.addEventListener("click", (event) => {
  const characterCard = event.target.closest("[data-character]");

  if (characterCard) {
    selectCharacter(characterCard);
    return;
  }
  
  const chatBackButton = event.target.closest(
    "[data-chat-back]"
  );

  if (chatBackButton) {
    window.history.back();
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

initializeMobileViewport();
renderView();
initializeCopyMessages();
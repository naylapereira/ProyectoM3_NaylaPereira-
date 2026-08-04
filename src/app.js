import { navbar } from "./components/navbar.js";
import { homeView } from "./views/homeView.js";
import { charactersView } from "./views/charactersView.js";
import { aboutView } from "./views/aboutView.js";
import { chatView } from "./views/chatView.js";
import { initializeChat } from "./chat.js";
import { selectCharacter } from "./handlers/characterHandler.js";
import { initializeCopyMessages } from "./handlers/copyMessage.js";
import { initializeTheme, toggleTheme } from "./services/themeService.js";

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

function renderView() {
  const path = window.location.pathname;

  if (path.startsWith("/chat/")) {
    const characterId = path.split("/")[2];
    const character = characters[characterId];

    if (!character) {
      navigateTo("/chat");
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

  const selectedView = routes[path] || homeView;

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

renderView();
initializeCopyMessages();
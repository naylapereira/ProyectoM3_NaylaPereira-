const app = document.querySelector("#app");

const views = {
  "/home": `
    <main class="home">
      <section class="home__content">
        <p class="home__eyebrow">Chat emocional</p>

        <h1 class="home__title">Hablá con tus emociones</h1>

        <p class="home__description">
          Elegí un personaje de Intensamente y comenzá una conversación.
        </p>

        <button class="home__button" type="button" data-link="/chat">
          Conocer personajes
        </button>
      </section>
    </main>
  `,

"/chat": `
  <main class="characters">
    <section class="characters__content">
      <p class="characters__eyebrow">Personajes</p>

      <h1 class="characters__title">Elegí una emoción</h1>

      <p class="characters__description">
        Seleccioná el personaje con el que querés conversar.
      </p>

      <div class="characters__grid">
        <button
          class="character-card"
          type="button"
          data-character="furia"
        >
          <span class="character-card__emoji">😡</span>
          <span class="character-card__name">Furia</span>
        </button>

        <button
          class="character-card"
          type="button"
          data-character="alegria"
        >
          <span class="character-card__emoji">😊</span>
          <span class="character-card__name">Alegría</span>
        </button>

        <button
          class="character-card"
          type="button"
          data-character="tristeza"
        >
          <span class="character-card__emoji">😢</span>
          <span class="character-card__name">Tristeza</span>
        </button>

        <button
          class="character-card"
          type="button"
          data-character="desagrado"
        >
          <span class="character-card__emoji">🤢</span>
          <span class="character-card__name">Desagrado</span>
        </button>

        <button
          class="character-card"
          type="button"
          data-character="temor"
        >
          <span class="character-card__emoji">😨</span>
          <span class="character-card__name">Temor</span>
        </button>
      </div>

      <button
        class="characters__back-button"
        type="button"
        data-link="/home"
      >
        Volver al inicio
      </button>
    </section>
  </main>
`,

  "/about": `
    <main>
      <h1>Sobre la aplicación</h1>
      <p>
        Esta aplicación permite conversar con personajes de Intensamente
        mediante inteligencia artificial.
      </p>

      <button type="button" data-link="/home">
        Volver al inicio
      </button>
    </main>
  `,
};

function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderView();
}

function renderView() {
  const path = window.location.pathname;
  const selectedView = views[path] || views["/home"];

  app.innerHTML = selectedView;
}

document.addEventListener("click", (event) => {
  const navigationElement = event.target.closest("[data-link]");

  if (!navigationElement) {
    return;
  }

  const path = navigationElement.dataset.link;
  navigateTo(path);
});

window.addEventListener("popstate", renderView);

if (window.location.pathname === "/") {
  window.history.replaceState({}, "", "/home");
}

renderView();
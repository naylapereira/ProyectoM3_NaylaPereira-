export function homeView() {
  return `
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
  `;
}
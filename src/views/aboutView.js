export function aboutView() {
  return `
    <main class="about">
      <section class="about__content">
        <p class="about__eyebrow">Sobre el proyecto</p>

        <h1 class="about__title">
          Sobre la aplicación
        </h1>

        <p class="about__description">
          Esta aplicación permite conversar con personajes de Intensamente
          mediante inteligencia artificial.
        </p>

        <button
          type="button"
          class="about__button"
          data-link="/home"
        >
          Volver al inicio
        </button>
      </section>
    </main>
  `;
}
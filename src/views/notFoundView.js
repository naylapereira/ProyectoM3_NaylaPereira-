export function notFoundView() {
  return `
    <main class="not-found">
      <section class="not-found__content">
        <p class="not-found__code">404</p>

        <h1 class="not-found__title">
          Página no encontrada
        </h1>

        <p class="not-found__description">
          La dirección que ingresaste no existe.
        </p>

        <button
          type="button"
          class="not-found__button"
          data-link="/home"
        >
          Volver al inicio
        </button>
      </section>
    </main>
  `;
}
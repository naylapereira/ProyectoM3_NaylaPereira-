export function navbar() {
  return `
    <nav class="navbar">
      <button type="button" data-link="/home">
        Inicio
      </button>

      <button type="button" data-link="/chat">
        Chat
      </button>

      <button type="button" data-link="/about">
        Acerca de
      </button>

      <button
        type="button"
        class="theme-toggle"
        data-theme-toggle
        aria-label="Activar modo oscuro"
      >
        <span class="theme-toggle__icon" aria-hidden="true">
          🌙
        </span>

        <span class="theme-toggle__tooltip" data-theme-tooltip>
          Activar modo oscuro
        </span>
      </button>    </nav>
  `;
}
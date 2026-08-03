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
        data-theme-toggle
        aria-label="Cambiar modo de color"
        title="Cambiar modo de color"
      >
        🌙
      </button>
    </nav>
  `;
}
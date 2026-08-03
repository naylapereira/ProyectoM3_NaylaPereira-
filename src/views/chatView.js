export function chatView(
  characterName,
  characterImage
) {  return `
    <main class="chat">

      <header class="chat__header">
        <button
          type="button"
          class="chat__back"
          data-link="/chat"
        >
          ←
        </button>

        <div class="chat__character">
          <img
            class="chat__character-image"
            src="${characterImage}"
            alt="${characterName}"
            data-character-image
          />

          <h1 data-character-name>${characterName}</h1>
        </div>

        <button
          type="button"
          class="chat__clear-button"
          data-clear-history
          aria-label="Borrar historial"
          title="Borrar historial"
        >
          🗑️
        </button>
      </header>

      <section
        class="chat__messages"
        id="chat-messages"
      >

      </section>

      <form class="chat__form">

        <input
          type="text"
          placeholder="Escribí un mensaje..."
        >

        <button type="submit">
          Enviar
        </button>

      </form>

    </main>
  `;
}
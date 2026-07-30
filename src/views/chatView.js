export function chatView(characterName) {
  return `
    <main class="chat">

      <header class="chat__header">
        <button
          type="button"
          class="chat__back"
          data-link="/chat"
        >
          ←
        </button>

        <h1>${characterName}</h1>
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
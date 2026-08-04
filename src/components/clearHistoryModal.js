export function createClearHistoryModal(character) {
  const modal = document.createElement("div");

  modal.className = "clear-modal";
  modal.innerHTML = `
    <div class="clear-modal__backdrop" data-close-clear-modal></div>

    <section
      class="clear-modal__content"
      role="dialog"
      aria-modal="true"
      aria-labelledby="clear-modal-title"
    >
      <h2 id="clear-modal-title">
        ¿Borrar conversación?
      </h2>

      <p>
        Se eliminará todo el historial con ${character}.
      </p>

      <div class="clear-modal__actions">
        <button
          type="button"
          class="clear-modal__cancel"
          data-close-clear-modal
        >
          Cancelar
        </button>

        <button
          type="button"
          class="clear-modal__confirm"
          data-confirm-clear-history
        >
          Borrar
        </button>
      </div>
    </section>
  `;

  return modal;
}
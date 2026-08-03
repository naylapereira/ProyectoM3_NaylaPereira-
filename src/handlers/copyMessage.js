export function initializeCopyMessages() {
  document.addEventListener("click", async (event) => {
    const copyButton = event.target.closest(
      "[data-copy-message]"
    );

    if (!copyButton) {
      return;
    }

    const encodedText = copyButton.dataset.messageText;
    const messageText = decodeURIComponent(encodedText);

    try {
      await navigator.clipboard.writeText(messageText);

      copyButton.textContent = "✅";

      setTimeout(() => {
        copyButton.textContent = "📋";
      }, 1200);
    } catch (error) {
      console.error("No se pudo copiar el mensaje:", error);

      copyButton.textContent = "❌";

      setTimeout(() => {
        copyButton.textContent = "📋";
      }, 1200);
    }
  });
}
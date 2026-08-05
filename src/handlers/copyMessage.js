async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (_) {}
  }

  const textArea = document.createElement("textarea");

  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";

  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  const copied = document.execCommand("copy");

  document.body.removeChild(textArea);

  if (!copied) {
    throw new Error("No se pudo copiar");
  }
}

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
      await copyText(messageText);

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
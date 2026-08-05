export function initializeMobileViewport() {
  const viewport = window.visualViewport;

  const updateViewport = () => {
    const height = viewport?.height || window.innerHeight;
    const offsetTop = viewport?.offsetTop || 0;

    document.documentElement.style.setProperty(
      "--app-height",
      `${height}px`
    );

    document.documentElement.style.setProperty(
      "--app-top",
      `${offsetTop}px`
    );
  };

  updateViewport();

  viewport?.addEventListener("resize", updateViewport);
  viewport?.addEventListener("scroll", updateViewport);

  window.addEventListener(
    "orientationchange",
    updateViewport
  );
}
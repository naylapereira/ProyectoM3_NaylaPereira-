export function scrollToLatestMessage(
  container,
  smooth = true
) {
  if (smooth) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });

    return;
  }

  container.scrollTop = container.scrollHeight;
}
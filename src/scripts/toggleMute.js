export default function toggleMuteScript() {
  const btn = document.getElementById("toggleMute");
  const video = document.getElementById("videoSobreMi");

  if (!btn || !video) return;

  btn.addEventListener("click", () => {
    video.muted = !video.muted;
    btn.textContent = video.muted ? "🔇" : "🔊";
  });
}

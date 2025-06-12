export default function initVideoMuteToggle() {
  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('videoSobreMi');
    const btn = document.getElementById('muteButton');

    if (!video || !btn) return;

    btn.addEventListener('click', () => {
      video.muted = !video.muted;
      btn.textContent = video.muted ? '🔇' : '🔊';
    });
  });
}

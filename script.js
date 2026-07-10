// MERIDIAN WIRE — shared behavior

function startClock(){
  const el = document.querySelector('[data-clock]');
  if(!el) return;
  function tick(){
    const now = new Date();
    const hh = String(now.getUTCHours()).padStart(2,'0');
    const mm = String(now.getUTCMinutes()).padStart(2,'0');
    const ss = String(now.getUTCSeconds()).padStart(2,'0');
    el.textContent = `${hh}:${mm}:${ss} UTC`;
  }
  tick();
  setInterval(tick, 1000);
}

document.addEventListener('DOMContentLoaded', startClock);

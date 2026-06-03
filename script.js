function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const p = document.getElementById('page-' + name);
  if (p) p.classList.add('active');

  // Show/hide sidebar based on page
  const sidebar = document.getElementById('sidebar');
  const layout = document.getElementById('app-layout');
  const authPages = ['splash', 'login', 'register'];
  if (sidebar) {
    sidebar.style.display = authPages.includes(name) ? 'none' : '';
  }
}

function switchNav(targetPage) {
  showPage(targetPage);

  // Update bottom nav active state
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  // Match by page name in onclick
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    const fn = item.getAttribute('onclick') || '';
    if (fn.includes("'" + targetPage + "'")) {
      item.classList.add('active');
    }
  });

  // Update sidebar nav active state
  document.querySelectorAll('.sidebar .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const snavEl = document.getElementById('snav-' + targetPage);
  if (snavEl) snavEl.classList.add('active');
}

function setCatActive(el) {
  const pills = el.parentElement.querySelectorAll('.cat-pill');
  pills.forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

function setStep(step) {
  for (let i = 1; i <= 3; i++) {
    const circle = document.getElementById('step-c' + i);
    if (circle) circle.classList.toggle('active', i <= step);
  }
  for (let i = 1; i <= 2; i++) {
    const line = document.getElementById('step-l' + i);
    if (line) line.style.background = i < step ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)';
  }
  for (let i = 1; i <= 3; i++) {
    const stepEl = document.getElementById('cv-step' + i);
    if (stepEl) stepEl.style.display = i === step ? 'block' : 'none';
  }
  const scroll = document.querySelector('#page-cv .content-scroll');
  if (scroll) scroll.scrollTop = 0;
}

// On load: hide sidebar for auth pages
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.style.display = 'none';
});

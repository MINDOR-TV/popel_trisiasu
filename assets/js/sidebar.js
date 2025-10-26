// mobilní otevření/zavření sidebaru
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// jednoduché akordeony
document.querySelectorAll('.menu__accordion').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-acc');
    const panel = document.getElementById(`acc-${id}`);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
    const chev = btn.querySelector('.chev');
    if (chev) chev.textContent = expanded ? '▸' : '▾';
  });
});

// pokud je Postavy první skupina, defaultně ji rozbalíme
const firstPanel = document.getElementById('acc-postavy');
if (firstPanel) firstPanel.hidden = false;


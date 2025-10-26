(function(){
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const backdrop = document.getElementById('backdrop');
  const content = document.getElementById('content');

  function openSidebar(){
    sidebar.classList.add('open');
    backdrop.hidden = false;
    hamburger.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
    content.classList.add('content--shift');
  }

  function closeSidebar(){
    sidebar.classList.remove('open');
    backdrop.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    content.classList.remove('content--shift');
  }

  hamburger?.addEventListener('click', ()=>{
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    expanded ? closeSidebar() : openSidebar();
  });

  backdrop?.addEventListener('click', closeSidebar);
  window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeSidebar(); });

  sidebar.addEventListener('click', (e)=>{
    const a = e.target.closest('a.menu__link');
    if(a) closeSidebar();
  });

  document.querySelectorAll('.menu__accordion').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-acc');
      const panel = document.getElementById(`acc-${id}`);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
      const chev = btn.querySelector('.chev');
      if (chev) chev.textContent = expanded ? '▸' : '▾';
    });
  });

  // volitelně: otevři Postavy při prvním načtení
  const first = document.getElementById('acc-postavy');
  if(first) first.hidden = false;

  // můžeš si trvale „připnout“ sidebar přidáním třídy na body:
  // document.body.classList.add('sidebar-pinned');
})();


// === Globální favicon pro všechny podstránky ===
(function setGlobalFavicon() {
  const url = "https://mindor-tv.github.io/popel_trisiasu/assets/z_popela_logo.png";

  // smažeme staré favicony (pokud nějaké jsou)
  document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]').forEach(el => el.remove());

  // vytvoříme nové
  const createIcon = (rel) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.type = "image/png";
    link.href = url;
    document.head.appendChild(link);
  };

  createIcon("icon");
  createIcon("shortcut icon");
  createIcon("apple-touch-icon");
})();
// === FAVICON ===
(function setFavicon(url) {
  const head = document.head;

  function upsert(rel, href, extra = {}) {
    let link = head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      head.appendChild(link);
    }
    Object.entries(extra).forEach(([k, v]) => (link[k] = v));
    link.href = href;
  }

  // Standard favicon
  upsert("icon", url, { type: "image/png" });
  // Pro starší prohlížeče
  upsert("shortcut icon", url, { type: "image/png" });
  // iOS/Android PWA dlaždice (nebývá na škodu)
  upsert("apple-touch-icon", url, {});

})("https://mindor-tv.github.io/popel_trisiasu/assets/z_popela_logo.png");


// --- Konfigurace menu ---
const menuData = {
  "Hlavní stránka": "https://mindor-tv.github.io/popel_trisiasu/index.html",
  "Družina": [
    { name: "Stogorin", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/stogorin/character.html" },
    { name: "Celeana Dawnshield", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/celeana/character.html" },
    { name: "Bogdan", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/bogdan/character.html" },
    { name: "Ofélie", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/ofelie/character.html" },
    { name: "Aeriel", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/aeriel/character.html" },
    { name: "Thalor", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/thalor/character.html" }
  ],
  "Mapy": [
    { name: "Oblagun", url: "mapy/oblagun.html" },
    { name: "Trisias", url: "mapy/trisias.html" }
  ],
  "NPC": [
    { name: "Mistr Kael", url: "npc/kael.html" }
  ],
  "Bohové": [
    { name: "Celkový přehled bohů", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/bohove.html" },
    { name: "Marlůvar", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/marluvar.html" },
    { name: "Ilnur", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/ilnur.html" },
    { name: "Glordi", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/glordi.html" },
    { name: "Malté", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/malte.html" },
    { name: "Monaryn", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/monaryn.html" },
    { name: "Tórlien", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/torlien.html" }
  ],
  "Dějiny Oblagunu": "https://mindor-tv.github.io/popel_trisiasu/dejiny-oblagunu.html",
  "Cheatsheet": "https://mindor-tv.github.io/popel_trisiasu/cheatsheet.html"
};

// === LEVÉ MENU ===
const menuContainer = document.getElementById("side-menu");
const toggleBtn = document.getElementById("menu-toggle");

if (menuContainer && toggleBtn) {
  Object.keys(menuData).forEach(category => {
    const section = document.createElement("div");
    section.classList.add("menu-section");

    if (typeof menuData[category] === "string") {
      const link = document.createElement("a");
      link.textContent = category;
      link.href = menuData[category];
      link.classList.add("menu-category");
      section.appendChild(link);
    } else {
      const header = document.createElement("div");
      header.textContent = category;
      header.classList.add("menu-category");
      section.appendChild(header);

      const submenu = document.createElement("div");
      submenu.classList.add("submenu");

      menuData[category].forEach(item => {
        const link = document.createElement("a");
        link.textContent = item.name;
        link.href = item.url;
        submenu.appendChild(link);
      });

      section.appendChild(submenu);

      // klik pro animované rozvinutí
      header.addEventListener("click", () => {
        submenu.classList.toggle("visible");
      });
    }

    menuContainer.appendChild(section);
  });

  toggleBtn.addEventListener("click", () => {
    menuContainer.classList.toggle("visible");
  });
}

// === Zvýraznění aktuální stránky ===
const currentUrl = window.location.href;
const links = menuContainer?.querySelectorAll("a") || [];

links.forEach(link => {
  const linkUrl = link.href;
  if (linkUrl === currentUrl) {
    link.style.color = "#ffcc66";
    const panel = link.closest(".submenu");
    if (panel) panel.classList.add("visible");
    const parentCategory = link.closest(".menu-section").querySelector(".menu-category");
    if (parentCategory) parentCategory.style.color = "#ffcc66";
  }
});

// === PRAVÝ SLIDER OBRÁZKŮ ===
const imagesToggle = document.getElementById("images-toggle");
const characterSlider = document.getElementById("character-slider");

if (imagesToggle && characterSlider) {
  imagesToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    characterSlider.classList.toggle("visible");
  });

  document.addEventListener("click", (e) => {
    if (!characterSlider.contains(e.target) && !imagesToggle.contains(e.target)) {
      characterSlider.classList.remove("visible");
    }
  });
}

const images = document.querySelectorAll('.character-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

function showImage() {
  const img = images[currentIndex];
  lightboxImg.src = img.src;
  lightboxCaption.textContent = img.getAttribute('data-caption') || '';
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.style.display = 'none';
  if (e.key === 'ArrowRight') nextBtn.click();
  if (e.key === 'ArrowLeft') prevBtn.click();
});






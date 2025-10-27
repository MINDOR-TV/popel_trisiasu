// --- Konfigurace menu ---
const menuData = {
  "Hlavní stránka": "https://mindor-tv.github.io/popel_trisiasu.github.io/index.html",
  "Postavy": [
    { name: "Koblížkova postava", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/postavy/koblizek/character.html" },
    { name: "Eminky postava", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/postavy/eminka/character.html" },
    { name: "Fílova postava", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/postavy/filip/character.html" },
    { name: "Kájina postava", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/postavy/kaja/character.html" },
    { name: "Žandy postava", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/postavy/zanda/character.html" },
    { name: "Tobyho postava", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/postavy/toby/character.html" }
  ],
  "Mapy": [
    { name: "Oblagun", url: "mapy/oblagun.html" },
    { name: "Kontinent Trisias", url: "mapy/trisias.html" }
  ],
  "NPC": [
    { name: "Mistr Kael", url: "npc/kael.html" }
  ],
  "Bohové": [
    { name: "Celkový přehled bohů", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove.html" },
    { name: "Marlůvar", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/marluvar.html" },
    { name: "Ilnur", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/ilnur.html" },
    { name: "Glordi", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/glordi.html" },
    { name: "Malté", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/malte.html" },
    { name: "Monaryn", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/monaryn.html" },
    { name: "Tórlien", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/torlien.html" },
  ],
  "Cheatsheet": "https://mindor-tv.github.io/popel_trisiasu.github.io/cheatsheet.html"
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


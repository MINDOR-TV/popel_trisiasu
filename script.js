// --- Konfigurace menu ---
const menuData = {
  "Hlavní stránka": "https://mindor-tv.github.io/popel_trisiasu.github.io/index.html",
  "Postavy": [
    { name: "Aldren", url: "postavy/aldren.html" },
    { name: "Lyra", url: "postavy/lyra.html" }
  ],
  "Mapy": [
    { name: "Oblagun", url: "mapy/oblagun.html" },
    { name: "Kontinent Trisias", url: "mapy/trisias.html" }
  ],
  "NPC": [
    { name: "Mistr Kael", url: "npc/kael.html" }
  ],
  "Bohové": [
    { name: "Celkový přehled bohů", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove.htmll" },
    { name: "Marlůvar", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/marluvar.html" },
    { name: "Ilnur", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/ilnur.html" },
    { name: "Glordi", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/glordi.html" },
    { name: "Malté", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/malte.html" },
    { name: "Monaryn", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/monaryn.html" },
    { name: "Tórlien", url: "https://mindor-tv.github.io/popel_trisiasu.github.io/bohove/bohove/torlien.html" },
  ],
  "Cheatsheet": "https://mindor-tv.github.io/popel_trisiasu.github.io/cheatsheet.html" // ← samostatný odkaz, ne pole
};

// --- Vykreslení menu ---
const menuContainer = document.getElementById("side-menu");

Object.keys(menuData).forEach(category => {
  const section = document.createElement("div");
  section.classList.add("menu-section");

  // Pokud je hodnota string → přímý odkaz (Cheatsheet)
  if (typeof menuData[category] === "string") {
    const link = document.createElement("a");
    link.textContent = category;
    link.href = menuData[category];
    link.classList.add("menu-category");
    section.appendChild(link);
  } 
  // Jinak jde o sekci s podmenu
  else {
    const header = document.createElement("div");
    header.textContent = category;
    header.classList.add("menu-category");
    section.appendChild(header);

    const submenu = document.createElement("div");
    submenu.classList.add("submenu", "hidden");

    menuData[category].forEach(item => {
      const link = document.createElement("a");
      link.textContent = item.name;
      link.href = item.url;
      submenu.appendChild(link);
    });

    section.appendChild(submenu);

    // Kliknutím rozbalit/sbalit podmenu
    header.addEventListener("click", () => {
      submenu.classList.toggle("hidden");
    });
  }

  menuContainer.appendChild(section);
});

// --- Ovládání hlavního vysouvacího menu ---
const toggleBtn = document.getElementById("menu-toggle");
toggleBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("visible");
});

// --- Zvýraznění aktuální stránky ---
const currentUrl = window.location.pathname.split("/").pop(); // např. 'bohove.html'

const links = menuContainer.querySelectorAll("a");
links.forEach(link => {
  const linkUrl = link.getAttribute("href").split("/").pop();
  if (linkUrl === currentUrl) {
    // Zvýrazní aktuální odkaz
    link.style.color = "#ffcc66";

    // Pokud je odkaz v podmenu, rozbalíme podmenu
    const panel = link.closest(".submenu");
    if (panel) {
      panel.classList.remove("hidden");
    }

    // Zvýrazní nadřazenou kategorii
    const parentCategory = link.closest(".menu-section").querySelector(".menu-category");
    if (parentCategory) {
      parentCategory.style.color = "#ffcc66";
    }
  }
});

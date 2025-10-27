// --- Konfigurace menu ---
const menuData = {
  "Hlavní stránka": "index.html",
  "Postavy": [
    { name: "Aldren", url: "postavy/aldren.html" },
    { name: "Lyra", url: "postavy/lyra.html" }
  ],
  "Mapy": [
    { name: "Město Trisias", url: "mapy/trisias.html" }
  ],
  "NPC": [
    { name: "Mistr Kael", url: "npc/kael.html" }
  ],
  "Bohové": [
    { name: "Amunar", url: "bohove/amunar.html" }
  ],
  "Cheatsheet": "cheatsheet.html" // ← samostatný odkaz, ne pole
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
const currentUrl = window.location.pathname.split("/").pop(); // získá např. 'aldren.html'

const links = menuContainer.querySelectorAll("a");
links.forEach(link => {
  const linkUrl = link.getAttribute("href").split("/").pop();
  if (linkUrl === currentUrl) {
    link.style.backgroundColor = "yellow"; // nebo jakákoliv barva
    link.style.color = "black"; // aby text byl čitelný
  }
});


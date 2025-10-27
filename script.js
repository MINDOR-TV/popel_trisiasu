// --- Konfigurace menu ---
const menuData = {
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
  "Cheatsheet": "cheatsheet.html"
};

// --- Vykreslení menu ---
const menuContainer = document.getElementById("side-menu");

Object.keys(menuData).forEach(category => {
  const section = document.createElement("div");
  section.classList.add("menu-section");

  // Nadpis sekce (klikací)
  const header = document.createElement("div");
  header.textContent = category;
  header.classList.add("menu-category");
  section.appendChild(header);

  // Vnitřní seznam (skrytý)
  const submenu = document.createElement("div");
  submenu.classList.add("submenu", "hidden");

  menuData[category].forEach(item => {
    const link = document.createElement("a");
    link.textContent = item.name;
    link.href = item.url;
    submenu.appendChild(link);
  });

  section.appendChild(submenu);
  menuContainer.appendChild(section);

  // Kliknutí na nadpis rozbaluje/sklápí submenu
  header.addEventListener("click", () => {
    submenu.classList.toggle("hidden");
  });
});

// --- Ovládání hlavního vysouvacího menu ---
const toggleBtn = document.getElementById("menu-toggle");
toggleBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("visible");
});


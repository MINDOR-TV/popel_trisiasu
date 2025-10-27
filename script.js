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
  "Cheatsheet": [
    { name: "Základní přehled", url: "cheatsheet.html" }
  ]
};

// --- Vykreslení menu ---
const menuContainer = document.getElementById("side-menu");

Object.keys(menuData).forEach(category => {
  const section = document.createElement("div");
  const header = document.createElement("h3");
  header.textContent = category;
  header.classList.add("menu-category");
  section.appendChild(header);

  menuData[category].forEach(item => {
    const link = document.createElement("a");
    link.textContent = item.name;
    link.href = item.url;
    section.appendChild(link);
  });

  menuContainer.appendChild(section);
});

// --- Ovládání menu ---
const toggleBtn = document.getElementById("menu-toggle");
toggleBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("visible");
});

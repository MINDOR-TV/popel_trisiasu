// === Globální favicon pro všechny podstránky ===
(function setGlobalFavicon() {
  const url = "https://mindor-tv.github.io/popel_trisiasu/assets/z_popela_logo.webp";

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

})("https://mindor-tv.github.io/popel_trisiasu/assets/z_popela_logo.webp");


// --- Konfigurace menu ---
const menuData = {
  "Hlavní stránka": "https://mindor-tv.github.io/popel_trisiasu/index.html",
  "Příběhy dobrodruhů": "https://mindor-tv.github.io/popel_trisiasu/pribehy_dobrodruhu.html",
  "Družina": [
    //{ name: "Stogorin", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/stogorin/character.html" },
    { name: "Aeriel", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/aeriel/character.html" },
    { name: "Bogdan", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/bogdan/character.html" },
    { name: "Celeana Dawnshield", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/celeana/character.html" },
    { name: "Ofélie", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/ofelie/character.html" }, 
    { name: "Thalor", url: "https://mindor-tv.github.io/popel_trisiasu/postavy/thalor/character.html" }
  ],
  "Mapy": [
    { name: "Oblagun", url: "https://mindor-tv.github.io/popel_trisiasu/mapy/oblagun.html" },
    { name: "Trisias", url: "https://mindor-tv.github.io/popel_trisiasu/mapy/trisias.html" },
  ],
  "Místa": [
    /*{ "Ostrovy Gunner": [
    ]},
    { "Mazerin": [
    ]},*/
    { "Trisias": [
      { "Království Allveir": [
        { name: "Averindor", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/averindor/averindor.html" },
        { name: "Černé Hory", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/cerne_hory/cerne_hory.html" },
        { name: "Horní Krupá", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/horni_krupa/horni_krupa.html" },
        { name: "Kamenolec", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/kamenolec/kamenolec.html" },
        { name: "Ostrokolí", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/ostrokoli/ostrokoli.html" },
        { name: "Prachovice", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/prachovice/prachovice.html" },
        { name: "Smrčná", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/smrcna/smrcna.html" },
        { name: "Stříbrná Rokle", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/stribrna_rokle/stribrna_rokle.html" },
        { name: "Suchý Pahorek", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/suchy_pahorek/suchy_pahorek.html" },
        { name: "Trisiaský Trezor", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/kralovstvi_severniho_lidu/trisiasky_trezor/trisiasky_trezor.html" }
      ]},
      { "Království Morvallat": [
        { name: "Dûm Karak", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/dum_karak/dum_karak.html" },
        { name: "Faünerithler", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/faunerithler/faunerithler.html" },
        { name: "Hvozdlina", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/hvozdlina/hvozdlina.html" },
        { name: "Lešijky", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/lesijky/lesijky.html" },
        { name: "Monaryn", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/monaryn/monaryn_mesto.html" },
        { name: "Popelgrad", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/popelgrad/popelgrad.html" },
        { name: "Prachtemir", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/prachtemir/prachtemir.html" },
        { name: "Praskliny", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/praskliny/praskliny.html" },
        { name: "Sky Reach", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/sky_reach/sky_reach.html" },
        { name: "Trilldas", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/trilldas/trilldas.html" },
        { name: "Záhořlice", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/zahorlice/zahorlice.html" },
        { name: "Zlatohrádek", url: "https://mindor-tv.github.io/popel_trisiasu/mista/trisias/monarynske_kralovstvi/zlatohradek/zlatohradek.html" }
      ]}
    ]},
    /*{ "Tromin": [
    ]},*/
  ],
  "NPC": [
    { name: "Ariana Dawnshield", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/ariana_minstrell/ariana_minstrell.html" },
    { name: "Aurora Dawnshield", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/aurora/aurora.html" },
    { name: "Benjamin Dawnshield", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/benjamin/benjamin.html" },
    { name: "Chaol Dawnshield", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/chaol/chaol.html" },
    { name: "Dudo", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/dudo/dudo.html" },
    //{ name: "Finley", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/finley/finley.html" },
    { name: "Eliška ze mlejna", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/eliska_ze_mlejna/eliska_ze_mlejna.html" },
    { name: "Folken", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/folken/folken.html" },
    { name: "Jindřich ze mlejna", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/jindrich_ze_mlejna/jindrich_ze_mlejna.html" },
    { name: "Kalkstein Školastyk", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/skolastyk/skolastyk.html" },
   // { name: "Kapitán Hilbert", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/kapitan_hilbert/kapitan_hilbert.html" },
    { name: "Marcel", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/marcel/marcel.html" },
    { name: "Oren Talld", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/oren_talld/oren_talld.html" },
    { name: "Pavel Perlík", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/pavel_perlik/pavel_perlik.html" },
    { name: "Plea", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/plea/plea.html" },
    { name: "Sarajev Slim", url:"https://mindor-tv.github.io/popel_trisiasu/NPC/sarajev_slim/sarajev_slim.html" },
    { name: "Starosta Velebníček", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/starosta_velebnicek/starosta_velebnicek.html" },
    { name: "Štěpán", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/stepan/stepan.html" },
    { name: "Vaelor Minstrell", url: "https://mindor-tv.github.io/popel_trisiasu/NPC/vaelor_minstrell/vaelor_minstrell.html" }
  ],
  "Božstvo": [
    { name: "Celkový přehled bohů", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/bohove.html" },
    { "Vyšší Pantheon": [
      { name: "Marlůvar", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/marluvar.html" },
      { name: "Ilnur", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/ilnur.html" },
      { name: "Glordi", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/glordi.html" },
      { name: "Malté", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/malte.html" },
      { name: "Monaryn", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/monaryn.html" },
      { name: "Tórlien", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/torlien.html" }
    ]},
    { "Nižší Pantheon": [
      { name: "Mondyl", url: "https://mindor-tv.github.io/popel_trisiasu/bohove/nizsi_bohove/mondyl/mondyl.html" }
    ]},
  ],
  "Dějiny Oblagunu": "https://mindor-tv.github.io/popel_trisiasu/dejiny-oblagunu.html",
  "Spellbook": [
    { name: "Bard", url: "https://dnd5e.wikidot.com/spells:bard" },
    { name: "Cleric", url: "https://dnd5e.wikidot.com/spells:cleric" },
    { name: "Druid", url: "https://dnd5e.wikidot.com/spells:druid" },
    { name: "Paladin", url: "https://dnd5e.wikidot.com/spells:paladin" },
    { name: "Ranger", url: "https://dnd5e.wikidot.com/spells:ranger" },
    { name: "Sorcerer", url: "https://dnd5e.wikidot.com/spells:sorcerer" },
    { name: "Warlock", url: "https://dnd5e.wikidot.com/spells:warlock" },
    { name: "Wizard", url: "https://dnd5e.wikidot.com/spells:wizard" }
  ],
  "Cheatsheet": "https://mindor-tv.github.io/popel_trisiasu/cheatsheet.html"
};

const homePopupData = {
  druzina: {
    title: "Družina",
    items: [
      { name: "Aeriel", url: "postavy/aeriel/character.html", banner: "assets/home-banners/aeriel.webp" },
      { name: "Bogdan", url: "postavy/bogdan/character.html", banner: "assets/home-banners/bogdan.webp" },
      { name: "Celeana Dawnshield", url: "postavy/celeana/character.html", banner: "assets/home-banners/celeana.webp" },
      { name: "Ofélie", url: "postavy/ofelie/character.html", banner: "assets/home-banners/ofelie.webp" },
      { name: "Thalor", url: "postavy/thalor/character.html", banner: "assets/home-banners/thalor.webp" }
    ]
  },
  mapy: {
    title: "Mapy",
    items: [
      { name: "Oblagun", url: "mapy/oblagun.html" },
      { name: "Trisias", url: "mapy/trisias.html" }
    ]
  },
  mista: {
    title: "Místa",
    groups: [
      {
        title: "Trisias",
        groups: [
          {
            title: "Království Allveir",
            items: [
              { name: "Averindor", url: "mista/trisias/kralovstvi_severniho_lidu/averindor/averindor.html" },
              { name: "Černé Hory", url: "mista/trisias/kralovstvi_severniho_lidu/cerne_hory/cerne_hory.html" },
              { name: "Horní Krupá", url: "mista/trisias/kralovstvi_severniho_lidu/horni_krupa/horni_krupa.html" },
              { name: "Kamenolec", url: "mista/trisias/kralovstvi_severniho_lidu/kamenolec/kamenolec.html" },
              { name: "Ostrokolí", url: "mista/trisias/kralovstvi_severniho_lidu/ostrokoli/ostrokoli.html" },
              { name: "Prachovice", url: "mista/trisias/kralovstvi_severniho_lidu/prachovice/prachovice.html" },
              { name: "Smrčná", url: "mista/trisias/kralovstvi_severniho_lidu/smrcna/smrcna.html" },
              { name: "Stříbrná Rokle", url: "mista/trisias/kralovstvi_severniho_lidu/stribrna_rokle/stribrna_rokle.html" },
              { name: "Suchý Pahorek", url: "mista/trisias/kralovstvi_severniho_lidu/suchy_pahorek/suchy_pahorek.html" },
              { name: "Trisiaský Trezor", url: "mista/trisias/kralovstvi_severniho_lidu/trisiasky_trezor/trisiasky_trezor.html" }
            ]
          },
          {
            title: "Království Morvallat",
            items: [
              { name: "Dům Karak", url: "mista/trisias/monarynske_kralovstvi/dum_karak/dum_karak.html" },
              { name: "Faünerithler", url: "mista/trisias/monarynske_kralovstvi/faunerithler/faunerithler.html" },
              { name: "Hvozdlina", url: "mista/trisias/monarynske_kralovstvi/hvozdlina/hvozdlina.html" },
              { name: "Lešijky", url: "mista/trisias/monarynske_kralovstvi/lesijky/lesijky.html" },
              { name: "Monaryn", url: "mista/trisias/monarynske_kralovstvi/monaryn/monaryn_mesto.html" },
              { name: "Popelgrad", url: "mista/trisias/monarynske_kralovstvi/popelgrad/popelgrad.html" },
              { name: "Prachtemir", url: "mista/trisias/monarynske_kralovstvi/prachtemir/prachtemir.html" },
              { name: "Praskliny", url: "mista/trisias/monarynske_kralovstvi/praskliny/praskliny.html" },
              { name: "Sky Reach", url: "mista/trisias/monarynske_kralovstvi/sky_reach/sky_reach.html" },
              { name: "Trilldas", url: "mista/trisias/monarynske_kralovstvi/trilldas/trilldas.html" },
              { name: "Záhořlice", url: "mista/trisias/monarynske_kralovstvi/zahorlice/zahorlice.html" },
              { name: "Zlatohrádek", url: "mista/trisias/monarynske_kralovstvi/zlatohradek/zlatohradek.html" }
            ]
          }
        ]
      },
      {
        title: "Gunnerovy ostrovy",
        hidden: true,
        groups: []
      },
      {
        title: "Mazerin",
        hidden: true,
        groups: []
      },
      {
        title: "Tromin",
        hidden: true,
        groups: []
      }
    ]
  },
  npc: {
    title: "NPC",
    items: [
      { name: "Ariana Dawnshield", url: "NPC/ariana_minstrell/ariana_minstrell.html" },
      { name: "Aurora Dawnshield", url: "NPC/aurora/aurora.html" },
      { name: "Benjamin Dawnshield", url: "NPC/benjamin/benjamin.html" },
      { name: "Chaol Dawnshield", url: "NPC/chaol/chaol.html" },
      { name: "Dudo", url: "NPC/dudo/dudo.html" },
      { name: "Eliška ze mlejna", url: "NPC/eliska_ze_mlejna/eliska_ze_mlejna.html" },
      //{ name: "Finley", url: "NPC/finley/finley.html" },
      { name: "Folken", url: "NPC/folken/folken.html" },
      { name: "Jindřich ze mlejna", url: "NPC/jindrich_ze_mlejna/jindrich_ze_mlejna.html" },
      { name: "Kalkstein Školastyk", url: "NPC/skolastyk/skolastyk.html" },
      //{ name: "Kapitán Hilbert", url: "NPC/kapitan_hilbert/kapitan_hilbert.html" },
      { name: "Marcel", url: "NPC/marcel/marcel.html" },
      { name: "Oren Talld", url: "NPC/oren_talld/oren_talld.html" },
      { name: "Pavel Perlík", url: "NPC/pavel_perlik/pavel_perlik.html" },
      { name: "Plea", url: "NPC/plea/plea.html" },
      { name: "Sarajev Slim", url: "NPC/sarajev_slim/sarajev_slim.html" },
      { name: "Starosta Velebníček", url: "NPC/starosta_velebnicek/starosta_velebnicek.html" },
      { name: "Štěpán", url: "NPC/stepan/stepan.html" },
      { name: "Vaelor Minstrell", url: "NPC/vaelor_minstrell/vaelor_minstrell.html" }
    ]
  },
  bozstvo: {
    title: "Božstvo",
    groups: [
      {
        title: "Přehled",
        items: [
          { name: "Celkový přehled bohů", url: "bohove/bohove.html" }
        ]
      },
      {
        title: "Vyšší Pantheon",
        items: [
          { name: "Marlůvar", url: "bohove/marluvar.html" },
          { name: "Ilnur", url: "bohove/ilnur.html" },
          { name: "Glordi", url: "bohove/glordi.html" },
          { name: "Malté", url: "bohove/malte.html" },
          { name: "Monaryn", url: "bohove/monaryn.html" },
          { name: "Tórlien", url: "bohove/torlien.html" }
        ]
      },
      {
        title: "Nižší Pantheon",
        items: [
          { name: "Mondyl", url: "bohove/nizsi_bohove/mondyl/mondyl.html" }
        ]
      }
    ]
  },
  spellbook: {
    title: "Spellbook",
    external: true,
    items: [
      { name: "Bard", url: "https://dnd5e.wikidot.com/spells:bard" },
      { name: "Cleric", url: "https://dnd5e.wikidot.com/spells:cleric" },
      { name: "Druid", url: "https://dnd5e.wikidot.com/spells:druid" },
      { name: "Paladin", url: "https://dnd5e.wikidot.com/spells:paladin" },
      { name: "Ranger", url: "https://dnd5e.wikidot.com/spells:ranger" },
      { name: "Sorcerer", url: "https://dnd5e.wikidot.com/spells:sorcerer" },
      { name: "Warlock", url: "https://dnd5e.wikidot.com/spells:warlock" },
      { name: "Wizard", url: "https://dnd5e.wikidot.com/spells:wizard" }
    ]
  }
};

// === LEVÉ MENU ===
const menuContainer = document.getElementById("side-menu");
const toggleBtn = document.getElementById("menu-toggle");

if (menuContainer && toggleBtn) {

  function createSubmenu(items, parentCategory) {
    const submenu = document.createElement("div");
    submenu.classList.add("submenu");

    items.forEach(item => {
      if (item.url) {
        const link = document.createElement("a");
        link.textContent = item.name;
        link.href = item.url;

        if (parentCategory === "Spellbook") {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }

        submenu.appendChild(link);
      } else if (typeof item === "object") {
        const key = Object.keys(item)[0];
        const nestedHeader = document.createElement("div");
        nestedHeader.textContent = key;
        nestedHeader.classList.add("menu-category", "nested-category");

        const nestedSubmenu = createSubmenu(item[key]);
        nestedHeader.addEventListener("click", () => {
          nestedSubmenu.classList.toggle("visible");
        });

        submenu.appendChild(nestedHeader);
        submenu.appendChild(nestedSubmenu);
      }
    });

    return submenu;
  }

  Object.keys(menuData).forEach(category => {
    const section = document.createElement("div");
    section.classList.add("menu-section");

    const value = menuData[category];

    if (typeof value === "string") {
      const link = document.createElement("a");
      link.textContent = category;
      link.href = value;
      link.classList.add("menu-category", "direct-link");
      section.appendChild(link);
      menuContainer.appendChild(section);
      return;
    }

    const header = document.createElement("div");
    header.textContent = category;
    header.classList.add("menu-category");
    section.appendChild(header);

    const submenu = createSubmenu(value, category);
    header.addEventListener("click", () => {
      submenu.classList.toggle("visible");
    });

    section.appendChild(submenu);
    menuContainer.appendChild(section);
  });
  
 // --- Přidání externího odkazu úplně dolů levého slideru ---
(function addExternalLink() {
  const menuContainer = document.getElementById("side-menu");
  if (!menuContainer) return;

  menuContainer.style.display = "flex";
  menuContainer.style.flexDirection = "column";
  menuContainer.style.overflowY = "auto";

  const section = document.createElement("div");
  section.classList.add("menu-section");
  section.style.marginTop = "auto";

  const link = document.createElement("a");
  link.textContent = "Oblagun";
  link.href = "https://mindor-tv.github.io/oblagun/index.html";
  link.classList.add("menu-category", "direct-link");

  section.appendChild(link);
  menuContainer.appendChild(section);
})();

  toggleBtn.addEventListener("click", () => {
    menuContainer.classList.toggle("visible");
  });
}

// === Zvýraznění aktuální stránky ===
const currentUrl = window.location.href;
const links = menuContainer?.querySelectorAll("a") || [];

links.forEach(link => {
  if (link.href === currentUrl) {
    link.style.color = "#ffcc66";
    let parent = link.parentElement;
    while (parent && parent !== menuContainer) {
      if (parent.classList.contains("submenu")) parent.classList.add("visible");
      const header = parent.previousElementSibling;
      if (header && header.classList.contains("menu-category")) header.style.color = "#ffcc66";
      parent = parent.parentElement;
    }
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

if (lightbox && lightboxImg && lightboxCaption) {
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage();
      lightbox.style.display = 'flex';
    });
  });
}

function showImage() {
  const img = images[currentIndex];
  if (!img || !lightboxImg || !lightboxCaption) return;
  lightboxImg.src = img.src;
  lightboxCaption.textContent = img.getAttribute('data-caption') || '';
}

nextBtn?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

closeBtn?.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightbox) lightbox.style.display = 'none';
    closeHomePopup();
  }
  if (e.key === 'ArrowRight') nextBtn?.click();
  if (e.key === 'ArrowLeft') prevBtn?.click();
});

// === ÚVODNÍ POPUP KARTY ===
const homePopup = document.getElementById("home-popup");
const homePopupTitle = homePopup?.querySelector(".home-popup__title");
const homePopupContent = homePopup?.querySelector(".home-popup__content");
const homePopupClose = homePopup?.querySelector(".home-popup__close");
const homeCards = document.querySelectorAll("[data-home-popup]");

function createHomeLink(item, external = false) {
  const link = document.createElement("a");
  link.className = "home-popup__link";
  link.href = item.url;
  link.textContent = item.name;

  if (item.banner) {
    link.classList.add("home-popup__link--banner");
    link.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,0.78), rgba(0,0,0,0.25)), url("${item.banner}")`;
  }

  if (external || item.url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  return link;
}

function renderHomeGroup(group, external = false, level = 0) {
  if (group.hidden) return null;

  const groupEl = document.createElement("section");
  groupEl.className = "home-popup__group";
  if (level > 0) groupEl.classList.add("home-popup__group--nested");

  const hasChildren = Boolean(group.items?.length || group.groups?.length);
  const isCollapsible = hasChildren;
  const contentEl = document.createElement("div");
  contentEl.className = "home-popup__group-content";

  if (isCollapsible) {
    groupEl.classList.add("is-collapsed");

    const heading = document.createElement("button");
    heading.type = "button";
    heading.className = "home-popup__group-toggle";
    heading.textContent = group.title;
    heading.setAttribute("aria-expanded", "false");

    heading.addEventListener("click", () => {
      const isOpen = groupEl.classList.toggle("is-collapsed") === false;
      heading.setAttribute("aria-expanded", String(isOpen));
    });

    groupEl.appendChild(heading);
  } else {
    const heading = document.createElement(level === 0 ? "h3" : "h4");
    heading.textContent = group.title;
    groupEl.appendChild(heading);
  }

  group.items?.forEach(item => {
    contentEl.appendChild(createHomeLink(item, external));
  });

  group.groups?.forEach(childGroup => {
    const childEl = renderHomeGroup(childGroup, external, level + 1);
    if (childEl) contentEl.appendChild(childEl);
  });

  if (hasChildren) groupEl.appendChild(contentEl);

  return groupEl;
}

function closeHomePopup() {
  if (!homePopup) return;
  homePopup.classList.remove("visible");
  homePopup.setAttribute("aria-hidden", "true");
}

function openHomePopup(key) {
  const data = homePopupData[key];
  if (!data || !homePopup || !homePopupTitle || !homePopupContent) return;

  homePopupTitle.textContent = data.title;
  homePopupContent.innerHTML = "";

  if (data.groups) {
    data.groups.forEach(group => {
      const groupEl = renderHomeGroup(group, data.external);
      if (groupEl) homePopupContent.appendChild(groupEl);
    });
  } else {
    data.items.forEach(item => {
      homePopupContent.appendChild(createHomeLink(item, data.external));
    });
  }

  homePopup.classList.add("visible");
  homePopup.setAttribute("aria-hidden", "false");
}

homeCards.forEach(card => {
  card.addEventListener("click", () => {
    openHomePopup(card.dataset.homePopup);
  });
});

homePopupClose?.addEventListener("click", closeHomePopup);

homePopup?.addEventListener("click", (e) => {
  if (e.target === homePopup) closeHomePopup();
});

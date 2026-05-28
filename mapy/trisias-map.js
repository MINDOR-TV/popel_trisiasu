const trisiasMapElement = document.getElementById("trisias-map");

if (trisiasMapElement && window.L) {
  const imageWidth = 2048;
  const imageHeight = 2048;
  const bounds = [
    [0, 0],
    [imageHeight, imageWidth],
  ];

  const map = L.map(trisiasMapElement, {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoomSnap: 0.25,
    attributionControl: false,
  });

  L.imageOverlay("../assets/mapy/Trisias2.webp", bounds).addTo(map);
  map.fitBounds(bounds);
  map.setMaxBounds([
    [-220, -220],
    [imageHeight + 220, imageWidth + 220],
  ]);

  const places = [
    {
      name: "Trisiaský Trezor",
      x: 770,
      y: 85,
      url: "../mista/trisias/kralovstvi_severniho_lidu/trisiasky_trezor/trisiasky_trezor.html",
      description: "Severní pevnost ukrytá v horách.",
    },
    {
      name: "Suchý Pahorek",
      x: 705,
      y: 180,
      url: "../mista/trisias/kralovstvi_severniho_lidu/suchy_pahorek/suchy_pahorek.html",
      description: "Osada na severu Allveiru.",
    },
    {
      name: "Averindor",
      x: 820,
      y: 330,
      url: "../mista/trisias/kralovstvi_severniho_lidu/averindor/averindor.html",
      description: "Významné město severního království.",
    },
    {
      name: "Stříbrná Rokle",
      x: 1145,
      y: 220,
      url: "../mista/trisias/kralovstvi_severniho_lidu/stribrna_rokle/stribrna_rokle.html",
      description: "Horská oblast na severovýchodě Trisiasu.",
    },
    {
      name: "Smrčná",
      x: 765,
      y: 500,
      url: "../mista/trisias/kralovstvi_severniho_lidu/smrcna/smrcna.html",
      description: "Vesnice u západní cesty z Averindoru.",
    },
    {
      name: "Ostrokolí",
      x: 1035,
      y: 455,
      url: "../mista/trisias/kralovstvi_severniho_lidu/ostrokoli/ostrokoli.html",
      description: "Místo u průchodu přes centrální řeku.",
    },
    {
      name: "Prachovice",
      x: 1260,
      y: 525,
      url: "../mista/trisias/kralovstvi_severniho_lidu/prachovice/prachovice.html",
      description: "Sídlo u mostu pod horským hřebenem.",
    },
    {
      name: "Kamenolec",
      x: 1440,
      y: 675,
      url: "../mista/trisias/kralovstvi_severniho_lidu/kamenolec/kamenolec.html",
      description: "Místo na východní cestě Allveirem.",
    },
    {
      name: "Horní Krupá",
      x: 1365,
      y: 855,
      url: "../mista/trisias/kralovstvi_severniho_lidu/horni_krupa/horni_krupa.html",
      description: "Vesnice u říčního přechodu.",
    },
    {
      name: "Praskliny",
      x: 320,
      y: 590,
      url: "../mista/trisias/monarynske_kralovstvi/praskliny/praskliny.html",
      description: "Západní horská oblast Trisiasu.",
    },
    {
      name: "Lešijky",
      x: 500,
      y: 720,
      url: "../mista/trisias/monarynske_kralovstvi/lesijky/lesijky.html",
      description: "Sídlo pod Prasklinami.",
    },
    {
      name: "Prachtemir",
      x: 955,
      y: 735,
      url: "../mista/trisias/monarynske_kralovstvi/prachtemir/prachtemir.html",
      description: "Pohraniční městečko mezi Allveirem a Morvallatem.",
    },
    {
      name: "Záhořlice",
      x: 1115,
      y: 870,
      url: "../mista/trisias/monarynske_kralovstvi/zahorlice/zahorlice.html",
      description: "Místo v centrální části Trisiasu.",
    },
    {
      name: "Monaryn",
      x: 615,
      y: 940,
      url: "../mista/trisias/monarynske_kralovstvi/monaryn/monaryn_mesto.html",
      description: "Velké město a důležitý bod Morvallatu.",
    },
    {
      name: "Zlatohrádek",
      x: 805,
      y: 905,
      url: "../mista/trisias/monarynske_kralovstvi/zlatohradek/zlatohradek.html",
      description: "Sídlo mezi Monarynem a Prachtemirem.",
    },
    {
      name: "Hvozdlina",
      x: 720,
      y: 1110,
      url: "../mista/trisias/monarynske_kralovstvi/hvozdlina/hvozdlina.html",
      description: "Místo jižně od Monarynu.",
    },
    {
      name: "Dům Karak",
      x: 550,
      y: 1250,
      url: "../mista/trisias/monarynske_kralovstvi/dum_karak/dum_karak.html",
      description: "Pevnost v jihozápadní části Trisiasu.",
    },
    {
      name: "Popelgrad",
      x: 1125,
      y: 1190,
      url: "../mista/trisias/monarynske_kralovstvi/popelgrad/popelgrad.html",
      description: "Město na jižní cestě k Trilldasu.",
    },
    {
      name: "Trilldas",
      x: 900,
      y: 1390,
      url: "../mista/trisias/monarynske_kralovstvi/trilldas/trilldas.html",
      description: "Jižní sídlo Morvallatu.",
    },
    {
      name: "Sky Reach",
      x: 1450,
      y: 1590,
      url: "../mista/trisias/monarynske_kralovstvi/sky_reach/sky_reach.html",
      description: "Horská oblast na jihovýchodě Trisiasu.",
    },
  ];

  places.forEach((place) => {
    L.marker([imageHeight - place.y, place.x])
      .addTo(map)
      .bindPopup(`
        <div class="map-popup">
          <strong>${place.name}</strong>
          <p>${place.description}</p>
          <a href="${place.url}" class="map-popup__link">Otevřít místo</a>
        </div>
      `, {
        autoPan: true,
        autoPanPadding: [32, 32],
      });
  });
}

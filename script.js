/* ==================================================
   DATA MENU
   ================================================== */

const menuData = {
  senin: {
    hari: "Senin",
    tanggal: "24 Agustus 2026",
    gambar: "./assets/menu-senin.jpg",
    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",
    carbohydrate: "Nasi",
    animalProtein: "Menu Protein Hewani Senin",
    plantProtein: "Menu Lauk Nabati Senin",
    vegetable: "Sayuran Senin",
    fruit: "Buah Senin",
    gizi: {
      energiKecil: "— kkal",
      energiBesar: "— kkal",
      proteinKecil: "— g",
      proteinBesar: "— g",
      lemakKecil: "— g",
      lemakBesar: "— g",
      karboKecil: "— g",
      karboBesar: "— g",
      seratKecil: "— g",
      seratBesar: "— g"
    }
  },

  selasa: {
    hari: "Selasa",
    tanggal: "25 Agustus 2026",
    gambar: "./assets/menu-selasa.jpg",
    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",
    carbohydrate: "Nasi",
    animalProtein: "Menu Protein Hewani Selasa",
    plantProtein: "Menu Lauk Nabati Selasa",
    vegetable: "Sayuran Selasa",
    fruit: "Buah Selasa",
    gizi: {
      energiKecil: "— kkal",
      energiBesar: "— kkal",
      proteinKecil: "— g",
      proteinBesar: "— g",
      lemakKecil: "— g",
      lemakBesar: "— g",
      karboKecil: "— g",
      karboBesar: "— g",
      seratKecil: "— g",
      seratBesar: "— g"
    }
  },

  rabu: {
    hari: "Rabu",
    tanggal: "26 Agustus 2026",
    gambar: "./assets/menu-rabu.jpg",
    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",
    carbohydrate: "Nasi",
    animalProtein: "Menu Protein Hewani Rabu",
    plantProtein: "Menu Lauk Nabati Rabu",
    vegetable: "Sayuran Rabu",
    fruit: "Buah Rabu",
    gizi: {
      energiKecil: "— kkal",
      energiBesar: "— kkal",
      proteinKecil: "— g",
      proteinBesar: "— g",
      lemakKecil: "— g",
      lemakBesar: "— g",
      karboKecil: "— g",
      karboBesar: "— g",
      seratKecil: "— g",
      seratBesar: "— g"
    }
  },

  kamis: {
    hari: "Kamis",
    tanggal: "27 Agustus 2026",
    gambar: "./assets/menu-mbg.jpg",
    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",
    carbohydrate: "Nasi",
    animalProtein: "Menu Protein Hewani",
    plantProtein: "Menu Lauk Nabati",
    vegetable: "Sayuran",
    fruit: "Buah",
    gizi: {
      energiKecil: "— kkal",
      energiBesar: "— kkal",
      proteinKecil: "— g",
      proteinBesar: "— g",
      lemakKecil: "— g",
      lemakBesar: "— g",
      karboKecil: "— g",
      karboBesar: "— g",
      seratKecil: "— g",
      seratBesar: "— g"
    }
  },

  jumat: {
    hari: "Jumat",
    tanggal: "28 Agustus 2026",
    gambar: "./assets/menu-jumat.jpg",
    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",
    carbohydrate: "Nasi",
    animalProtein: "Menu Protein Hewani Jumat",
    plantProtein: "Menu Lauk Nabati Jumat",
    vegetable: "Sayuran Jumat",
    fruit: "Buah Jumat",
    gizi: {
      energiKecil: "— kkal",
      energiBesar: "— kkal",
      proteinKecil: "— g",
      proteinBesar: "— g",
      lemakKecil: "— g",
      lemakBesar: "— g",
      karboKecil: "— g",
      karboBesar: "— g",
      seratKecil: "— g",
      seratBesar: "— g"
    }
  }
};


/* ==================================================
   ELEMEN HTML
   ================================================== */

const elements = {
  dayName: document.getElementById("dayName"),
  dayDate: document.getElementById("dayDate"),
  menuImage: document.getElementById("menuImage"),
  menuTitle: document.getElementById("menuTitle"),
  menuDescription: document.getElementById("menuDescription"),

  carbohydrate: document.getElementById("carbohydrate"),
  animalProtein: document.getElementById("animalProtein"),
  plantProtein: document.getElementById("plantProtein"),
  vegetable: document.getElementById("vegetable"),
  fruit: document.getElementById("fruit"),

  energySmall: document.getElementById("energySmall"),
  energyLarge: document.getElementById("energyLarge"),
  proteinSmall: document.getElementById("proteinSmall"),
  proteinLarge: document.getElementById("proteinLarge"),
  fatSmall: document.getElementById("fatSmall"),
  fatLarge: document.getElementById("fatLarge"),
  carbSmall: document.getElementById("carbSmall"),
  carbLarge: document.getElementById("carbLarge"),
  fiberSmall: document.getElementById("fiberSmall"),
  fiberLarge: document.getElementById("fiberLarge")
};


/* ==================================================
   TAMPILKAN MENU
   ================================================== */

function tampilkanMenu(hari) {
  const menu = menuData[hari];

  if (!menu) {
    return;
  }

  elements.dayName.textContent = menu.hari;
  elements.dayDate.textContent = menu.tanggal;

  elements.menuImage.src = menu.gambar;
  elements.menuImage.alt = `Menu Makan Bergizi Gratis ${menu.hari}`;

  /*
    Jika foto hari tertentu belum ada,
    otomatis gunakan foto utama menu-mbg.jpg.
  */
  elements.menuImage.onerror = function () {
    this.onerror = null;
    this.src = "./assets/menu-mbg.jpg";
  };

  elements.menuTitle.textContent = menu.judul;
  elements.menuDescription.textContent = menu.deskripsi;

  elements.carbohydrate.textContent = menu.carbohydrate;
  elements.animalProtein.textContent = menu.animalProtein;
  elements.plantProtein.textContent = menu.plantProtein;
  elements.vegetable.textContent = menu.vegetable;
  elements.fruit.textContent = menu.fruit;

  elements.energySmall.textContent = menu.gizi.energiKecil;
  elements.energyLarge.textContent = menu.gizi.energiBesar;

  elements.proteinSmall.textContent = menu.gizi.proteinKecil;
  elements.proteinLarge.textContent = menu.gizi.proteinBesar;

  elements.fatSmall.textContent = menu.gizi.lemakKecil;
  elements.fatLarge.textContent = menu.gizi.lemakBesar;

  elements.carbSmall.textContent = menu.gizi.karboKecil;
  elements.carbLarge.textContent = menu.gizi.karboBesar;

  elements.fiberSmall.textContent = menu.gizi.seratKecil;
  elements.fiberLarge.textContent = menu.gizi.seratBesar;

  document.querySelectorAll(".day-button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.day === hari
    );
  });
}


/* ==================================================
   KLIK TOMBOL HARI
   ================================================== */

document.querySelectorAll(".day-button").forEach((button) => {
  button.addEventListener("click", () => {
    tampilkanMenu(button.dataset.day);

    const mainContent = document.querySelector(".content");

    if (mainContent) {
      mainContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* ==================================================
   MENU DEFAULT
   ================================================== */

tampilkanMenu("kamis");

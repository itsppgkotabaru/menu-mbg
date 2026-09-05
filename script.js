/* =================================
   DATA MENU
   ================================= */

const menuData = {

  senin: {

    hari: "Senin",
    tanggal: "24 Agustus 2026",

    gambar: "assets/menu-senin.jpg",

    judul: "Paket Makan Bergizi Gratis",

    deskripsi:
      "Nasi • Lauk protein • Sayuran • Buah",

    carbohydrate:
      "Nasi",

    animalProtein:
      "Menu Protein Hewani Senin",

    plantProtein:
      "Menu Lauk Nabati Senin",

    vegetable:
      "Sayuran Senin",

    fruit:
      "Buah Senin",

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

    gambar: "assets/menu-selasa.jpg",

    judul: "Paket Makan Bergizi Gratis",

    deskripsi:
      "Nasi • Lauk protein • Sayuran • Buah",

    carbohydrate:
      "Nasi",

    animalProtein:
      "Menu Protein Hewani Selasa",

    plantProtein:
      "Menu Lauk Nabati Selasa",

    vegetable:
      "Sayuran Selasa",

    fruit:
      "Buah Selasa",

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

    gambar: "assets/menu-rabu.jpg",

    judul: "Paket Makan Bergizi Gratis",

    deskripsi:
      "Nasi • Lauk protein • Sayuran • Buah",

    carbohydrate:
      "Nasi",

    animalProtein:
      "Menu Protein Hewani Rabu",

    plantProtein:
      "Menu Lauk Nabati Rabu",

    vegetable:
      "Sayuran Rabu",

    fruit:
      "Buah Rabu",

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

    gambar: "assets/menu-mbg.jpg",

    judul: "Paket Makan Bergizi Gratis",

    deskripsi:
      "Nasi • Lauk protein • Sayuran • Buah",

    carbohydrate:
      "Nasi",

    animalProtein:
      "Menu Protein Hewani",

    plantProtein:
      "Menu Lauk Nabati",

    vegetable:
      "Sayuran",

    fruit:
      "Buah",

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

    gambar: "assets/menu-jumat.jpg",

    judul: "Paket Makan Bergizi Gratis",

    deskripsi:
      "Nasi • Lauk protein • Sayuran • Buah",

    carbohydrate:
      "Nasi",

    animalProtein:
      "Menu Protein Hewani Jumat",

    plantProtein:
      "Menu Lauk Nabati Jumat",

    vegetable:
      "Sayuran Jumat",

    fruit:
      "Buah Jumat",

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


/* =================================
   FUNGSI MENAMPILKAN MENU
   ================================= */

function tampilkanMenu(hari) {

  const menu = menuData[hari];

  if (!menu) {
    return;
  }


  /* ===============================
     TANGGAL
     =============================== */

  document.getElementById("dayName").textContent =
    menu.hari;

  document.getElementById("dayDate").textContent =
    menu.tanggal;


  /* ===============================
     FOTO
     =============================== */

  const menuImage =
    document.getElementById("menuImage");

  menuImage.src =
    menu.gambar;

  menuImage.alt =
    "Menu Makan Bergizi Gratis " + menu.hari;


  /* ===============================
     JUDUL
     =============================== */

  document.getElementById("menuTitle").textContent =
    menu.judul;


  document.getElementById("menuDescription").textContent =
    menu.deskripsi;


  /* ===============================
     ISI OMPRANG
     =============================== */

  document.getElementById("carbohydrate").textContent =
    menu.carbohydrate;

  document.getElementById("animalProtein").textContent =
    menu.animalProtein;

  document.getElementById("plantProtein").textContent =
    menu.plantProtein;

  document.getElementById("vegetable").textContent =
    menu.vegetable;

  document.getElementById("fruit").textContent =
    menu.fruit;


  /* ===============================
     KANDUNGAN GIZI
     =============================== */

  document.getElementById("energySmall").textContent =
    menu.gizi.energiKecil;

  document.getElementById("energyLarge").textContent =
    menu.gizi.energiBesar;


  document.getElementById("proteinSmall").textContent =
    menu.gizi.proteinKecil;

  document.getElementById("proteinLarge").textContent =
    menu.gizi.proteinBesar;


  document.getElementById("fatSmall").textContent =
    menu.gizi.lemakKecil;

  document.getElementById("fatLarge").textContent =
    menu.gizi.lemakBesar;


  document.getElementById("carbSmall").textContent =
    menu.gizi.karboKecil;

  document.getElementById("carbLarge").textContent =
    menu.gizi.karboBesar;


  document.getElementById("fiberSmall").textContent =
    menu.gizi.seratKecil;

  document.getElementById("fiberLarge").textContent =
    menu.gizi.seratBesar;


  /* ===============================
     TOMBOL AKTIF
     =============================== */

  const buttons =
    document.querySelectorAll(".day-button");


  buttons.forEach(button => {

    button.classList.remove("active");

  });


  const activeButton =
    document.querySelector(
      `.day-button[data-day="${hari}"]`
    );


  if (activeButton) {

    activeButton.classList.add("active");

  }

}


/* =================================
   EVENT CLICK TOMBOL
   ================================= */

document.querySelectorAll(".day-button").forEach(button => {

  button.addEventListener("click", function () {

    const hari =
      this.getAttribute("data-day");

    tampilkanMenu(hari);


    /* Scroll ke bagian menu utama */

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

});


/* =================================
   MENU DEFAULT
   ================================= */

tampilkanMenu("kamis");

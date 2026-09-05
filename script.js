```javascript
/* =========================================
   DATA MENU MINGGU INI
   ========================================= */

const menuData = {

  senin: {
    hari: "Senin",
    tanggal: "24 Agustus 2026",

    gambar: "assets/menu-senin.jpg",

    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",

    karbohidrat: "Nasi",
    proteinHewani: "Menu Protein Hewani",
    laukNabati: "Menu Lauk Nabati",
    sayur: "Sayuran",
    buah: "Buah",

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
  },


  selasa: {
    hari: "Selasa",
    tanggal: "25 Agustus 2026",

    gambar: "assets/menu-selasa.jpg",

    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",

    karbohidrat: "Nasi",
    proteinHewani: "Menu Protein Hewani",
    laukNabati: "Menu Lauk Nabati",
    sayur: "Sayuran",
    buah: "Buah",

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
  },


  rabu: {
    hari: "Rabu",
    tanggal: "26 Agustus 2026",

    gambar: "assets/menu-rabu.jpg",

    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",

    karbohidrat: "Nasi",
    proteinHewani: "Menu Protein Hewani",
    laukNabati: "Menu Lauk Nabati",
    sayur: "Sayuran",
    buah: "Buah",

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
  },


  kamis: {
    hari: "Kamis",
    tanggal: "27 Agustus 2026",

    gambar: "assets/menu-kamis.jpg",

    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",

    karbohidrat: "Nasi",
    proteinHewani: "Menu Protein Hewani",
    laukNabati: "Menu Lauk Nabati",
    sayur: "Sayuran",
    buah: "Buah",

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
  },


  jumat: {
    hari: "Jumat",
    tanggal: "28 Agustus 2026",

    gambar: "assets/menu-jumat.jpg",

    judul: "Paket Makan Bergizi Gratis",
    deskripsi: "Nasi • Lauk protein • Sayuran • Buah",

    karbohidrat: "Nasi",
    proteinHewani: "Menu Protein Hewani",
    laukNabati: "Menu Lauk Nabati",
    sayur: "Sayuran",
    buah: "Buah",

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

};


/* =========================================
   FUNGSI UNTUK MENAMPILKAN MENU
   ========================================= */

function tampilkanMenu(hari) {

  const menu = menuData[hari];

  if (!menu) {
    return;
  }


  /* ================================
     HARI DAN TANGGAL
     ================================ */

  document.getElementById("dayName").textContent =
    menu.hari;

  document.getElementById("dayDate").textContent =
    menu.tanggal;


  /* ================================
     FOTO
     ================================ */

  const image = document.getElementById("menuImage");

  image.style.opacity = "0";

  setTimeout(function () {

    image.src = menu.gambar;

    image.alt =
      "Menu Makan Bergizi Gratis " + menu.hari;

    image.onload = function () {
      image.style.opacity = "1";
    };

    /*
     * Jika gambar tidak ditemukan,
     * tetap tampilkan kembali gambarnya.
     */
    image.onerror = function () {
      image.style.opacity = "1";
    };

  }, 150);


  /* ================================
     JUDUL DAN DESKRIPSI
     ================================ */

  document.getElementById("menuTitle").textContent =
    menu.judul;

  document.getElementById("menuDescription").textContent =
    menu.deskripsi;


  /* ================================
     ISI OMPRANG
     ================================ */

  document.getElementById("carbohydrate").textContent =
    menu.karbohidrat;

  document.getElementById("animalProtein").textContent =
    menu.proteinHewani;

  document.getElementById("plantProtein").textContent =
    menu.laukNabati;

  document.getElementById("vegetable").textContent =
    menu.sayur;

  document.getElementById("fruit").textContent =
    menu.buah;


  /* ================================
     KANDUNGAN GIZI
     ================================ */

  document.getElementById("energySmall").textContent =
    menu.energiKecil;

  document.getElementById("energyLarge").textContent =
    menu.energiBesar;


  document.getElementById("proteinSmall").textContent =
    menu.proteinKecil;

  document.getElementById("proteinLarge").textContent =
    menu.proteinBesar;


  document.getElementById("fatSmall").textContent =
    menu.lemakKecil;

  document.getElementById("fatLarge").textContent =
    menu.lemakBesar;


  document.getElementById("carbSmall").textContent =
    menu.karboKecil;

  document.getElementById("carbLarge").textContent =
    menu.karboBesar;


  document.getElementById("fiberSmall").textContent =
    menu.seratKecil;

  document.getElementById("fiberLarge").textContent =
    menu.seratBesar;


  /* ================================
     TOMBOL AKTIF
     ================================ */

  const buttons =
    document.querySelectorAll(".day-button");


  buttons.forEach(function (button) {

    button.classList.remove("active");

    const label =
      button.querySelector(".active-label");

    if (label) {
      label.remove();
    }

  });


  const activeButton =
    document.querySelector(
      `.day-button[data-day="${hari}"]`
    );


  if (activeButton) {

    activeButton.classList.add("active");

    const label =
      document.createElement("div");

    label.className = "active-label";

    label.textContent = "DIPILIH";

    activeButton.prepend(label);
  }

}


/* =========================================
   EVENT TOMBOL
   ========================================= */

document.querySelectorAll(".day-button")
  .forEach(function (button) {

    button.addEventListener("click", function () {

      const hari =
        this.getAttribute("data-day");

      tampilkanMenu(hari);


      /* Scroll kembali ke menu utama */

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  });


/* =========================================
   MENU DEFAULT
   ========================================= */

tampilkanMenu("kamis");
```

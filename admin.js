/* ==================================================
   ADMIN SPPG
   Penyimpanan frontend menggunakan localStorage
   ================================================== */

const STORAGE_KEY = "mbgMenuData";

const defaultMenuData = {
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

let menuData = loadData();
let selectedDay = "kamis";
let selectedPhotoData = null;

const fields = {
  hari: document.getElementById("hari"),
  tanggal: document.getElementById("tanggal"),
  gambar: document.getElementById("gambar"),
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

const saveStatus = document.getElementById("saveStatus");
const selectedDayTitle = document.getElementById("selectedDayTitle");
const selectedDateBadge = document.getElementById("selectedDateBadge");
const photoPreview = document.getElementById("photoPreview");
const menuForm = document.getElementById("menuForm");
const photoFile = document.getElementById("photoFile");


function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}


function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return cloneData(defaultMenuData);
    }

    const parsed = JSON.parse(saved);

    return {
      ...cloneData(defaultMenuData),
      ...parsed
    };
  } catch (error) {
    console.error("Gagal membaca data:", error);
    return cloneData(defaultMenuData);
  }
}


function setStatus(text, saved = false) {
  saveStatus.textContent = text;
  saveStatus.classList.toggle("saved", saved);
}


function loadForm(day) {
  selectedDay = day;

  const menu = menuData[day];

  if (!menu) {
    return;
  }

  fields.hari.value = menu.hari || "";
  fields.tanggal.value = menu.tanggal || "";
  fields.gambar.value = menu.gambar || "";
  fields.menuTitle.value = menu.judul || "";
  fields.menuDescription.value = menu.deskripsi || "";

  fields.carbohydrate.value = menu.carbohydrate || "";
  fields.animalProtein.value = menu.animalProtein || "";
  fields.plantProtein.value = menu.plantProtein || "";
  fields.vegetable.value = menu.vegetable || "";
  fields.fruit.value = menu.fruit || "";

  const gizi = menu.gizi || {};

  fields.energySmall.value = gizi.energiKecil || "";
  fields.energyLarge.value = gizi.energiBesar || "";

  fields.proteinSmall.value = gizi.proteinKecil || "";
  fields.proteinLarge.value = gizi.proteinBesar || "";

  fields.fatSmall.value = gizi.lemakKecil || "";
  fields.fatLarge.value = gizi.lemakBesar || "";

  fields.carbSmall.value = gizi.karboKecil || "";
  fields.carbLarge.value = gizi.karboBesar || "";

  fields.fiberSmall.value = gizi.seratKecil || "";
  fields.fiberLarge.value = gizi.seratBesar || "";

  selectedDayTitle.textContent = `Menu ${menu.hari}`;
  selectedDateBadge.textContent = menu.tanggal || "";

  selectedPhotoData = null;

  if (menu.gambar) {
    photoPreview.src = menu.gambar;
  }

  document.querySelectorAll(".admin-day-button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.day === day
    );
  });

  setStatus("Belum ada perubahan");
}


function collectForm() {
  const previous = menuData[selectedDay] || {};

  return {
    ...previous,
    hari: fields.hari.value.trim(),
    tanggal: fields.tanggal.value.trim(),
    gambar: fields.gambar.value.trim(),
    judul: fields.menuTitle.value.trim(),
    deskripsi: fields.menuDescription.value.trim(),
    carbohydrate: fields.carbohydrate.value.trim(),
    animalProtein: fields.animalProtein.value.trim(),
    plantProtein: fields.plantProtein.value.trim(),
    vegetable: fields.vegetable.value.trim(),
    fruit: fields.fruit.value.trim(),

    gizi: {
      ...(previous.gizi || {}),
      energiKecil: fields.energySmall.value.trim(),
      energiBesar: fields.energyLarge.value.trim(),
      proteinKecil: fields.proteinSmall.value.trim(),
      proteinBesar: fields.proteinLarge.value.trim(),
      lemakKecil: fields.fatSmall.value.trim(),
      lemakBesar: fields.fatLarge.value.trim(),
      karboKecil: fields.carbSmall.value.trim(),
      karboBesar: fields.carbLarge.value.trim(),
      seratKecil: fields.fiberSmall.value.trim(),
      seratBesar: fields.fiberLarge.value.trim()
    }
  };
}


function saveMenu() {
  const updated = collectForm();

  if (selectedPhotoData) {
    updated.gambar = selectedPhotoData;
  }

  menuData[selectedDay] = updated;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(menuData)
  );

  setStatus("Menu berhasil disimpan", true);

  selectedDateBadge.textContent = updated.tanggal;

  setTimeout(() => {
    setStatus("Data tersimpan di browser");
  }, 2200);
}


function exportData() {
  const data = JSON.stringify(menuData, null, 2);

  const blob = new Blob(
    [data],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "backup-menu-mbg.json";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}


function importData(file) {
  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);

      if (!imported || typeof imported !== "object") {
        throw new Error("Format data tidak valid");
      }

      menuData = {
        ...cloneData(defaultMenuData),
        ...imported
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(menuData)
      );

      loadForm(selectedDay);
      setStatus("Data berhasil diimpor", true);
    } catch (error) {
      alert("File JSON tidak valid.");
      console.error(error);
    }
  };

  reader.readAsText(file);
}


/* PILIH HARI */
document.querySelectorAll(".admin-day-button").forEach((button) => {
  button.addEventListener("click", () => {
    loadForm(button.dataset.day);
  });
});


/* SIMPAN */
menuForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveMenu();
});


/* BATAL */
document.getElementById("resetButton").addEventListener("click", () => {
  loadForm(selectedDay);
});


/* FOTO */
fields.gambar.addEventListener("input", () => {
  if (fields.gambar.value.trim()) {
    photoPreview.src = fields.gambar.value.trim();
  }

  setStatus("Ada perubahan yang belum disimpan");
});


photoFile.addEventListener("change", () => {
  const file = photoFile.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert("Silakan pilih file gambar.");
    photoFile.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    selectedPhotoData = reader.result;
    photoPreview.src = reader.result;
    fields.gambar.value = "[Foto dari perangkat]";
    setStatus("Ada foto baru yang belum disimpan");
  };

  reader.readAsDataURL(file);
});


/* PERUBAHAN FORM */
menuForm.querySelectorAll("input").forEach((input) => {
  if (input.id === "gambar") {
    return;
  }

  input.addEventListener("input", () => {
    setStatus("Ada perubahan yang belum disimpan");
  });
});


/* EKSPOR */
document.getElementById("exportButton").addEventListener("click", exportData);


/* IMPOR */
document.getElementById("importFile").addEventListener("change", (event) => {
  importData(event.target.files[0]);
  event.target.value = "";
});


/* HAPUS DATA */
document.getElementById("clearButton").addEventListener("click", () => {
  const yakin = confirm(
    "Hapus semua perubahan menu yang tersimpan di browser ini?"
  );

  if (!yakin) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  menuData = cloneData(defaultMenuData);

  loadForm(selectedDay);

  setStatus("Data lokal dihapus");
});


/* DEFAULT */
loadForm("kamis");

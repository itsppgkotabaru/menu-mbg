const STORAGE_KEY = "mbgMenuData";
const DEFAULT_DAY = "kamis";

const defaultMenuData = {
  senin:{hari:"Senin",tanggal:"24 Agustus 2026",gambar:"./assets/menu-senin.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Senin",plantProtein:"Menu Lauk Nabati Senin",vegetable:"Sayuran Senin",fruit:"Buah Senin",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
  selasa:{hari:"Selasa",tanggal:"25 Agustus 2026",gambar:"./assets/menu-selasa.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Selasa",plantProtein:"Menu Lauk Nabati Selasa",vegetable:"Sayuran Selasa",fruit:"Buah Selasa",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
  rabu:{hari:"Rabu",tanggal:"26 Agustus 2026",gambar:"./assets/menu-rabu.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Rabu",plantProtein:"Menu Lauk Nabati Rabu",vegetable:"Sayuran Rabu",fruit:"Buah Rabu",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
  kamis:{hari:"Kamis",tanggal:"27 Agustus 2026",gambar:"./assets/menu-mbg.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani",plantProtein:"Menu Lauk Nabati",vegetable:"Sayuran",fruit:"Buah",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
  jumat:{hari:"Jumat",tanggal:"28 Agustus 2026",gambar:"./assets/menu-jumat.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Jumat",plantProtein:"Menu Lauk Nabati Jumat",vegetable:"Sayuran Jumat",fruit:"Buah Jumat",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}}
};

function clone(obj){return JSON.parse(JSON.stringify(obj));}

function getMenuData(){
  try{
    const saved=localStorage.getItem(STORAGE_KEY);
    if(!saved)return clone(defaultMenuData);
    return {...clone(defaultMenuData),...JSON.parse(saved)};
  }catch(e){
    console.error(e);
    return clone(defaultMenuData);
  }
}

function setText(id,value,fallback="—"){
  const el=document.getElementById(id);
  if(el)el.textContent=value || fallback;
}

function showMenu(day){
  const data=getMenuData();
  const menu=data[day];
  if(!menu)return;

  setText("dayName",menu.hari);
  setText("dayDate",menu.tanggal);
  setText("menuTitle",menu.judul,"Paket Makan Bergizi Gratis");
  setText("menuDescription",menu.deskripsi,"Nasi • Lauk protein • Sayuran • Buah");

  setText("carbohydrate",menu.carbohydrate);
  setText("animalProtein",menu.animalProtein);
  setText("plantProtein",menu.plantProtein);
  setText("vegetable",menu.vegetable);
  setText("fruit",menu.fruit);

  const g=menu.gizi||{};
  setText("energySmall",g.energiKecil,"— kkal");
  setText("energyLarge",g.energiBesar,"— kkal");
  setText("proteinSmall",g.proteinKecil,"— g");
  setText("proteinLarge",g.proteinBesar,"— g");
  setText("fatSmall",g.lemakKecil,"— g");
  setText("fatLarge",g.lemakBesar,"— g");
  setText("carbSmall",g.karboKecil,"— g");
  setText("carbLarge",g.karboBesar,"— g");
  setText("fiberSmall",g.seratKecil,"— g");
  setText("fiberLarge",g.seratBesar,"— g");

  const img=document.getElementById("menuImage");
  if(img){
    img.onerror=function(){
      this.onerror=null;
      this.src="./assets/menu-mbg.jpg";
    };
    img.src=menu.gambar || "./assets/menu-mbg.jpg";
  }

  document.querySelectorAll(".day-button").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.day===day);
  });
}

document.querySelectorAll(".day-button").forEach(button=>{
  button.addEventListener("click",()=>{
    showMenu(button.dataset.day);
    document.querySelector(".content").scrollIntoView({behavior:"smooth",block:"start"});
  });
});

window.addEventListener("storage",event=>{
  if(event.key===STORAGE_KEY)showMenu(document.querySelector(".day-button.active")?.dataset.day||DEFAULT_DAY);
});

showMenu(DEFAULT_DAY);

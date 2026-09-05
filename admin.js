const STORAGE_KEY="mbgMenuData";
const defaultMenuData={
senin:{hari:"Senin",tanggal:"24 Agustus 2026",gambar:"./assets/menu-senin.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Senin",plantProtein:"Menu Lauk Nabati Senin",vegetable:"Sayuran Senin",fruit:"Buah Senin",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
selasa:{hari:"Selasa",tanggal:"25 Agustus 2026",gambar:"./assets/menu-selasa.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Selasa",plantProtein:"Menu Lauk Nabati Selasa",vegetable:"Sayuran Selasa",fruit:"Buah Selasa",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
rabu:{hari:"Rabu",tanggal:"26 Agustus 2026",gambar:"./assets/menu-rabu.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Rabu",plantProtein:"Menu Lauk Nabati Rabu",vegetable:"Sayuran Rabu",fruit:"Buah Rabu",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
kamis:{hari:"Kamis",tanggal:"27 Agustus 2026",gambar:"./assets/menu-mbg.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani",plantProtein:"Menu Lauk Nabati",vegetable:"Sayuran",fruit:"Buah",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}},
jumat:{hari:"Jumat",tanggal:"28 Agustus 2026",gambar:"./assets/menu-jumat.jpg",judul:"Paket Makan Bergizi Gratis",deskripsi:"Nasi • Lauk protein • Sayuran • Buah",carbohydrate:"Nasi",animalProtein:"Menu Protein Hewani Jumat",plantProtein:"Menu Lauk Nabati Jumat",vegetable:"Sayuran Jumat",fruit:"Buah Jumat",gizi:{energiKecil:"— kkal",energiBesar:"— kkal",proteinKecil:"— g",proteinBesar:"— g",lemakKecil:"— g",lemakBesar:"— g",karboKecil:"— g",karboBesar:"— g",seratKecil:"— g",seratBesar:"— g"}}
};
let menuData=loadData(),selectedDay="kamis",selectedPhotoData=null;
const $=id=>document.getElementById(id);
const fields=["hari","tanggal","gambar","menuTitle","menuDescription","carbohydrate","animalProtein","plantProtein","vegetable","fruit","energySmall","energyLarge","proteinSmall","proteinLarge","fatSmall","fatLarge","carbSmall","carbLarge","fiberSmall","fiberLarge"].reduce((o,id)=>(o[id]=$(id),o),{});

function clone(o){return JSON.parse(JSON.stringify(o))}
function loadData(){try{const s=localStorage.getItem(STORAGE_KEY);return s?{...clone(defaultMenuData),...JSON.parse(s)}:clone(defaultMenuData)}catch(e){return clone(defaultMenuData)}}
function status(t,s=false){$("saveStatus").textContent=t;$("saveStatus").classList.toggle("saved",s)}
function loadForm(day){
 selectedDay=day;const m=menuData[day];if(!m)return;
 fields.hari.value=m.hari||"";fields.tanggal.value=m.tanggal||"";fields.gambar.value=m.gambar||"";
 fields.menuTitle.value=m.judul||"";fields.menuDescription.value=m.deskripsi||"";
 fields.carbohydrate.value=m.carbohydrate||"";fields.animalProtein.value=m.animalProtein||"";
 fields.plantProtein.value=m.plantProtein||"";fields.vegetable.value=m.vegetable||"";fields.fruit.value=m.fruit||"";
 const g=m.gizi||{};fields.energySmall.value=g.energiKecil||"";fields.energyLarge.value=g.energiBesar||"";
 fields.proteinSmall.value=g.proteinKecil||"";fields.proteinLarge.value=g.proteinBesar||"";
 fields.fatSmall.value=g.lemakKecil||"";fields.fatLarge.value=g.lemakBesar||"";
 fields.carbSmall.value=g.karboKecil||"";fields.carbLarge.value=g.karboBesar||"";
 fields.fiberSmall.value=g.seratKecil||"";fields.fiberLarge.value=g.seratBesar||"";
 $("selectedDayTitle").textContent="Menu "+m.hari;$("selectedDateBadge").textContent=m.tanggal||"";
 selectedPhotoData=null;$("photoPreview").src=m.gambar||"./assets/menu-mbg.jpg";
 document.querySelectorAll(".admin-day-button").forEach(b=>b.classList.toggle("active",b.dataset.day===day));
 status("Belum ada perubahan");
}
function collect(){
 const old=menuData[selectedDay]||{};
 return {...old,hari:fields.hari.value.trim(),tanggal:fields.tanggal.value.trim(),gambar:fields.gambar.value.trim(),judul:fields.menuTitle.value.trim(),deskripsi:fields.menuDescription.value.trim(),carbohydrate:fields.carbohydrate.value.trim(),animalProtein:fields.animalProtein.value.trim(),plantProtein:fields.plantProtein.value.trim(),vegetable:fields.vegetable.value.trim(),fruit:fields.fruit.value.trim(),gizi:{...(old.gizi||{}),energiKecil:fields.energySmall.value.trim(),energiBesar:fields.energyLarge.value.trim(),proteinKecil:fields.proteinSmall.value.trim(),proteinBesar:fields.proteinLarge.value.trim(),lemakKecil:fields.fatSmall.value.trim(),lemakBesar:fields.fatLarge.value.trim(),karboKecil:fields.carbSmall.value.trim(),karboBesar:fields.carbLarge.value.trim(),seratKecil:fields.fiberSmall.value.trim(),seratBesar:fields.fiberLarge.value.trim()}};
}
$("menuForm").addEventListener("submit",e=>{e.preventDefault();const d=collect();if(selectedPhotoData)d.gambar=selectedPhotoData;menuData[selectedDay]=d;localStorage.setItem(STORAGE_KEY,JSON.stringify(menuData));$("selectedDateBadge").textContent=d.tanggal;status("Menu berhasil disimpan",true);});
document.querySelectorAll(".admin-day-button").forEach(b=>b.addEventListener("click",()=>loadForm(b.dataset.day)));
$("resetButton").addEventListener("click",()=>loadForm(selectedDay));
fields.gambar.addEventListener("input",()=>{if(fields.gambar.value.trim())$("photoPreview").src=fields.gambar.value.trim();status("Ada perubahan yang belum disimpan")});
$("photoFile").addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;if(!f.type.startsWith("image/")){alert("Silakan pilih file gambar.");e.target.value="";return}const r=new FileReader();r.onload=()=>{selectedPhotoData=r.result;$("photoPreview").src=r.result;fields.gambar.value="[Foto dari perangkat]";status("Ada foto baru yang belum disimpan")};r.readAsDataURL(f)});
$("menuForm").querySelectorAll("input").forEach(i=>{if(i.id!=="gambar")i.addEventListener("input",()=>status("Ada perubahan yang belum disimpan"))});
$("exportButton").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(menuData,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="backup-menu-mbg.json";a.click();URL.revokeObjectURL(a.href)});
$("importFile").addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{menuData={...clone(defaultMenuData),...JSON.parse(r.result)};localStorage.setItem(STORAGE_KEY,JSON.stringify(menuData));loadForm(selectedDay);status("Data berhasil diimpor",true)}catch(err){alert("File JSON tidak valid.")}};r.readAsText(f);e.target.value=""});
$("clearButton").addEventListener("click",()=>{if(!confirm("Hapus semua perubahan menu dari browser ini?"))return;localStorage.removeItem(STORAGE_KEY);menuData=clone(defaultMenuData);loadForm(selectedDay);status("Data lokal dihapus")});
loadForm("kamis");

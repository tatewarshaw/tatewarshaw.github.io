const $=s=>document.querySelector(s);
function go(){
  document.body.classList.add("going");
  const goBtn=$("#go"); goBtn.textContent="GO! ▶";
  setTimeout(()=>document.body.classList.remove("going"),800);
  $("#console").scrollIntoView({behavior:"smooth"});
}
$("#go").onclick=go;
document.querySelectorAll(".tile:not(.secret)").forEach(tile=>{
  tile.onclick=()=>{
    $("#modalTitle").textContent=tile.dataset.title;
    $("#modalCopy").textContent=tile.dataset.copy;
    $("#modal").classList.add("show");
  };
});
$(".close").onclick=()=>$("#modal").classList.remove("show");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("show")};
$(".mini-go").onclick=()=>{ $("#modal").classList.remove("show"); go(); };
$("#secret").onclick=()=>{
  $("#modalTitle").textContent="YOU FOUND THE BACKSTAGE";
  $("#modalCopy").textContent="Congratulations. You have officially touched something you were not supposed to touch.";
  $("#modal").classList.add("show");
};
setInterval(()=>{
  const d=new Date(), z=n=>String(n).padStart(2,"0");
  $("#clock").textContent=`${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`;
},1000);
document.querySelectorAll(".meters i").forEach((x,i)=>x.style.setProperty("--h",`${12+(i%6)*8}px`));

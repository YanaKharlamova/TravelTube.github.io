let toggleBtn=document.querySelector(".menu-toggle");
let sideBar=document.querySelector(".sidebar");

toggleBtn.addEventListener("click",()=>{
    sideBar.classList.toggle("open");
});
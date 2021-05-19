let tabcontents=document.querySelectorAll(".tabcontent");
let tabs=document.querySelectorAll(".blog-entries__box-tab");

function changeActiveTab(clickedTab){
    tabs.forEach((tab)=>tab.classList.remove("active"));
    clickedTab.classList.add("active");
}

function changeTabContent(month){
    tabcontents.forEach((tabcontent)=>
    tabcontent.setAttribute("style","display:none")
    );
    document.getElementById(month).setAttribute("style","display:block");
}

function openBlogs(e,month){
    e.stopImmediatePropagation();
    let clickedTab=e.currentTarget;
    changeActiveTab(clickedTab);
    changeTabContent(month);
}
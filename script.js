var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tabs-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontents of tabcontent){
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
// -----------sidemenu nav------------
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
 // --------------see More work-----------
 var list2 = document.getElementById("list2");
 var btn = document.getElementById("seemorebtn")
 function seemore(){
     if (list2.style.display === "grid") {
         list2.style.display = "none";
         btn.innerHTML = "See More";
     }else{
        list2.style.display = "grid";
         btn.innerHTML = "see Less";
    }
 }
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".header-text p",{
    ...scrollRevealOption,
    origin:"left",
});
ScrollReveal().reveal(".header-text h1",{
    ...scrollRevealOption,
    delay:1500,
});


let links = document.querySelector(".nav__links--inactive")
let linksAfter = window.getComputedStyle(links,"::after");
let burgerImg = document.querySelector(".burger__img")

burgerImg.addEventListener("click", ()=>{
    if(links.className == "nav__links--inactive"){
        links.className = "nav__links--active"
        linksAfter.className = "nav__links--active::after";
        burgerImg.style.opacity = ".4"
    }
    else{
        links.className = "nav__links--inactive"
        linksAfter.className = "nav__links--inactive::after";
        burgerImg.style.opacity = "1"
    }
})


console.log(links,linksAfter)
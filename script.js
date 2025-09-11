// Scroll onto view
const getStarted = document.getElementById("getStarted");
const freeCard = document.getElementById("free");
const pricing = document.getElementById("pricing");
getStarted.addEventListener("click", ()=>{
freeCard.style.backgroundColor = "#000";
freeCard.style.color = "#fff";
pricing.scrollIntoView();
})

// Contact Form

const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("submit");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let valid = true;
    if(!email.value.includes("@") || !email.value.includes(".")){
        valid = false;
        alert("please write a valid email")
    }
     if(valid){
        form.reset();
    }
});

// Home Redirect

const logo = document.querySelector(".logo");
logo.addEventListener("click", (e)=>{
    e.preventDefault();
    location.reload();
})

// header postion scroll

const header = document.getElementById("header");
window.addEventListener("scroll", ()=>{
let currentScroll = window.scrollY;
if(currentScroll > 20){
header.style.position = "fixed";
header.style.background = "rgba(250, 250, 250, 0.9)";
header.style.boxShadow = "3px 4px 5px rgba(202, 199, 199, 0.524)";
header.style.top = "5px";
}
else{
    header.style.position = "relative";
    header.style.background = "rgb(235, 239, 243)";
    header.style.boxShadow = "none";
    header.style.top = "0";
}
})
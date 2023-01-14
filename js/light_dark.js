// add event listener to toggle light/dark mode
const toggleDark = document.querySelector("#toggleDark");
if(toggleDark){
  toggleDark.addEventListener("click", modeSwitch);
}
const toggleLight = document.querySelector("#toggleLigth");
if (toggleLight) {
  toggleLight.addEventListener("click", modeSwitch);
}
const toggleLigthM = document.querySelector("#toggleLigthM");
if(toggleLigthM){
    toggleLigthM.addEventListener("click", modeSwitch);
}
const toggleDarkM = document.querySelector("#toggleDarkM");
if (toggleDarkM) {
    toggleDarkM.addEventListener("click", modeSwitch);
}

// Initally on page load
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    if(currentTheme == "light"){
        modeSwitch();
    }
}

// Toggle light/dark mode
function modeSwitch() {
    document.body.classList.toggle("dark_body");

    if(toggleLight){
        toggleLight.classList.toggle("hide");
    }
    if(toggleDark){
        toggleDark.classList.toggle("hide");
    }
    if(toggleLigthM){
        toggleLigthM.classList.toggle("hide");
    }
    if(toggleDarkM){
        toggleDarkM.classList.toggle("hide");
    }

    localStorage.setItem('theme', document.body.classList.contains("dark_body") ? "dark" : "light");
}


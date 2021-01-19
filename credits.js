const creditsLink = document.querySelector(".credits");
const credits = document.querySelector(".shadow");
const exitButton = document.querySelector(".exit-button");

creditsLink.addEventListener("click", function(){
    credits.style.display="flex";
})

exitButton.addEventListener("click", function(){
    credits.style.display="none";
})
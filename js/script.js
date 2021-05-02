console.log("Witam wszystkich którzy tutaj zawitali!");

let changeSizeButton = document.querySelector(".section__changeSizeButton");
let myPicture = document.querySelector(".section__myPhoto");
let schoolPicture = document.querySelector(".section__schoolPicture");
let hideSchoolPicture = document.querySelector(".section__hideSchoolPictureButton");
let hidePicture = document.querySelector(".hidePicture");
let changeTheme = document.querySelector(".section__changeThemeButton");
let darkTheme = document.querySelector(".darkTheme");
let body = document.querySelector("body");

changeSizeButton.addEventListener("click", () => {
    if (changeSizeButton.innerText === "Powiększ rozmiar zdjęcia") {
        (changeSizeButton.innerText = "Zmniejsz rozmiar zdjęcia");
    }
    else changeSizeButton.innerText = "Powiększ rozmiar zdjęcia";
    myPicture.classList.toggle("mySmallPhoto");
})

hideSchoolPicture.addEventListener("click", () => {
    if (hideSchoolPicture.innerText === "Ukryj zdjęcie") {
        hideSchoolPicture.innerText = "Pokaż zdjęcie";
    } else hideSchoolPicture.innerText = "Ukryj zdjęcie";
    schoolPicture.classList.toggle("hidePicture");
});

changeTheme.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
})
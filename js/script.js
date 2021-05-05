{
    const welcome = () => {
        console.log("Hej, bardzo mi miło że tu wpadłeś!");
    }

    const toggleBackground = () => {
        const body = document.querySelector("body");
        body.classList.toggle("darkTheme");
    };

    const init = () => {
        let changeSizeButton = document.querySelector(".section__changeSizeButton");
        let myPicture = document.querySelector(".section__myPhoto");
        let schoolPicture = document.querySelector(".section__schoolPicture");
        let hideSchoolPicture = document.querySelector(".section__hideSchoolPictureButton");
        let hidePicture = document.querySelector(".hidePicture");
        const changeTheme = document.querySelector(".section__changeThemeButton");

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

        changeTheme.addEventListener("click", toggleBackground);

        welcome();
    };
   
    init ();
}
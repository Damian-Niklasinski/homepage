{
    const welcome = () => {
        console.log("Hej, bardzo mi miło że tu wpadłeś!");
    };

    const toggleBackground = () => {
        const body = document.querySelector("body");
        body.classList.toggle("darkTheme");
    };

    const changeSize = () => {
        const myPicture = document.querySelector(".section__myPhoto");
        const changeSizeButton = document.querySelector(".section__changeSizeButton");
        if (changeSizeButton.innerText === "Powiększ rozmiar zdjęcia") {
            (changeSizeButton.innerText = "Zmniejsz rozmiar zdjęcia");
        }
        else changeSizeButton.innerText = "Powiększ rozmiar zdjęcia";
        myPicture.classList.toggle("mySmallPhoto");
    };

    const hideSchoolPicture = () => {
        const hideSchoolPicture = document.querySelector(".section__hideSchoolPictureButton");
        const schoolPicture = document.querySelector(".section__schoolPicture");
        if (hideSchoolPicture.innerText === "Ukryj zdjęcie") {
            hideSchoolPicture.innerText = "Pokaż zdjęcie";
        } else hideSchoolPicture.innerText = "Ukryj zdjęcie";
        schoolPicture.classList.toggle("hidePicture");
    };

    const init = () => {
        const changeTheme = document.querySelector(".section__changeThemeButton");
        const changeSizeButton = document.querySelector(".section__changeSizeButton");
        const hideSchoolPictureButton = document.querySelector(".section__hideSchoolPictureButton");

        changeTheme.addEventListener("click", toggleBackground);
        changeSizeButton.addEventListener("click", changeSize);
        hideSchoolPictureButton.addEventListener("click", hideSchoolPicture);

        welcome();
    };
   
    init ();
}
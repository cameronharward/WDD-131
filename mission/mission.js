const themeSelector = document.getElementById("theme");

function changeTheme(){
    var value = themeSelector.value;
    var body = document.getElementById("body");
    var image = document.querySelector(".logo");
    if (value == "dark"){
        body.className = "dark";
        image.src = "logodark.png"

    }
    else{
        body.className = "light";
        image.src = "logo.webp"
    }

}

themeSelector.addEventListener("change", changeTheme);

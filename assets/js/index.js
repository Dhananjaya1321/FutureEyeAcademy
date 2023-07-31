let javaElements, webElements, mobileElements, gameElements;

/*---------------------------------------------------course section-------------------------------------------------*/
document.getElementById("course-nav-all").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "all");
});
document.getElementById("course-nav-web").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "web");
});
document.getElementById("course-nav-mobile").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "mobile");
});
document.getElementById("course-nav-computer").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "computer");
});
document.getElementById("course-nav-game").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "game");
});

function setDisplay(java, web, mobile, game, selectedCourse) {
    switch (selectedCourse) {
        case "all":
            for (let i = 0; i < java.length; i++) {
                javaElements[i].style.display = "flex";
            }
            for (let i = 0; i < web.length; i++) {
                webElements[i].style.display = "flex";
            }
            for (let i = 0; i < mobile.length; i++) {
                mobileElements[i].style.display = "flex";
            }
            for (let i = 0; i < game.length; i++) {
                gameElements[i].style.display = "flex";
            }

            break;
        case "computer":
            for (let i = 0; i < java.length; i++) {
                javaElements[i].style.display = "flex";
            }
            for (let i = 0; i < web.length; i++) {
                webElements[i].style.display = "none";
            }
            for (let i = 0; i < mobile.length; i++) {
                mobileElements[i].style.display = "none";
            }
            for (let i = 0; i < game.length; i++) {
                gameElements[i].style.display = "none";
            }
            break;
        case "web":
            for (let i = 0; i < java.length; i++) {
                javaElements[i].style.display = "none";
            }
            for (let i = 0; i < web.length; i++) {
                webElements[i].style.display = "flex";
            }
            for (let i = 0; i < mobile.length; i++) {
                mobileElements[i].style.display = "none";
            }
            for (let i = 0; i < game.length; i++) {
                gameElements[i].style.display = "flex";
            }
            break;
        case "mobile":
            for (let i = 0; i < java.length; i++) {
                javaElements[i].style.display = "none";
            }
            for (let i = 0; i < web.length; i++) {
                webElements[i].style.display = "none";
            }
            for (let i = 0; i < mobile.length; i++) {
                mobileElements[i].style.display = "flex";
            }
            for (let i = 0; i < game.length; i++) {
                gameElements[i].style.display = "none";
            }
            break;
        case "game":
            for (let i = 0; i < java.length; i++) {
                javaElements[i].style.display = "none";
            }
            for (let i = 0; i < web.length; i++) {
                webElements[i].style.display = "none";
            }
            for (let i = 0; i < mobile.length; i++) {
                mobileElements[i].style.display = "none";
            }
            for (let i = 0; i < game.length; i++) {
                gameElements[i].style.display = "flex";
            }
            break;
    }
}

/*---------------------------------------------------student-works section-------------------------------------------------*/
/*
document.getElementById("studens-works-nav-all").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "all");
});
document.getElementById("studens-works-nav-web").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "web");
});
document.getElementById("studens-works-nav-mobile").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "mobile");
});
document.getElementById("studens-works-nav-computer").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "computer");
});
document.getElementById("studens-works-nav-game").addEventListener("click", function () {
    javaElements = document.getElementsByClassName("java");
    webElements = document.getElementsByClassName("web");
    mobileElements = document.getElementsByClassName("mobile");
    gameElements = document.getElementsByClassName("game");
    setDisplay(javaElements, webElements, mobileElements, gameElements, "game");
});
*/

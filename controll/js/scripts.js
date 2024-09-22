function toggleMenu() {
    var menu = document.getElementById("side-menu");
    var overlay = document.getElementById("overlay");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        overlay.classList.remove("show");
    } else {
        menu.classList.add("open");
        overlay.classList.add("show");
    }
}

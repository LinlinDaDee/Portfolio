let nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        nav.style.boxShadow = "";
        nav.style.backgroundColor = "";

    } else {
        nav.style.boxShadow = "0 10px 6px -6px #777";
        nav.style.backgroundColor = "#ebf4fc";
    }
});

window.addEventListener("scroll", changeDot, false);
let r = document.querySelector(":root");

let ideaparallels_rect = document.querySelector(".ideaparallels_href_rect");
let offset = 0,
    timeout_milisec = 1000;

for (let i = 0; i < 100; i++) {
    setTimeout(function() {
        ideaparallels_rect.style.backgroundColor = ideaparallels_colors[Math.floor(Math.random() * ideaparallels_colors.length)];
        r.style.setProperty("--active-color", ideaparallels_rect.style.backgroundColor);
    }, timeout_milisec + offset);
    offset += timeout_milisec;
}
changeDot()

function changeDot() {
    const heightS2 = document.querySelector(".S2").offsetTop,
        heightS3 = document.querySelector(".S3").offsetTop;

    let scrollValue = window.scrollY;

    if (scrollValue < heightS2) {
        document.querySelectorAll("nav li:not(.M1)").forEach(function(e) {
            e.classList.remove("active");
        });
        r.style.setProperty("--active-color", ideaparallels_rect.style.backgroundColor);
        console.log(document.querySelector(".M1"))
        document.querySelector(".M1").classList.add("active");
    } else if (scrollValue < heightS3) {
        document.querySelectorAll("nav li:not(.M2)").forEach(function(e) {
            e.classList.remove("active");
        });
        r.style.setProperty("--active-color", "#fc3c17");
        document.querySelector(".M2").classList.add("active");
    } else {
        document.querySelectorAll("nav li:not(.M3)").forEach(function(e) {
            e.classList.remove("active");
        });
        r.style.setProperty("--active-color", "gray");
        document.querySelector(".M3").classList.add("active");
    }
}

window.onload = () => {
    changeDot();
};
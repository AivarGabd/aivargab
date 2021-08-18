window.addEventListener("scroll", changeDot, false);
let r = document.querySelector(":root");
let ideaparallels_rect = document.querySelector(".ideaparallels_href_rect");
let indicator = document.querySelector(".indicator");


let offset = 0,
    timeout_milisec = 2000;
//Varbale with listener
x = {
    aInternal: 10,
    aListener: function(val) {},
    set a(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get a() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
}
x.registerListener(function(val) {
    //alert("Someone changed the value of x.a to " + val);
    ideaparallels_rect.style.backgroundColor = val
    if ((window.scrollY < document.querySelector(".S2").offsetTop)) r.style.setProperty("--active-color", val);
});

ideaparallels_rect.style.backgroundColor = ideaparallels_colors[Math.floor(Math.random() * ideaparallels_colors.length)];
for (let i = 0; i < 100; i++) {
    setTimeout(function() {
        x.a = ideaparallels_colors[Math.floor(Math.random() * ideaparallels_colors.length)];
    }, timeout_milisec + offset);
    offset += timeout_milisec;
}


function changeDot() {
    const heightS2 = document.querySelector(".S2").offsetTop,
        heightS3 = document.querySelector(".S3").offsetTop;

    let scrollValue = window.scrollY;
    if (scrollValue < heightS2) {
        document.querySelectorAll("nav li:not(.M1)").forEach(function(e) {
            e.classList.remove("active");
        });

        indicator.style.top = document.querySelector(".M1").offsetTop + "px"
        r.style.setProperty("--active-color", ideaparallels_rect.style.backgroundColor);
        indicator.style.width = document.querySelector(".M1").offsetWidth + "px"
        indicator.style.height = document.querySelector(".M1").offsetHeight + "px"


    } else if (scrollValue < heightS3) {
        document.querySelectorAll("nav li:not(.M2)").forEach(function(e) {
            e.classList.remove("active");
        });

        r.style.setProperty("--active-color", "#fc3c17");
        indicator.style.top = document.querySelector(".M2").offsetTop + "px"
            //document.querySelector(".M2").classList.add("active");
        indicator.style.width = document.querySelector(".M2").offsetWidth + "px"
        indicator.style.height = document.querySelector(".M2").offsetHeight + "px"

    } else {
        document.querySelectorAll("nav li:not(.M3)").forEach(function(e) {
            e.classList.remove("active");
        });

        r.style.setProperty("--active-color", "gray");
        indicator.style.top = document.querySelector(".M3").offsetTop + "px"
            //document.querySelector(".M3").classList.add("active");
        indicator.style.width = document.querySelector(".M3").offsetWidth + "px"
        indicator.style.height = document.querySelector(".M3").offsetHeight + "px"

    }
}

window.onload = () => {
    changeDot();
};




function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
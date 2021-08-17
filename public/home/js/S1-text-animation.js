select = (e) => document.querySelector(e);
selectAll = (e) => document.querySelectorAll(e);

let master = gsap.timeline({ delay: 0 });

function animateJam() {
    let tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "power4",
        },
        repeat: -1,
    });
    return tl;
}

function animateText() {
    let tl = gsap.from("span", {
        x: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4",
    });
    tl = gsap.from(".block_name", {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 2,
        ease: "power4",
    });

    return tl;
}

function init() {
    master.add(animateJam()).add(animateText(), 1);
}
gsap.set("main article *", { autoAlpha: 0, y: "1rem" });

function tab_button_click(element){
  document.getElementById(element.id.replace('-tab-button','')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

}

const animateVisible = (block, ratio, isIntersecting) => {
  if (ratio > 0 && isIntersecting) {

    let tabButtonsArray = document.getElementsByClassName('tab-button')
    for (let i = 0; i < tabButtonsArray.length; i++) {
      tabButtonsArray[i].classList.remove('active_tab_button')
    }
    document.getElementById(block.id+"-tab-button").classList.add('active_tab_button')
    
    gsap.to(block.querySelectorAll("*"), {
      duration: 1,
      autoAlpha: 1,
      y: "0",
      stagger: 0.3,
      ease: "power3.inOut" });

  } else {
    gsap.set(block.querySelectorAll("*"), {
      autoAlpha: 0,
      y: "1rem" });

  }
};

const blocks = document.querySelectorAll("main article");

const blocksObserver = new IntersectionObserver(
  
  entries => {
    return entries.forEach(event => {
      const { target, intersectionRatio, isIntersecting } = event;
      animateVisible(target, intersectionRatio, isIntersecting);
    });
  },
  { threshold: 0.5 }
);


for (const block of blocks) {
  blocksObserver.observe(block);
}
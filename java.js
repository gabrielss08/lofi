
/*animação do texto*/
window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-1', {duration: 5000});
sr.reveal('.area-2',{duration: 2000});
sr.reveal('.area-3',{duration: 3000});

/*animação navbar*/
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
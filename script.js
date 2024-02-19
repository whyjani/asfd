// ======SMOOTH SCROLL START HERE======
const lenis = new Lenis();

// Add a listener for the 'scroll' event
lenis.on('scroll', () => {
    console.log('Scroll event triggered');
    ScrollTrigger.update();
});

// Use gsap's ticker to handle animation
gsap.ticker.add((time) => {
    console.log('Ticker running');
    // Adjust the time factor as needed
    lenis.raf(time * 300);
});

// Configure gsap ticker for smoother animation
gsap.ticker.lagSmoothing(0);

// ======SMOOTH SCROLL END HERE======

// MOB NAV START HERE 
document.addEventListener('DOMContentLoaded', function () {
    const navBase = document.querySelector('.mob-nav-base');
    const navLines = document.querySelectorAll('.nav-lines');
    const mobNavLinks = document.querySelectorAll('.mob-nav-container-links a');
    const mobNavContainer = document.querySelector('.mob-nav-container');

    // Initialize GSAP timeline
    const timeline = gsap.timeline({ paused: true });

    // Add animations to the timeline
    timeline.to(mobNavContainer, {
        height: "100vh",
        duration: 2.5,
        ease: "expo.inOut",
    }).from(mobNavLinks, {
        y: 150,
        duration: 2.5,
        ease: "expo.inOut",
        skewY: 3,
        stagger: 0.1,
        delay: -2
    });

    navBase.addEventListener('click', toggleNav);

    function toggleNav() {
        if (!navBase.classList.contains('open')) {
            gsap.to(navLines[0], { duration: 0.5, rotate: 45, y: 10 });
            gsap.to(navLines[1], { duration: 1, rotate: -45, y: -10, ease: "expo.inOut" });
            navBase.classList.add('open');
            timeline.play(); // Play the timeline when navBase is open
        } else {
            gsap.to(navLines[0], { duration: 0.3, rotate: 0, y: 0 });
            gsap.to(navLines[1], { duration: 1, rotate: 0, y: 0, ease: "expo.inOut" });
            navBase.classList.remove('open');
            timeline.reverse(); // Reverse the timeline when navBase is closed
        }
    }
});

// MOB NAV END HERE 

// HOME SECTION ONE START HERE 








let typeSplit = new SplitType('.home-s2-heading h1', {
  types: 'lines, words, chars',
})

gsap.from('.home-s2-heading h1 .word', {
  y: 200,
  opacity: 1,
  duration: 2,
  ease: 'power1.inOut',
  stagger: 0.2,
  
  scrollTrigger: {
    trigger: '.home-s2-heading h1',
    start: '-300%',
    end:"bottom bottom",
    scrub:2
    // markers:true
  }
})


// gsap.from(".home-s2-boxs",{
//     height:0,
//     stagger:0.1,
//     duration: 1.5,
//     ease: 'power1.inOut',
//     scrollTrigger: {
//         trigger: '.home-s2-boxs',
//         start: '-4200%',
//         // end:"bottom bottom",
//         markers:true
//       }
// })


gsap.utils.toArray('.home-s2-boxs').forEach((box, index) => {
    gsap.from(box, {
        y: -100, // Initial position for parallax effect
        height:0,
        duration: 1.5,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: box,
            start: '-4200%', // Adjust start position as needed
            end: '-1000%', // Adjust end position as needed
            scrub: true ,// Enables smooth scrolling
            // markers:true
        }
    });
});

// CURSOR 
const cursor = document.querySelector("#cursor");
const cursorHoverElements = document.querySelectorAll(".ch");

window.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5,
        ease: "expo"
    });
});

cursorHoverElements.forEach(function(cursorHover) {
    cursorHover.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            scale: 0.6,
            // left:"-1rem"
        });
    });

    cursorHover.addEventListener("mouseleave", function(dets) {
        gsap.to(cursor, {
            scale: 1
        });
    });
});






const tl = gsap.timeline();
tl.to("#canvas3d",{
    delay:14,
    display:"none",
})

// HOME SECTION ONE START HERE 
tl.to("#desk-nav", {  width: "40rem", duration:3, ease: "expo.inOut",   borderRadius:"10px"})
.from(".desk-nav-logo img, .desk-nav-links, .mob-nav-logo img, .mob-nav-base", {y:-100, duration:3, delay:-2,ease: "expo.inOut", stagger:0.1})
.to("#mob-nav", {  width: "100%", duration:3, ease: "expo.inOut",delay:-6, borderRadius:"10px"})
.from(".mob-nav-logo img, .mob-nav-base ", {y:-100, duration:3, delay:-5,ease: "expo.inOut", stagger:0.1})
.from(".home-s1-h", {y:300, scale:1, duration:3,delay:-2.5,ease: "expo.inOut", stagger:1})
.from(".home-s1-video video", {scale:0,opacity:0,duration:4,ease: "expo.inOut",delay:-2.5});



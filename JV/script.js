var crsr = document.querySelector(".cursor")

document.addEventListener("mousemove", function(dets) {
  gsap.to(".cursor",{
    left:dets.x,
    top:dets.y
  })
})



window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("reload");
  image.style.transform = "rotate(" + window.pageYOffset/5 + "deg)";
}

const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)


gsap.registerPlugin(ScrollTrigger)

let text;

function runSplit() {
  text = new SplitType(".target", { types: "lines, words" });
  $(".line").append("<div class='line-mask'></div>");
  runAnimation();
}

runSplit();

window.addEventListener("resize", function () {
  text.revert();
  runSplit();
});

function runAnimation() {
$(".line").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this).find('.line-mask');
 
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top center",
      end: "bottom center",
      scrub: 1
  }
});
  tl.to(targetElement, {
    width: "0%",
    duration: 0.1
  });
});
}
runAnimation();




const section_2 = document.getElementById("main_slider_container");
let box_items = gsap.utils.toArray(".img_background");

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    // start: "top 10px",
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_2.offsetWidth 
  }
});




const content = document.querySelector(".scroll_body");
            let currentPos = window.pageYOffset;

            const callDistort = function () {
                const newPos = window.pageYOffset;
                const diff = newPos - currentPos;
                const speed = diff * 0.2;

                content.style.transform = "skewY(" + speed + "deg)";
                currentPos = newPos;
                requestAnimationFrame(callDistort);
            };

            callDistort();

 const content2 = document.querySelector(".scroll_body2");
            let currentPos2 = window.pageYOffset;

            const callDistort2 = function () {
                const newPos2 = window.pageYOffset;
                const diff2 = newPos2 - currentPos2;
                const speed2 = diff2 * 0.2;

                content2.style.transform = "skewY(" + speed2 + "deg)";
                currentPos2 = newPos2;
                requestAnimationFrame(callDistort2);
            };

            callDistort2();

// gsap.from("h1", 1.5, {
  
//   y: -40,
//   ease: "power4.inOut",
//   stagger: {
//     amount: 0.5,
//   },
// });

gsap.registerPlugin(ScrollTrigger);

var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})

gsap.from("#banner6 video", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "#banner6 video",
      scroller: "#banner6 video",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to("#banner6 video", {
  width: "70%"
}, "anim")

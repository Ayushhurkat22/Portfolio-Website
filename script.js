var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursorBlur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblur.style.left = dets.x -90 + "px"
    crsrblur.style.top = dets.y -90 + "px"
})

// // Function to show the cursor
// function showCursor() {
//     crsr.style.display = "block";
// }

// // Function to hide the cursor
// function hideCursor() {
//     crsr.style.display = "none";
// }

// // Attach mouseenter and mouseleave events to clickable elements
// var clickableElements = document.querySelectorAll(".clickable-element");

// clickableElements.forEach(function (element) {
//     element.addEventListener("mouseenter", showCursor);
//     element.addEventListener("mouseleave", hideCursor);
// });

// // Attach mousemove event to the document to hide the cursor when not over clickable elements
// document.addEventListener("mousemove", function (event) {
//     var isOverClickableElement = Array.from(clickableElements).some(function (element) {
//         return element.contains(event.target);
//     });

//     if (!isOverClickableElement) {
//         hideCursor();
//     }
// });

gsap.to("#nav",{
    height:"100px",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(29, 43, 83,0.4)",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub:4
    }
})
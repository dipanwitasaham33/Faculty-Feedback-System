//image slider

//Access the Images
let slideImages = document.querySelectorAll(".mySlide img");
var count = 0;
function move() {
    slideImages[count].style.animation = 'move 0.5s ease-in forwards';
    if (count >= slideImages.length - 1) {
        count = 0;
    }
    else {
        count++;
    }
    slideImages[count].style.animation = 'move2 0.5s ease-in forwards';

}
function autoSlide() {
    deleteInterval = setInterval(timer, 4000);
    function timer() {
        move();
    }
}
autoSlide();


// gsap
function gsap_sec(){
    let tl = gsap.timeline();

    tl.from('.logo>img',{
        y:-500,
        opacity:0,
        duration:1,
    })
    tl.from('.logo>p',{
        y:-500,
        duration:0.5,
        opacity:0,

        // stagger:0.5
    })
    gsap.from('.navbar>ul>li',{
        y:-500,
        duration:1,
        opacity:0,

        stagger:0.5
    })


    gsap.from('.container2', {
        y: 1000,
        opacity: 0,
        duration: 5,
        stagger: 1,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            start: 'top 30%',
            end:'top 0%',
            scrub:5
        }
    })
    
}
gsap_sec();


function updateVisitorCount() {
    let today = new Date().toDateString();
    let storedDate = localStorage.getItem("visitDate");
    let count = localStorage.getItem("dailyVisitors");

    if (storedDate !== today) {
        // New day: reset count
        localStorage.setItem("visitDate", today);
        count = 1;
    } else {
        // Same day: increase count
        count = parseInt(count) + 1;
    }

    localStorage.setItem("dailyVisitors", count);

    // Update the marquee text
    document.getElementById("visitorMarquee").innerText = `Today's Visitors: ${count}`;
}

updateVisitorCount();

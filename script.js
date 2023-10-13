let crsr = document.querySelector(".cursor");
let blur = document.querySelector(".blur-cursor");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 8+"px"
    crsr.style.top = dets.y - 10+"px"
    blur.style.left = dets.x - 110+"px"
    blur.style.top = dets.y - 100+"px"
});

gsap.to(".navbar",{
    backgroundColor : "#000",
    duration:0.5,
    height:"11vh",
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:0.5
    }
});

gsap.to(".black-overlay",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".black-overlay",
        scroller:"body",
        // markers:true,
        star:"top -20%",
        end:"top -80%",
        scrub:1
    }
})

let linkAll = document.querySelectorAll(".navbar li")
linkAll.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #ff0033"
        crsr.style.backgroundColor = "#ff0033"
    })
})

var tl = gsap.timeline();

tl.from(".ps",{
    x:-500,
    duration: 0.9,
})
tl.from(
    ".click1",{
        x:50,
        y:50,
        duration: 0.8,
        opacity: 0
    }
)
tl.to(
    ".ps",{
        scale:1.1,
        duration: 0.2,
        yoyo: true,
    }
)
tl.from(
    ".thirdli li",{
        x:-200,
        duration: 0.4,
        stagger: 0.2
    }
)
tl.to(".thirdli>li:first-child",{
        scale: 0.95,
        duration: 0.2,
        ease: "power2.out"
    }
)
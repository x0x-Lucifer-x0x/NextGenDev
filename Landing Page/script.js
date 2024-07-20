gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".pizza1", 
      { y: 0, x: 0 }, 
      {
        y: 720, 
        x: -440, 
        scrollTrigger: {
          trigger: ".section2",
          start: "10% 75%",
          end: "0% 30%",
          scrub: true,
          markers: false,
        }
      }
    );



    
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: 900,
        scrub: true,
      },
    }
  );

  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");
  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsL.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: el,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}

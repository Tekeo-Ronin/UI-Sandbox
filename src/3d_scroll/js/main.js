let zSpacing = -1000, //відстань між кадрами по осі z
  lastPos = zSpacing / 5, //остання позиція прокрутки сторінки
  $frames = document.getElementsByClassName("frame"), //знаходимо всі фрейми
  frames = Array.from($frames), //масив з всіх знайдених фреймів
  zVals = []; //значення осі z для кожного фрейма

window.onscroll = function () {
  let top = document.documentElement.scrollTop, //знаходимо поточне значення прокрутки
    delta = lastPos - top; //різниця між попередньою і поточною позицією прокрутки

  lastPos = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing); //нове значення позиції для поточного фрейму
    zVals[i] += delta * -5.5; //додаємо зміщення для контролю руху фрейму *регулюємо швидкість анімації*

    let frame = frames[i], //поточний фрейм
      transform = `translateZ(${zVals[i]}px)`, //створюємо трансформ
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0; // *регулюємо швидкість зникання*
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`); //встановлюємо атрибут стилю з трансформом
  });
};

window.scrollTo(0, 1);

//Audio
let soundBtn = document.querySelector(".sound-btn"),
  audio = document.querySelector(".audio");

soundBtn.addEventListener("click", function (e) {
  soundBtn.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundBtn.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};

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
    zVals[i] += delta * -5; //додаємо зміщення для контролю руху фрейму

    let frame = frames[i], //поточний фрейм
      transform = `translateZ(${zVals[i]}px)`; //створюємо трансформ
    frame.setAttribute("style", `transform: ${transform}`); //встановлюємо атрибут стилю з трансформом
  });
};

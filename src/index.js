// Что означает 4-й пункт «Карта может быть отзывами.»?
// Под картой есть интерактивная шкала времени в виде «колонок»:
// Каждое деление соответствует дате (от)
// Статистика слева — это количество преступлений (affected_number) на текущую дату с разбивкой по категориям (affected_type).
// Высота столбца зависит от количества преступлений (affected_number) за период и должна рассчитываться в соответствии с данными.
// Карта может быть ответами.
// Мы показываем 100 делений на временной шкале. Берем последние 100.

//Sample dates
// const textEl = document.getElementById('.frame-text');

// const inputEl = document.getElementById('.frame-scale');

// inputEl.addEventListener('input', e => {
//   const place = inputEl.value;
// console.log(size);

// textEl.style.fontSize = place + 'px';
//   textEl.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
// });
// =============================
// animation
// const animationBox = document.querySelector('.box_for_animation');
// const animationButton = document.querySelector('.button_for_animation');

// let animationStart;
// let requestId;

// function animate(timestamp) {
//   if (!animationStart) {
//     animationStart = timestamp;
//   }

//   const progress = timestamp - animationStart;

//   animationBox.style.transform = `translateX(${progress / 5}px)`;

//   const x = animationBox.getBoundingClientRect().x + 100;

//   // 6px - scrollbar width
//   if (x <= window.innerWidth - 6) {
//     window.requestAnimationFrame(animate);
//   } else {
//     window.cancelAnimationFrame(requestId);
//   }
// }

// function startAnimation() {
//   requestId = window.requestAnimationFrame(animate);
//   animationButton.style.opacity = 0;
// }

// animationButton.addEventListener('click', startAnimation, { once: true });

// scroll
// const scrollMessage = document.querySelector('.message_for_scroll');
// const scrollBox = document.querySelector('.box_for_scroll');

// function showMessage() {
//   if (!scrollMessage.textContent) {
//     scrollMessage.textContent = 'scrollBox is in viewport';
//     scrollMessage.style.opacity = 1;
//   }
// }

// function onScroll() {
//   const { top, bottom } = scrollBox.getBoundingClientRect();

//   if (top < window.scrollY && bottom > 0) {
//     window.requestAnimationFrame(showMessage);
//   } else if (scrollMessage.textContent) {
//     scrollMessage.style.opacity = 0;
//     const timerId = setTimeout(() => {
//       scrollMessage.textContent = '';
//       clearTimeout(timerId);
//     }, 500);
//   }
// }

// window.addEventListener('scroll', onScroll);

// const serverJson = JSON.stringify('./events.json');
// const getJson = JSON.parse(serverJson);

// console.log(getJson);
const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
});

numberInput.addEventListener('input', handleInputChange);

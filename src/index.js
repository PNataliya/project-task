import { xmlhttp, url, myFunction } from './js/render-table';
import { handleInputChange } from './js/range-input';

// // ==================

let dataEvents = require('./events.json');
console.log('данные из events.json', dataEvents);

let namesEvents = require('./names.json');
console.log('данные из names.jsone', namesEvents);

// console.log('events :', dataEvents);
// console.log('name events :', namesEvents);
console.log('event :', dataEvents[0].event[0]);
console.log('длина массива events:', dataEvents.length);
// ==============================
let arrAll = [];
arrAll.push(dataEvents);
arrAll.push(namesEvents);
console.log('объединенный массив', arrAll);
// ======================

const eventCount = dataEvents
  .map(({ event }) => event)
  .reduce((events, event) => {
    const count = events[event] || 0;
    events[event] = count + 1;
    return events;
  }, {});
console.log(eventCount);
// ============================
let eventTotal = dataEvents;
const events = eventTotal.map(event => event.event);
// let nameEventGet = eventTotal[i].event;
// let total = 0;

console.log('перебор по event в массиве', events);
// =======
let fromTotal = dataEvents;
const froms = fromTotal.map(from => from.from);
console.log('перебор по from в массиве', froms);
// ===== отфильтровать по дате'[] потом reduce по event ==========
// let oldArrays = dataEvents;
// const totalScore = oldArrays.reduce((total, oldArray) => {
//   return total + oldArray.event;
// }, 0);
// console.log('reduce event', totalScore);
//  среднее значение ====
// const averageScore = totalScore / students.length;
// // ==== количестко событий на дату из events.json ====
let eventName = dataEvents;

function countEventsOnDayFrom(affect) {
  let b = {};
  let total = 0;
  affect.forEach(p => {
    if (b.hasOwnProperty(p.from)) {
      b[p.from].event += [p.event];
      b[p.from].Length++;
    } else {
      b[p.from] = { from: p.from, Length: 1, nameEvent: p.event };
    }
  });
  return Object.values(b);
}

console.log(
  'количество событий на дату из events.json',
  countEventsOnDayFrom(eventName)
);
// ==========   total событий ========

const arr = dataEvents;
let result = Object.values(
  arr.reduce((acc, { event }) => {
    if (acc[event] === undefined) acc[event] = { name: event, count: 1 };
    else acc[event].count++;
    return acc;
  }, {})
);

console.log(result);
// ======== сколько раз повторяется дата ===
const arr2 = dataEvents;
const result2 = {};
for (let i = 0; i < arr2.length; i++) {
  const a = arr2[i].from;
  if (result2[a] != undefined) ++result2[a];
  else result2[a] = 1;
}
for (const key in result2)
  console.log('число ' + key + ' == ' + result2[key] + ' раз(а) <br>');
// =====cортировка по event ===
let sortEvent = dataEvents;
sortEvent.sort(function (x, y) {
  // сначала сортируем по полю ' event'
  if (x.event < y.event) {
    return -1;
  }

  if (x.event > y.event) {
    return 1;
  }

  // если имена совпадают, то сортируем по 'from'
  return x.from - y.from;
});
console.log('cортировка по event', sortEvent);
// ========сортировка по дате======
let sortDayFrom = dataEvents;
sortDayFrom.sort(function (x, y) {
  // сначала сортируем по полю 'from'
  if (x.from < y.from) {
    return -1;
  }

  if (x.from > y.from) {
    return 1;
  }

  // если имена совпадают, то сортируем по 'event'
  return x.event - y.event;
});
console.log('cортировка по from', sortDayFrom);
// ======= сортировка по дате  =====
let sortDayTill = dataEvents;
sortDayTill.sort(function (x, y) {
  // сначала сортируем по полю 'name'
  if (x.from < y.from) {
    return -1;
  }

  if (x.from > y.from) {
    return 1;
  }

  // если имена совпадают, то сортируем по 'year'
  return x.till - y.till;
});
console.log('cортировка по till', sortDayTill);
// ============

const eventNameMap = dataEvents.flatMap(dataEvent => dataEvent.event);
console.log(eventNameMap);

// console.log('number event :', Number(dataEvents[0].event[0]));
// ======== получение названия UA в Объекте =======
const obj = namesEvents.ua.event;

const values = Object.values(obj);

console.log('получение названия event в ОБЪЕКТЕ объектов : ', values);

// ========== сортировка в МАССИВЕ объектов ====
const sortByAscendingBalance = dataEvents =>
  [...dataEvents].sort((first, second) => first.from - second.from);
console.log(
  'сортировка в МАССИВЕ объектов:',
  sortByAscendingBalance(dataEvents)
);
// ===================

// ========UGANDA=====
// We have some lat like
// "from": "2022-02-25",
// "till": "2022-03-31",
// "lat": 0.5641,
// "lon": 30.207,
// "event": [
//   "47"
// ],
// "qualification": [
//   "24"
// ],
// "object_status": [
//   "3"
// ]
// It's Uganda. Should we ignore it
// ========================

// Что означает 4-й пункт «Карта может быть отзывами.»?
// Под картой есть интерактивная шкала времени в виде «колонок»:
// Каждое деление соответствует дате (от)
// Статистика слева — это количество преступлений (affected_number) на текущую дату с разбивкой по категориям (affected_type).
// Высота столбца зависит от количества преступлений (affected_number) за период и должна рассчитываться в соответствии с данными.
// Карта может быть ответами.
// Мы показываем 100 делений на временной шкале. Берем последние 100.
// ==============

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

// =============================

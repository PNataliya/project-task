// const fetchMapBtn = document.querySelector('.button_for_animation');
// console.log(fetchMapBtn);
// const userList = document.querySelector('.list');

// export default fetchMapBtn.addEventListener('click', () => {
//   fetchMap()
//     .then(myMap => renderMap(myMap))
//     .catch(error => console.log(error));
// });

// export default function fetchMap() {
//   return fetch(
//     'https://api.maptiler.com/geocoding/[query].json?key=QuhBFGCGuFn0xImQPnPl'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderMap(myMap) {
//   const markup = myMap => {
//     return `<div class="map">${myMap.id}</div>`;
//   };
//   userList.innerHTML = markup;
// }

let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

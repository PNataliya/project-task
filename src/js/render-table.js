export let xmlhttp = new XMLHttpRequest();
export const url = require('../events.json');
console.log(url);
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this.responseText);
  }
};
xmlhttp.open('GET', url, true);
xmlhttp.send();

export function myFunction(response) {
  const arr = JSON.parse(response);
  console.log(arr);
  //   const i = 0;
  let out = '<table>';

  for (i = 0; i < arr.length; i++) {
    out +=
      '<tr><td>' +
      arr[i].from +
      '</td><td>' +
      arr[i].event +
      '</td><td>' +
      arr[i].object_status +
      '</td></tr>';
  }
  out += '</table>';
  document.getElementById('id01').innerHTML = out;
}

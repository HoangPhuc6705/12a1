import classlist from "./classlist.js";
import name from "./bug.js";

// Group = [1 -> 4] group 1 to group 4
// tr = [1 -> 5]
// td = [1 -> 2]
// function vt(group, tr, td) {
//   document.querySelectorAll('.group')[group - 1].querySelectorAll('tr')[tr - 1].querySelectorAll('td')[td - 1].style.background = 'red';
// }

//print list
const n = 4
for (let i = 0; i < n; i++) {
  for (let j = 0; j < 5; j++) {
    for (let z = 0; z < 2; z++) {
      document.querySelectorAll('.group')[i].querySelectorAll('tr')[j].querySelectorAll('td')[z].innerHTML = classlist[(i * 10) + j + (z + j)];
    }
  }
}

var count = 0;
var gr = 0;
var tr = 0;
var td = 0;
const randbtn = document.querySelector('.random button');
randbtn.onclick = () => {
  document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.background = 'rgb(53, 53, 53)';
  document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.color = 'white';
  randbtn.disabled = true;

  var delay = 0;
  const runtime = setInterval(() => {
    if (delay >= 40) {
      randbtn.disabled = false;
      clearInterval(runtime);
      return true;
    }

    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.background = 'rgb(53, 53, 53)';
    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.color = 'white';

    do {
      gr = Math.floor(Math.random() * 4);
      tr = Math.floor(Math.random() * 5);
      td = Math.floor(Math.random() * 2);
    } while (tr == 0 && gr == 0 && td == 0)

    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.background = 'white';
    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.color = 'black';
    document.querySelector('.random .text p').innerHTML = classlist[(gr * 10) + tr + (td + tr)];

    delay++;
  }, 100);
}
let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');
let sortPic = document.querySelector('.sorter');

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN')
        e.target.parentElement.remove();
}, false);

function sort(){
    sortPic.addEventListener('click', function(e){
        
    })
}

let ascendingOrder = true;

document.getElementById("sorter").addEventListener("click", sortList);

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list-container");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (ascendingOrder) {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
  ascendingOrder = !ascendingOrder;
}

document.getElementById("cancel").addEventListener("click", function() {
    document.getElementById("input-box").value = "";
});
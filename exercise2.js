// Event listener thi arvani che aa
// Ctrl+Shift+R
// I have to create a div and insert it  in a page that contains heading
// Whenever someone click on div   then save the note into a local storage

let divElem=document.createElement('div');
divElem.setAttribute('id','elem');
let text=document.createTextNode('This is an editable element click to edit it');
divElem.appendChild(text);
// Now add event listener
let container=document.querySelector('.container');
// cos aana pachi insert karvi che a
let first=document.getElementById('myfirst');
// cos aa pela insert karvani che div

// etle basically container heading ne myfirst wala ni middle ma insert kariye che s

container.insertBefore(divElem,first);


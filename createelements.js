console.log("Jai Shree RAM");
// Create elements
let element= document.createElement('li');


// Add a class name to the element
element.className='childul';
// Add id
element.id='idisonesep';
// Set Attribute
element.setAttribute('title','Title 1');
element.innerHTML='<b>Kem Cho, Jai Shree Krishna Krishna</b>';
console.log(element);

// Have aa element ne doc ma append karva maate
// Pela ul wali ni query selector le karva
let ul=document.querySelector('.this');
ul.appendChild(element);
console.log(ul);

// Appending text nodes
let sexy = document.createTextNode('Anshul');
element.appendChild(sexy);
console.log(element);
// Replace karva maate procedure

let elem2=document.createElement('h3');
elem2.id='5rkpabs';
elem2.className='element2';
text1=document.createTextNode('Hello How are you');
elem2.appendChild(text1);
// Replace
element.replaceWith(elem2);
// Similarly Child can also be replaceWith child
// parentDiv.replaceChild(sp1, sp2);

// let list = document.getElementById("myList");
//  if (list.hasChildNodes()) {
//  list.removeChild(list.childNodes[1]);
//  }




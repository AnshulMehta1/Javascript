let cont=document.querySelector('.no');
cont=document.querySelector('.container');
console.log(cont);
// To Print the Child Node
console.log(cont.childNodes);
console.log(cont.children);

// Differenee e j ke childre excludec comments, new lines, text ityaadis 
let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);
// etle su item che e return karse
let nodeTypes=cont.childNodes[0].nodeType;
console.log(nodeTypes);
// List 1.element ,  2.attribute, 3 Text, 8.Comment, 9.document , 10.doc typeof

let container = document.querySelector('.container');
// div.container ne .container bey same j che , takes a div whose class is container
console.log(container.children[1].children[0].children);
// Hover karo to khabar e padi jaay ke kaya containers select thaya che
// children ke bhi children

// 4 child hata , emathi pelo child select karyo, pachi ena children kadhay to peli 5 ni list aavi , 
// pachi enay children kaadhya to 5ey elements chhuta chhuta ee aakhi block list na children thaaay ne

// first child pelo child aape , be it text , comment ..
// first element child gives out only elementrs
// simi last child annd last element child ..

console.log(container.firstElementChild);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextSibling);
// Every kind of function is pre defined in java script JS

// Chaining
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);

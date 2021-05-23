// DOM Selectors
// document.all thi ek html collection male che badha tags mali jaay
// To select particular elements by id wise, class wise and so on
// For that we use selectors 
// 2 Types - Single selectors, multi Element selectors

let element=document.getElementById('sampleid');
console.log(element);
let element1=document.getElementById('heading');
console.log(element1);
let element2=document.getElementById('3nd');
console.log(element2);

// Overwrite jari sakay ek ne ek ne ek methods thi

// element2=element2.className;
// console.log(element2);

// element2.childNodes thi Child Nodes mali jaay
// element2.ParentNode thi Parent Node mali jaay

// CSS Changes
element2.style.color='red'
console.log(element2);

// style.background and so on har properties of css can be changed
element2.innerText="Anshul is a Great Coder";

// Inner HTML can also be chnaged and also html Tags can be used in between
element2.innerHTML="<b> Anshul is a Superb Coder</b>";

// J Query Query Selectors
// # thi id selector pass thaay ne . thi class selector args ma
let sel=document.querySelector('#sampleid');
console.log(sel);
sel=document.querySelector('.child');
console.log(sel);
// aama elements select thaay che
// pan aama 1st instnce of div j aave
sel=document.querySelector('div');
console.log(sel);

sel.style.color='green';
// console.log(sel);
// etle pela div ma jetla eleements hase e badha green thai jase

// Mult Element Selectors

// elements by class name se
// let elems=document.getElementsByClassName('child');
// console.log(elems);

// Iterate the list, acessing the specific things 

// console.log(elems[0]);
// console.log(elems[2]);

// Chaining in order to do multi level iteration, etle anndar ni andar and so on

let elems=document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));

// Etle pela container class lidho ena elements maathi jetla child class ma elements hata e print karavya
// Tag name thi e thai saket

elems=document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(function(element){
    
    element.style.color='blue';
    console.log(element);

})
// This way the elements can be itearted , manipulatd ,like color manipulation, bold,i,u, style and css stuff
// Traditional for loop to iterate over things

for (let index=0; index<elems.length;index++){
    const element = elems[index];
    console.log(element);
}



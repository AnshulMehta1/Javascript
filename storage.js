// key value ma storage thaay
localStorage.setItem("Name",'Anshul' );
// Pre Defined Fuction j che
localStorage.setItem("Name2",'Rajvi');
// Console ma
// window.localStorage to retieve what is stored in localStorage
// Also specific retuevals possible che
// Type of 
console.log(typeof window.localStorage);
// Key ke value ni type
console.log(typeof window.localStorage.Name2);
// Key based retrieval
console.log(window.localStorage.Name);;
// get for retrieval
let name =localStorage.getItem("Name2");
console.log(name);

// To clear localStorage
// Particular key wali value 
localStorage.removeItem("Name");

// To completely clear the Local Storage
// localStorage.clear();
// Add an array to localStorage
let arr=['a','b','c'];
localStorage.setItem("alpha",arr);
// aama String ma fari jase abc ne pachi Local Storage ma hjase
// To Solve that 
localStorage.setItem("alpha2",JSON.stringify(arr));
// nOW IT IS STORED
// To retrieve the elements of alpha2
name2=localStorage.getItem('alpha2');
console.log(name2); // Pan aama ek array male che
// To get it as array he

name2=JSON.parse(localStorage.getItem('alpha2'));
console.log(name2);

// Session Storage
sessionStorage.setItem("Name",'Anshul' );
// Pre Defined Fuction j che
sessionStorage.setItem("Name2",'Rajvi');
// Session Storage is volatile till session and Local Storage re  until you want it 

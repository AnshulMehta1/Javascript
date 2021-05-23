// ways to print 
//console.log("hello world kem cho");
//alert("bahut tej ho rahe ho ha");
//document.write("Documetn write writes text in the site");
//console API
//console.log("hello world kem cho"); // logs information in the console
//console.warn("errors log karne mein kaam aata hai");
//console.error("used to give error");
//console.clear(); // clear console css

// Console lOg etle e vastu console ma log karo 
// Console . table ek table banavi dese objects maate
// Console clear , console warn imoprtant
// Console ASSERT TO CHECK SOME CONDITION COODE
// 
// Console time and Console TIME End ni vachche Blcok of Code to check time 



// Back Ticks , SIngle Quotes Double Quotes String mewin Sab Chalega


var channel;
// Just initialize the Variables

// Only use Letter for starting variable

// Cont and let code readability vadhari de and are much better

const abc='Anshulll';
console.log(abc);

// vars are mutable varibale and
// const constant che etle they can never be changed

// const cannot be barely initialized
var city='Ahmedabad';

// let block level scope, const and var global scope hoy
{
    let city ='Bhavnagar';
    console.log(city);
    // Block level scope
}

console.log(city);
// global Scope 


// Arrays ne  OObjects ma JS ma changes thai sake , assigne na kari sakiye pan in built
// Functions use karie insert , pop type functions use kari sakie

const arr2=[1,2,3,4,5,6];
console.log(arr2);
arr2.push(9);
console.log(arr2);


// Data types in java script
// Primitive and Reference 
// Primitive -Stack ma Memory Allocation
// Reference - Heap ma Dynamic Mem Allocation, Objects , Derived
// P- Null , Number, String , Boolean , Undefined , Symbol
//R- Arrays/ Objects / Literals/Functions / Dates

var number=10;
var number1=20;
console.log(number+number1);


var str1="bdvb";
var str2="nydhm";
var str3='This is a single quotes strinn'
console.log("The String is Concatenated"+str1+" "+str2+" "+str3);

console.log("Data Type is "+(typeof str3));
// aa type of thi type Khabar Pade 

let mark=69;
console.log(mark);
console.log("Data Type is "+(typeof mark));

// BOOLEAN
let GoodCoder=true;
console.log("Anshul is a GoodCoder is "+GoodCoder);
console.log("Data Type is "+(typeof GoodCoder));
// Booleans
var a= true;
var adash=false;


// Null 
let nullVariable=null;
console.log(nullVariable);
console.log("Data Type is "+(typeof nullVariable));
// Return Value Bogus Hoy che etle Object Banavi ne type of ma  return kare che generally


// yeh undefined hai agar kuch initialize hich nai kiya
// null is also a dt and null is different from undefined
// objects and array are non promitvevw data types

// Undefined
let undef=undefined;
console.log(undef);
console.log("Data Type is "+(typeof undef));
// This returns indeed an Undefiend type 


// Reference Data Type 

// 1) Array
 let myarray=[1,2,3,4,5,6,7,8,9,'10 String'];
console.log(myarray);
console.log("Data Type is "+(typeof myarray));

var arr=[1,2,3,4,5,"ily"];
// console.log(arr);
console.log(arr[2]);
// Operators and other things remain the same, == compparion,>=,<=,,!,&&,||


// Objects is a data type in JS
let marks= {
    anshul:100,
    bijokoik: 90,
    trijojkoi: 80,
    chothochutiyo:60,

}
console.table(marks);
console.log("Data Type is "+(typeof marks));
// Functions 


function findname(){

}
console.log("Data Type is "+ (typeof findname)); 

let date = new Date();

console.log("Data Type is "+ (typeof date)); 

// var b=20;
// var c=30;
function avg(b,c){
    d=(b+c)/2;
    return d;

}

// call fn using rt
d1=avg(20,30);
d2=avg(1,3);
console.log(d2);



// Type Conversion in JS 
let myvarb=34;
console.log(myvarb);
myvarb=String(myvarb);
console.log(myvarb);
// Explicit Conversion aam THaay
 let myvara;
 myvara=String(69);

 let date1=String (new Date());
 console.log("Type of date1 is ");
 console.log(typeof date1);

 let arr3=String([1,2,3]);
 console.log(typeof arr3);
 // Implicit Conversion

 let k1=9;
 console.log(k1.toString());
// To String e Bool, Date , har type ma karo sakay

let stri1="369693";
console.log(stri1,typeof stri1);
stri1=Number(stri1);
console.log(stri1,typeof stri1);

// Impkicit let stri1=Number("369693");
// Implicit let stri1=parseInt("369693");
// Implicit let stri1=parseFloat("369693");
//. toFixed() --> Number of Decimals je aapde jota hoy e 

// Type Coercion
let stris="123456789";
let strin=12369;
console.log(stris+strin);

// Number is Converted to a String and Added in this  type of cases
// Blue OP- Num
// Black - String 

// Strings in JS JavaScript
console.log("Strings in ");
const name1 = " Anshul";
const Occupation=" IAS";
console.log(name1+" "+Occupation);
// Html tags e double quotes ma 
let html;
html="<h1> Anshul </h1> "+"<p> Para </p>";

// Concat Function is great
html=html.concat("this",name1,Occupation);
console.log(html);
// Length of String Function
console.log(html.length);

// To Upper  Case and Two Lower Cases
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
// Only returns , does not tinker with the Original String 
// Indexing :
console.log(html[0]);
console.log(html[2]);
console.log(html[5]);

// Index Of Function
console.log(html.indexOf("this"));
// Reutrns the Index 
// -1 jo na hoy e substring ma 

console.log(html.indexOf("h"));
// First Occurence j aape Index Of

// Last Occurence maate Last Index Of Use karvani
console.log(html.lastIndexOf("h"));

// Pachi Same Char AT function e Index par kayo char che e aape
console.log("The 18th Char")
console.log(html.charAt(18));

// Ends with Check
console.log(html.endsWith(Occupation));
console.log(html.endsWith("this "));

// Includes The Given String
console.log(html.includes(name1));
console.log(html.includes("this"));
console.log(html.includes("MC"));
// SUB Strings
// Lower Bound Inclusive , UB Non Inclusive
console.log(html.substring(1,10));
console.log(html.slice(-9));
// -4,-6,-9 paachal thi last 4 , last 6 , last 9 returns 

// Split Function Strings
console.log(html.split(' '));
console.log(html.split('>'));
// Splits with the Space , Etle Jya Jya Space male tyathi Split Thaay che e array ma elements add thaay che

// Replace ma TBR -OLD, TBRW (NEw) aa format ma entriy karie etle document
// Back Ticks ma HTML easy pade lakhva ma etle e use kari sakay easyily 
let GOD1='RAM';
let GOD2='Shiva';
let GOD3='Krishna'
let myhtml=`Hello World ${GOD1}
<h1> Jai Shree RAM </h1>
<p> I am a Huge Bhakt of ${GOD1} and ${GOD2} and ${GOD3}</p>
`;
console.log(myhtml);
// To add it to Screen do:

// document.body.innerHTML =myhtml;
//Template Literal is same as f-strings in python only the difference is here we are using ``
//Ans)
//name = "Anshul";
//code = `<h1>Hello ${name}</h1>`
//document.body.innerHTML = code;

// Arrays and Object in Detail JS
// Methods- isArray
let samplearr=[69,96,36,39,99];
let values=samplearr.indexOf(99);
console.log(values);// Will give 4
// To change an element
samplearr[1]=69;
console.log(samplearr);
// To pop ann element
console.log(samplearr.pop());
// To push element
console.log(samplearr.push(99));
console.log(samplearr);

// To add in starting
samplearr.unshift(33);
console.log(samplearr);

// To Remove from starting
samplearr.shift();
console.log(samplearr);
// Splice etle kyaathi removed karsu ne ketla remove karser
samplearr.splice(2,3);
// Index 2 thi statrt kari 3 elements in number remove kare
console.log(samplearr);
// Reverese ma to reverse thai jase method 
let samplearr2=[1,2,3,4,5,6,7,8,9];
samplearr=samplearr.concat(samplearr2);
console.log(samplearr);

// Objects
let object1= {
    name: 'Anshul',
    Age: 20,
    isGreatCoder: true,
    GPs: [4,4,4,4,4,4,4,4]

};


console.log(object1);
console.log(object1.Age);
console.log(object1.GPs);
console.log(object1.isGreatCoder);

// Conditionals in JS
// IF Else Statements
var age=20;
if (age>18){
    console.log("18+");
}
else {
    console.log("bachha");
}
// JS MA else if pan hoy che
// == only checks values , === operators check value and Data  Type 
// Similarly != checks for values and !== Checks is Value and Type Both are Not Equals

// Check karva ke if the varibale exists if (typeof varname !== 'undefined') console ma log ke exists
// && is and , || Pipe sign OR ,

// Ternay Operator var=something? true hoy to : false nikale to
// Switch Case Statements
switch (age){
    case 18:
        console.log("Badhiya");
        break;
    case 20:
        console.log("Zyada hi Badhiya");
        break;

}

// Loops 
// for , while , for each . do while 

for (let i=0;i<10;i++){
    console.log(i);
}
let j=0;
while (j<10){
    console.log(j);
     j++;
}

// Continue to next iteration e jaay , Break matlab loop ni baar j nikali jao sidha direct

 var arr1=[1,9,6,3,4,8,7,6];
// for(var i=0; i<arr1.length;i++){
//     console.log(arr1[i]);
// }
// Every element of the array is print
arr1.forEach(function(element,index,array){
console.log(element,index,array)
})

// Iterating Objects , Iterate key Value pairs
for (let key in object1){
    console.log(`${key} of object is ${object1[key]}`)
}

// Functions in JS 










// Webiste Manipulation DOM
console.log('This is Webiste Manipulation DOM Perfected');
// let a1 =window;
// Window Object is Global Object in JS Object
// Etle Window.alert and alert  both works in this case


// window.alert('Jai Shiv Shmabhu Bholenath');
// alert('Jai Shree RAM ');

// Inut leva maate prompt je upar aave
// a1=prompt("Enter Your NAME Please");
// console.log(a1);

// Confirmation maate use confirm
// a1=confirm("Are you sure this is your final name");
// console.log(" Final Name "+a1);
// Note: Order ma j chaalse , etle pela ip lidho prompt maathi pachi print thase pachi confirm aavse


// Document for Window
// Innerh Height Outher Height and WiDTH 
let a1 =window.document;
a1=window.innerHeight;
console.log(a1);
a1.innerWidth;
console.log(a1);


// Scrolling dekhe zara
let b1=window.document;
b1=scrollY;
console.log(b1);

// Control karvama kaam laage

// Locations , href...
let c1 =window.document;
c1=location;
console.log(c1);
// To get the url location.href
// To Sum it up aa badhi properties immense control aape che aapdane 
// href =
// c1=location.href='//instagram.com'
// Directed to Instagram

c1=location.toString();
console.log(c1);

// History aape che 
c1=window.history;
console.log(c1);

// history.go , history.go(-1) e 1 previous website e lai jai

// DOM part 2 + Layout Basics


// div.container lakhva thi Container Class bani jase c
//div.child Lakhvathi child class bani jaay
//div.child*3 lakhvaathi 4 childrenn bani jase

// Class Multiple hoi sake
// Identity to ek j hoy

let doc =document;
// DOM --> Document Object Model
// Type of Document is Object 
console.log(doc);
// DOM has a tree structure
doc=document.all;
console.log(doc);


doc=document.body;
console.log(doc);
doc=document.forms;
console.log(doc);

// Iterate everything in the document
// Function ki andar che e

Array.from(doc).forEach(function(element)
{
    console.log(element);
})


// Links maate doc:href lakhis etle tarat j thai jase
// doc=document.links thi badhi links mali jase
// Web Page Crawler 
doc1=document.links;
Array.from(doc1).forEach(function(element){
    let link=element.href;
    if (link.includes("instagram")){
        console.log(link);
    }
})








// Object is an entity 
// Real life modelling where object has methods, attributes ...
let car={
    name:'Mercedes',
    topSpeed:1000,
    run:function(){
        console.log('Car dode che');
    }
}
console.log(car);
console.log(car.name);
console.log(car.run());

// This is just revision of object literals
// Constructors -- Template to create objects, etle ema aapde args aapi ne same class  na objects banaiye skaie
function genCar(namein,topspeed){
// Same as in all languages here
    this.name=namein;
    this.topSpeed=topspeed;
    this.run=function(){
        console.log(`${this.name} is running`);
        // This gives the name of car that is running
    }
    this.analysis=function(){
        console.log(`this car is slower than mercedes by ${1200-this.topSpeed}`);

    }


}
car1=new genCar('Porsche',1000);
console.log(car1);
console.log(car1.name);
console.log(car1.run());
console.log(car1.topSpeed);
console.log(car1.analysis());
// Prototypes in JS
//JAI SHREE RAM
// proto etle object prototype thi start thaay che kaam
let obj={
    name:'Anshul',
    age:19,
    cgpa:4 
}
// Constructor 
function Obj(givenName){
    this.name=givenName;

}
let obj2= new Obj('Anhsul 1st');
console.log(obj2);

// How to edit Prototypes
Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
     this.name=newName;
}
obj2.getName();
// Object.prototype saathe kkyaarey cheddkhanni nai karvani
// Make them only to objects created by man-made
// Similarly Functions che e badha can be put to practice objects
obj2.setName('Anhsul');
console.log(obj2);

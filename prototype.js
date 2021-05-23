console.log("This is tutorial 30");

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
    // Name as an input le ne change kari de
}

// This creates harry object
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("Harry2")
// console.log(harry)

// This also creates harry object
// Aa prototype no use karine object create kare che
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Harry2")
// console.log(harry1)
// Basically Prototype class type che, class ES 6 ma thi aavya , e pela Prototype use karta ta

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan function run thaay to aam thaay
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

// Programmer ek role chec
// Pan programmer ni pan properties hoy sake
// etle e prototype ne aa vache inheritance ka rishta che
// Programmer inherit thase Employee thi
// etle 3 vastuo employee thi lese , language aapvi pads

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype , toj slogan malse
// cos emnme thodi badhi properties malse employyes ni
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
// Constructor pan e j rite Manually aapvi pade , directly objects create nai thai sake
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);



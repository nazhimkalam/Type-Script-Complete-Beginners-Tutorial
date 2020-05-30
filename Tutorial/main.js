"use strict";
// WHAT IS THE USE OF TYPE SCRIPT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
// Variable Declaration
//--> Constant Variables has to be decalred but variables no necessary 
var nameOfCompany = 'NazhimTech';
var number = 10; // when you declare variables like this it will become the type of the data you entered in this case Number
var newNumber; // in this case its variable type is any
newNumber = 'Nazhim';
console.log(newNumber);
newNumber = 50;
console.log(newNumber);
newNumber = true;
console.log(newNumber);
newNumber = 2.356;
console.log(newNumber);
// Variable Types
// Syntax  let variableName : dataType;
var total;
var num; // number includes integers and decimals 
var type;
type = true;
console.log(type);
num = 5;
num = 2.5;
console.log(num);
total = 15;
// total ='nsjkdv'  this gives an error
var name = 'Nazhim';
var sentence = "My name is " + name + " and I am a Student";
console.log(sentence);
console.log(total);
// variable of type null or undefined
var n = null;
var u = undefined;
console.log(null);
console.log(undefined);
// decalring array type
var myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray);
var myArray2 = [1, 2, 3, 4, 5, 6];
console.log(myArray2);
// create a tuple which contain a string and a number
// Tuple of the values are fixed
var person1 = ['Nazhim', 18];
// Enum type 
// Used to declare all the constants
// In enum the variables will contain values by default as 0,1,2,3,4.... this happens when you don't specify the value of the constant
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Blue"] = 50] = "Blue";
    Color[Color["Green"] = 88] = "Green";
})(Color || (Color = {}));
var redColor = Color.Red;
console.log(redColor);
var blueColor = Color.Blue;
console.log(blueColor);
var greenColor = Color.Green;
console.log(greenColor);
// if your un-sure of the type of the variable u can use 'any' type
var variable;
console.log(variable);
variable = 4;
console.log(variable);
variable = true;
console.log(variable);
variable = 'String';
console.log(variable);
variable = 2.03;
console.log(variable);
// we can use 'as' to typecast the variables 
var myStr = '7';
var myNum = myStr + 5;
console.log(myNum);
// we can use '|' to assign multi type for a variable 
var multype;
multype = true;
multype = 50;
// FUNCTION
// If you need the parameters to be optional we use the '?' mark next to the parameter to indicate that it's optional
// Now when you have added '?' mark then you can call the function with out passing parameters as well
// We also have default parameters
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    if (num1 & num2) {
        return num1 + num2 + num3;
    }
    else if (num1) {
        return num1 + num3;
    }
    else {
        return -1 + num3;
    }
}
console.log(add());
console.log(add(20));
console.log(add(20, 30));
function details(person) {
    console.log("My name is " + person.firstName + " " + person.lastName + " ");
    console.log("His is " + person.age + " years old");
}
var per = {
    firstName: 'Nazhim',
    lastName: 'Kalam',
    age: 18
};
details(per);
var per2 = {
    firstName: 'Hashim',
    age: 14
};
details(per2);
// CLASSES
// In Js we weren't able to create Classes but using Ts we can
// Because of this we can achieve the OOP concepts such as inheritance etc...
// Let's create a class called Employer
var Employer = /** @class */ (function () {
    // constructor
    function Employer(employerName) {
        this.name = employerName;
    }
    //method
    Employer.prototype.welcomeMsg = function () {
        console.log("Good Morning " + this.name);
    };
    return Employer;
}());
var emp1 = new Employer('Nazhim');
console.log(emp1.name);
emp1.welcomeMsg();
// let's make a Manager class and inherit Employer class
// we can use 'extend' key word to achieve this
// to access the Base class Constructor we can use the super keyword
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    // Manager constructor
    function Manager(managerName) {
        // calling the Employer class constructor and setting the name there itself
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.display = function () {
        console.log("The manager for this year is " + this.name);
    };
    return Manager;
}(Employer));
var mang1 = new Manager('Saman Hetti');
console.log(mang1.name);
mang1.welcomeMsg();
mang1.display();
// Access Modifiers (public, private, protected)
// ---> We have 3 types of access modifiers such as public, private, protected.
// ---> public means you are able to access the attributes or methods from a the Base class to the sub class as well as outside both the classes 
// ---> private means you are not able to access the properties of the class from a child class as well as outside unless you make setters and getters
// ---> protected means you are able to access the properties on a inherited class but not able to access them out side of both the classes

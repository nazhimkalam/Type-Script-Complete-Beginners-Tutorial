// ES6 refers to version 6 of the ECMA Script programming language.
// ECMA Script is the standardized name for JavaScript
function add(num1, num2, myresult) {
    console.log(typeof num1); // displaying the type of the variable
    console.log(typeof num2);
    var result = num1 + num2;
    console.log(myresult + result);
}
var number1 = 10; //if you are initializing directly you don't need to add :number but if you don't initialize then you have to add
var number2;
number2 = 20;
var myresult = "This is my result ";
add(number1, number2, myresult);
// objects in type script
var std; // method 01
std = { name: "hashim", age: 14 };
console.log(std.name + std.age);
var person = {
    // method 02
    name: "Nazhim",
    age: 18
};
console.log(person.name + person.age);
var myArray = ["Nazhim", "Hashim", "Abilash", "Kalam"];
myArray.forEach(function (element) {
    // like this we can display the contents of the array
    console.log(element);
    console.log(element.toLowerCase());
    console.log(element.toUpperCase());
});
var myNumber;
myNumber = [1, 5, 2, 4, true, false, false, true];
myNumber.forEach(function (element) {
    console.log(element);
});
// we have TUPLES [data,data]
// Tuples are used for FIXED LENGTH ARRAY
var myTuple;
myTuple = ["Nazhim", 18, true]; // this works perfectly
// myTuple = [18, "nazhim", true]; // this doesn't work because the order matters as assigned
console.log(myTuple);
// ENUM is basically used to store CONSTANTS, by deafult the CONSTANTS will have values
// starting from 0,1,2,... so on, only if the constants aren't defined
// NOTE that the CONSTANT NAMES HAS TO BE IN CAPITAL
var Names;
(function (Names) {
    Names["NAZ"] = "Mohammed Nazhim Kalam";
    Names["HAS"] = "Mohammed Hashim Kalam";
    Names["ABI"] = "Abilash Kanna Sathiyamoorthi";
    Names["RAVI"] = "Ravindu Sirimanne";
})(Names || (Names = {}));
var TokenNumber;
(function (TokenNumber) {
    TokenNumber[TokenNumber["NAZ"] = 0] = "NAZ";
    TokenNumber[TokenNumber["HAS"] = 1] = "HAS";
    TokenNumber[TokenNumber["ABI"] = 2] = "ABI";
    TokenNumber[TokenNumber["RAVI"] = 3] = "RAVI";
})(TokenNumber || (TokenNumber = {}));
console.log(Names);
console.log(Names.NAZ);
console.log(TokenNumber);
// ANY data type is flexible but useless because it's just like working with javascript
var myAnyTypeArray = [];
myAnyTypeArray[0] = "Hello Friday";
myAnyTypeArray.push(1203256422520);
myAnyTypeArray.push(true);
myAnyTypeArray.push(true);
myAnyTypeArray.forEach(function (element) {
    console.log(element);
});
// create a function which takes in 2 parameters of data type string and number only and returns the sum of the two numbers
function addNumber(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    console.log(result);
}
addNumber("8", 5);
// converting number strings into actual numbers directly
var n = "456";
var v = "123";
console.log(n + v); //string concat
console.log(+n + +v); // method 01 using the '+' sign
console.log(parseFloat(n) + parseFloat(v)); // method 02 using parseFloat()
// we have LITERAL DATA TYPE which basically means USERS data type
// I can create my type as to what can be added
// Example if I need the user to only enter 5.6 not any other number
var enterNumber; // the type is 5.6
enterNumber = 5.6;
// enterNumber = 5.66   error
// enterNumber = 5.0    error
console.log(enterNumber);
// FUNCTIONS SPECIAL POINT TO NOTE
// We can create a return type in a function in typescript like this
// function funcName(parameter1: data-type, parameter2: data-type):return-data-type{
// code
// }
// function which doesn't return anything will have 'void' data type by default
// Function type in variables
function sum(num1, num2) {
    return num1 + num2;
}
// let total = sum; // this works but if u need the total variable to only accept the sum function, but nothing else then use the below code
var total;
total = sum;
console.log(total(4, 5));
// functions have 2 synatax
// --> (1) let variableName: Function; this means the variable will take any function
// --> (2) let variableName: (parameterName:datatype) => return-type
// undefined data type
var data;
data = undefined;
// these are mostly used to check if the return value of the function is undefined using if statements
// null data type
// Used to check if the values in the variable are null then output data
var nulldata = null;
// unknown data type
var x;
x = "yyyy";
var y;
// y = x      /// error comes because typscipt doesn't know the type of x so we have to check the type and assign as below
if (typeof x === "string") {
    y = x;
}
// never data type
// this is used when a function will run and crash without returning anything, this will happen only (when using a infinite while loop or using a throw error code statement as shown below)
function generateError(mesg, num) {
    throw { message: mesg, errorCode: num };
}
generateError("nazhim error", 401);

// WHAT IS THE USE OF TYPE SCRIPT

// --> This provides a highly productive tool for javascript IDEs and static checking
// --> Typescript makes the code easier to read and understand
// --> With type script we can make a huge difference over js
// --> Ts is way better than Js because in Js oop are like using dictionaries but in Ts we can make classes
// --> Js no enum, Ts has enum

// We can run a typescript file, it has to be converted into Js
// then you have to run the js file

// always use the export{} keyword at the start
// Hello world

export {}  // by using this export{} key word we won't get errors for the variables because in TS, js considers ts as an extension of its class not as a seperate class
let message = 'Hello World'
console.log(message)

// Variable Declaration

//--> Constant Variables has to be decalred but variables no necessary 
const nameOfCompany = 'NazhimTech'
let number = 10     // when you declare variables like this it will become the type of the data you entered in this case Number
let newNumber;      // in this case its variable type is any
newNumber = 'Nazhim'
console.log(newNumber)

newNumber = 50
console.log(newNumber)

newNumber = true
console.log(newNumber)

newNumber = 2.356
console.log(newNumber)

// Variable Types

// Syntax  let variableName : dataType;
let total: number;
let num: number;   // number includes integers and decimals 
let type: boolean;
type = true
console.log(type)
num = 5
num = 2.5
console.log(num)
total = 15
// total ='nsjkdv'  this gives an error
let name: string = 'Nazhim'
let sentence: string = `My name is ${name} and I am a Student`

console.log(sentence)
console.log(total)

// variable of type null or undefined
let n: null = null;
let u: undefined = undefined;
console.log(null)
console.log(undefined)

// decalring array type
let myArray: number[] = [1,2,3,4,5,6];
console.log(myArray)
let myArray2: Array<number> =  [1,2,3,4,5,6];   
console.log(myArray2)

// create a tuple which contain a string and a number
// Tuple of the values are fixed
let person1: [string, number] = ['Nazhim',18]

// Enum type 
// Used to declare all the constants
// In enum the variables will contain values by default as 0,1,2,3,4.... this happens when you don't specify the value of the constant
enum Color{
    Red = 10,   
    Blue = 50,
    Green = 88
}
let redColor: Color = Color.Red;
console.log(redColor)

let blueColor: Color = Color.Blue;
console.log(blueColor)

let greenColor: Color = Color.Green;
console.log(greenColor)

// if your un-sure of the type of the variable u can use 'any' type
let variable: any;
console.log(variable)

variable = 4;
console.log(variable)

variable = true;
console.log(variable)

variable = 'String';
console.log(variable)

variable = 2.03;
console.log(variable)

// we can use 'as' to typecast the variables 
let myStr: unknown = '7';
let myNum: number = (myStr as number) +  5;
console.log(myNum)

// we can use '|' to assign multi type for a variable 
let multype:number | boolean;
multype = true;
multype = 50  

// FUNCTION
// If you need the parameters to be optional we use the '?' mark next to the parameter to indicate that it's optional
// Now when you have added '?' mark then you can call the function with out passing parameters as well
// We also have default parameters
function add(num1?: number, num2?: number,num3: number = 10):number{ 
    if (num1 & num2){
        return num1 + num2 + num3;
    }else if(num1){
        return num1 + num3;
    }else{
        return -1 + num3
    }
} 
console.log(add())
console.log(add(20))
console.log(add(20,30))
   
// console.log(add(5,10))                   this runs in javascript but logically its not correct 
// console.log(add(5,true))                 this runs in javascript but logically its not correct 
// console.log(add('hello', 'nazhim'))      this runs in javascript but logically its not correct 
 
// INTERFACES
// ---> Interface is something like a class with fields and methods but not defined
// ---> So we can use interfaces to make use of the fields and methods when required
// ---> Which will make the code look neat and decent enough
// ---> We also can make the fields optional if you don't wish to enter data for that field

interface Person{
    firstName: string;  // mandatory
    lastName?: string;  // mandatory
    age:number;         // optional 
}
function details(person: Person){
    console.log(`My name is ${person.firstName} ${person.lastName} `)
    console.log(`His is ${person.age} years old`)
}
let per:Person = {
    firstName:'Nazhim',
    lastName:'Kalam',
    age:18,
}
details(per)

let per2:Person = {
    firstName:'Hashim',
    age:14,
}
details(per2)

// CLASSES

// In Js we weren't able to create Classes but using Ts we can
// Because of this we can achieve the OOP concepts such as inheritance etc...

// Let's create a class called Employer
class Employer{
    //field
    name: string;
    // constructor
    constructor(employerName:string){
        this.name = employerName;
    }
    //method
    welcomeMsg() {
        console.log(`Good Morning ${this.name}`)
    }
}
let emp1 = new Employer('Nazhim');
console.log(emp1.name)
emp1.welcomeMsg()

// let's make a Manager class and inherit Employer class
// we can use 'extend' key word to achieve this
// to access the Base class Constructor we can use the super keyword

class Manager extends Employer{
    // Manager constructor
    constructor(managerName:string){
        // calling the Employer class constructor and setting the name there itself
        super(managerName);
    }
    display(){
        console.log(`The manager for this year is ${this.name}`)
    }
}

let mang1 = new Manager('Saman Hetti');
console.log(mang1.name);
mang1.welcomeMsg();
mang1.display();

// Access Modifiers (public, private, protected)
// ---> We have 3 types of access modifiers such as public, private, protected.
// ---> public means you are able to access the attributes or methods from a the Base class to the sub class as well as outside both the classes 
// ---> private means you are not able to access the properties of the class from a child class as well as outside unless you make setters and getters
// ---> protected means you are able to access the properties on a inherited class but not able to access them out side of both the classes







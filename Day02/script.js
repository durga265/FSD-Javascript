//console.log('working')

//variables
//Let, var and const -keywords(inbuilt)

//var- is the oldest way of creating a variable in 1995-2015, var can declared and initialized on the same as well on the different, var is functioned or global scope meaning if it is defined inside a global scope it will accessible anywhere throughout the prg, but if it is defoned inside a function it will be accessible inside the function only

// keyword variableName=value;

//var declaration=initialization
// var myVariable=100;


// console.log(myNewVariable);
// var myNewVariable; //declaration
// myNewVariable=200; //initialization

// alert(myNewVariable);

// scope in js are three parts 
// 1.global
// 2.functioned and 
// 3.block scope

// var newWord="HEllo world";

// function newFunc(){
//     var a = 10;
    
// }

// newFunc();
// console.log(newWord);
// console.log(a);


// var can be redeclare and reintialized, that is the disadv of var keyword
//let can be reintialized and cannot redlcared, let is block or local scope varaible
//const is cannot be  reintialized and nor it can redlcared, const is block scope, const shoild declare and intialized on the same

// {
//     let newVar=100;
//     console.log(newVar);
// }


// Hoisting and Temporal Dead Zone

// console.log(nayaVar);
// let nayaVar="js";

// const variableNew = 20;
// console.log(variableNew);

//Hoisting is the phenomena is the js where if it is declared with var, all the variables move to the top of the prg, so that you are ble to access it, and it will give undefined

// console.log(newString);
// var newString;
// newString="Hoisting";

// Temporal Dead Zone- is the area or moment of time whee the variable defined let and const cannot be accesible before its intilization 
 
// let or const
// {
//     console.log(TDZ) // reference rror


//     let newString= 'TDZ';


//     console.log(newString);
// }


//DataTypes: In JS, data type has been categorized in two ways 
// 1. pimitive and 2. non-primitive

//1, primitive Data Types
//1. Number 2. string 3. undefined 4. boolean 5.null 6. BigInt 7. Symbol

//2. non-primitive Dataypes(user-defined datatype)
//1.array and 2.object

//number: int,float and decimal
// let first=100;
// let second=100.300;
// console.log(first);

//using NumberConstructor---
// let secondway=new Number(270);
// console.log(secondway);

//string
let color='yellow';
console.log(color);

let veg=new String('carrot');
console.log(veg);
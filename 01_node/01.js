// let fruits = ["apple", "mango", 55, 6.5];

// function hello() {
//   console.log("Hello");
// }

// console.log(typeof 6.5);


// github----------- 
//git status  - check karta hai change
// git add - ready 
// git commit  → Selected changes ka version save karo
//git push    → Ye saved version GitHub par bhejo

//date time
let myDate = new Date()
// console.log(myDate.toString());
// console.log("toDateString:", myDate.toDateString());
// // console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log("toISOString:", myDate.toISOString());
// console.log("\n"); // line break
// console.log("toJSON:", myDate.toJSON());
// console.log("\n"); // line break
// console.log("toLocaleString:", myDate.toLocaleString());
// console.log("\n"); // line break
// console.log( "toLocaleDateString:", myDate.toLocaleDateString());
// console.log("\n"); // line break
// console.log("toLocaleTimeString:", myDate.toLocaleTimeString());
// console.log("toUTCString:", myDate.toUTCString());
// console.log("\n"); // line break
// console.log("getTimezoneOffset:", myDate.getTimezoneOffset());
////+++++++++++++++++++javascript m Month 0 se satrt hote hai..
// () Parentheses , [] Square brackets, {} braces (Braces , curly brackets)
// let myCreatedDate = new Date("01-05-23")
// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


// array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);
// Array methods

// myArr.push(6)
// myArr.push(7) array m element add karta hai ye push()  

// ********* this keyword ***********

// const user = {
//     username : "Param",
//     price: 199,

//     welcomemsg : function() {
//         console.log(`${this.username}, welcome to the website.`);
//     }
// }
// user.username = "sam"
// user.welcomemsg()
// user.username = "sam"
//  user.welcomemsg()


// ***** arrow function 

// const arrowfun1 =  () => {
//     let username = "param"
//     console.log(this.username);
// }

// arrowfun1() 

//explicit  return function (jab curly braces use karte hai )
// const arrowfun2 =  (num1 , num2) => {
//     return num1 + num2
// }

// console.log(arrowfun2(5, 6));


//implicit  return function (jab curly braces use karte hai )
// const arrowfun3 =  (num1 , num2) =>  num1 + num2

// const arrowfun3 =  (num1 , num2) =>  (num1 + num2)

// const arrowfun3 =  (num1 , num2) => ( {username: Param})

// console.log(arrowfun3(5, 6));


// const = myarr = [4, 3, 5, 7]

// shift + alt + downarrow (for copy code)

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;

//     case "feb":
//         console.log("feb");
//         break;

 
//     case "march":
//         console.log("march");
//         break;

//             default:
//         console.log("default case match");
//         break;
// }


// const userEmail = []

// if (userEmail.length === 0){
//     console.log("arry is empty");
    
// }
// const objectis = {}

// if (Object.keys(objectis).length === 0){
//     console.log("object is empty");
    
// }

//************* Nullish Coalescing Operator (??): null undefined */
// let result = value ?? Default; //BASIC syntax

//************* Terniary Operator  */
// condition ? true : false // basic syntaxnode 
// const iceteaprice = 100

// iceteaprice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);

// const arr1 = [123, 2323, 2323, 32323]

// for (const num of arr1) {
//     console.log(`The number is ${num} `)
// }

//for..in -- object ki key/properties par loop lgatte hai
//for..of ---array/string ki value pe loop lagate hai
//foreach ---spacial for arrya

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} key of ${myObject[key]}`)
// };

// const language = ["js", "c++", "ruby", "php", "python"]

// for (const key of language) {
//   console.log(language[key]);
// }

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newN = myNumers.map( (num) => num + 10 ) 
// const newN = myNumers.map( (num) => {return num + 10} )

// const newN = myNumers
//  .map( ( num ) =>  ( num * 10 ) )
//  .map( (num) => ( num + 2 ) ) 
//  .filter( (num) => ( num >= 55 ) )
// console.log(newN);

const myNumers = [1, 2, 3, 4, 5]

// const mytotalreduce = myNumers.reduce( function ( acc, currval ) {
//     console.log( `acc: ${acc} and currval: ${currval} ` );
//     return acc + currval
// } )

// const mytotalreduce = myNumers.reduce( ( acc, currval ) =>  {
//     console.log( `acc: ${acc} and currval: ${currval} ` );
//     return acc + currval
// } )

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const TotalToPay = shoppingCart.reduce( function (acc , item) {
//     console.log( ` acc: ${acc}, currval: ${item.price} and course name ${item.itemName}` )
//     return acc + item.price
// }, 0 )

// console.log(TotalToPay);
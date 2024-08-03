// let arr = new Array(3);

// arr[0] = 10;
// arr[1] = 40;
// arr[2] = 20;

// console.log(arr)

// let courses = ["html", "js", "python", "php"];
// let firstItem = courses[0];
// let lastItem = courses[courses.length - 1]
// courses[1] = "bootstrap"
// for (let i = 0; i < courses.length; i++){
//     console.log(courses[i])
// }
// console.log(courses)
// console.log("first item: ", firstItem);
// console.log("last item: ", lastItem);

// function square() {
//     const items = [1, 29, 36];
//     const copy = [];
//     items.forEach(function (item) {
//         copy.push(item * item);
//     });
//     console.log(copy);
// }
// square();

// removing duplicate elements in an array
// using indexOf method
// let arr = ["apple", "mango", "orange", "apple", "mango", "mango"]

// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr))

// let names = ["anto", "kevo", "austo", "peter", "peter", "anto", "jose"];

// function updatedNames(names) {
//     return names.filter((items, index) => names.indexOf(items) === index)
// }

// console.log(updatedNames(names))

// using set() method
// let arr = ["apple", "mango", "orange", "apple", "mango", "mango"]
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr))

// let names = ["anto", "kevo", "austo", "peter", "peter", "anto", "jose"];
// function updatedNames(names) {
//     return [...new Set(names)];
// }

// console.log(updatedNames(names));

// Accessing JSON array using map() method

// let jsonArray = [
//     {
//         "ComapnyName": "GeeksforGeeks",
//         "Location": "Noida"
//     },
//     {
//         "Courses": [
//             "DSA self paced course",
//             "DevOps Boot camp",
//             "GATE prepration course"
//         ],
//         "Topics": [
//             "Web Devlopment",
//             "Machine Learning",
//             "Artifical Intelligence",
//             "Data Science"
//         ]
//     }
// ];

// let modifiedArray = jsonArray.map((item) => {
//     return item.ComapnyName ?
//         item. ComapnyName.toUpperCase() :
//         item.Courses.join(", ");
// });

// console.log(modifiedArray);

// for (let element of jsonArray) {
//     console.log(element);
// }

// How to replace an item from an array in JavaScript 
// Using Array Indexing
// let array = [1, 2, 3, 4, 5];
// const index = 2;
// const newValue = 10;
// array[index] = newValue;
// console.log(array)

// How to select a random element from array in JavaScript
// Using Math.random() function

// let arr = ["GFG_1", "GeeksForGeeks",
//     "Geeks", "Computer Science Portal"];

// function randomness() {
//     console.log(arr[(Math.floor(Math.random() * arr.length))]);
// }

// randomness()

// Create an array of given size in JavaScript
//  Using JavaScript array() constructor

// let arr = new Array("Geeks for geeks");
// console.log(arr)

// How to Get First N Elements from an Array in JavaScript
// Using the slice() method
// const arr = [1,2,3,4,5,6];
// const n = 3;
// const new_array = arr.splice(0, n)
// console.log(new_array)

//Using a for loop
// const arr = [1,2,3,4,5,6];
// const n = 3
// const result = []

// for (let i = 0; i < n; i++) {
//     result.push(arr[i])
// }

// console.log(result)

// How to modify an object’s property in an array of objects in JavaScript
// Using the Array.map() method

// let employees_data = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
// ];

// const modifiedEmployees = employees_data.map(obj => {
//     if (obj.employee_id == 2) {
//         return {...obj, employee_name: "Kevin"}
//     }
//     return obj
// })

// console.log(modifiedEmployees)

// let nums = 0
// for (let i = 0; i < 100; i++) {
//     nums[i] = i + 1
// }
// console.log(nums)

// let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
// // myAlphabet.length;
// // console.log(myAlphabet)

// function myAlphabetLength(array) {
//     // myAlphabet.length;
//     // console.log(myAlphabet)
//     if (array.length < 4) {
//         console.log("The arrray has less than 4 items")
//         array.push("H", "i", "J")
//         console.log("Array extended to: ", array)
//     } else {
//         console.log("It doesn't")
//         let concanatedArray = array.join("- ")
//         console.log("concanated string of the array: ", concanatedArray)
//     }
// }
// myAlphabetLength(myAlphabet)

// function checkFunc(inputString, flag) {
//     if (typeof inputString != "string") {
//         console.log("The first parameter must be a string");
//         return;
//     }
//     if (typeof flag != "boolean") {
//         console.log("The second parameter must be a boolean")
//     }

//     if (flag) {
//         console.log(`The string "${inputString}" was provided with the flag set to true`)
//     } else {
//         console.log(`The string "${inputString}" was provided with the flag set to false`);
//     }
// }

// // checkFunc("Hello, World!", true);   // Call with a string and true
// checkFunc("JavaScript", false);     // Call with a string and false
// checkFunc("OpenAI", "not boolean"); // Call with incorrect boolean type
// checkFunc(12345, true); 

// let planets = ["earth", "pluto", "venus", "mars", "jupiter"];
// // console.log(planets);
// planets.forEach((planet, index) => {
//     planets = `Index: ${index}, Planet: ${planet}`
//     console.log(planets)
// })

// let wowDataTypes = [
//     "OpenAI",
//     2024,
//     true,
//     undefined,
//     Symbol('GPT')
// ]

// wowDataTypes.forEach((item, index) => {
//     console.log(`Index: ${index}, Value: ${item}, Data Type: ${typeof item}`)
// })

let myArr = [ 1, 2, 'One', true];

updatedArr = [...myArr, new Set()]
console.log(updatedArr)
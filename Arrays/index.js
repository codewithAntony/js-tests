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
const arr = [1,2,3,4,5,6];
const n = 3
const result = []

for (let i = 0; i < n; i++) {
    result.push(arr[i])
}

console.log(result)
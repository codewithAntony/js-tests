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
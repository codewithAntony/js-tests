// reverse a string
// Using split(), reverse() and join() Methods
// function reverseString(str) {
//     const strRev = str.split('').reverse().join('')
//     console.log(strRev)
// }

// reverseString("Antony")

// Remove a Character From String in JavaScript
// Using JavaScript replace() Method (for one character)
// function removeCharacter() {
//     const originalString = "Antony"
//     newString = originalString.replace("o", "")
//     console.log(newString)
// }

// removeCharacter()

// Using JavaScript replace() Method with a Regular Expression (for more characters)
// function removeCharacter() {
//     const originalString = "GEEKSFORGEEKS"
//     newString = originalString.replace(/E/g, "")
//     console.log(newString)
// }

// removeCharacter()

// const students = ["Antony", "Nyaga", "Alex", "Jon", 'Joel'];

// function findStudent(allStudents, studentName) {
//     for (let i = 0; i < allStudents.length; i++) {
//         if (allStudents[i] === studentName) {
//             console.log(`Found ${studentName}`)
//         }
//     }
// }

// findStudent(students, "Nyaga")

// const artists = ["Jt", "Uzi", "Drake", "Baby"]

// const findArtist = (allArtists, artistName) => {
//     for (let i = 0; i < allArtists.length; i++) {
//         if (allArtists[i] === artistName) {
//             console.log(`find Artist ${artistName}`)
//         } else {
//             if (allArtists[i] != artistName) {
//                 console.log("There is no artist with such a name")
//             }
//         }
//     }
// }

// // findArtist(artists, "Uzi")
// findArtist(artists, "Baby")

//o(n)

// const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"]

// const findGroceries = (item) => {
//     for (let i = 0; i < groceries.length; i++) {
//         if (groceries[i] === item) {
//             console.log(`Found ${item}`)
//         }
//     }
// }
// findGroceries("bread")


//o(1)

// const numbers = [1,2,3,4,5,6,7,8,9];

// const findNumber = (arr, index) => arr[index]
// console.log(findNumber(numbers, 7))



// o(n^2)
// function findPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(`Pair: ${arr[i]}, ${arr[j]}`)
//         }
//     }
// }

// const numbers = [1,2,3,4,5]
// findPairs(numbers)

//ARRAYS

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }
}

const myNewArray = new MyArray()
myNewArray.push('apple')
myNewArray.push('orange')
myNewArray.push('mango')
console.log(myNewArray)
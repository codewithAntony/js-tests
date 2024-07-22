const today = new Date();
const day = today.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`Today is: ${dayList[day]}.`);

let hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

let timeOfDay = (hour >= 12) ? "PM" : "AM";
hour = (hour >=12) ? hour - 12 : hour;

if (hour === 0 && timeOfDay === "PM") {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        timeOfDay = "Noon";
    } else {
        hour = 12;
        timeOfDay = "PM";
    }
}

if (hour === 0 && timeOfDay === "AM") {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        timeOfDay = "Midnight";
    } else {
        hour = 12;
        timeOfDay = "AM";
    }
}

console.log(`Current time: ${hour}${timeOfDay} : ${minutes} : ${seconds}`)

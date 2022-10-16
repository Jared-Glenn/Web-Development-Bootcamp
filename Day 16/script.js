// console.log("Hello from our first JS file!");

// let total = 1+3;

// console.log("Goodbye!");

// let rating = 3;

// console.log("BEFORE CONDITIONAL")

// let random = Math.random();
// if (random<0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!")
// } else if (random= 0.5){
//     console.log("YOUR NUMBER IS 0.5!")
// } else {
//     console.log("YOUR NUMBER GREATER THAN 0.5!")
// } console.log(random)


// console.log("AFTER CONDITIONAL")

// const password = prompt("Please enter a new password.");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("VALID PASSWORD")
//     } else {
//         console.log("PASSWORD CANNOT CONTAIN SPACES!")
//     }
// } else {
//     console.log("INVALID PASSWORD! PASSWORD IS TOO SHORT!")
// }

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD")
//     } else {
//     console.log("INVALID PASSWORD!")
// }

//                  && = and 
//                  || = or 
//                  ! = not

const day = 4;

switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND")
    default:
        console.log("I DON'T KNOW THAT")
}

// You need a colon for the switch statement, not a semicolon.

// If there's no break, the program will keep executing all following cases until it meets a break.
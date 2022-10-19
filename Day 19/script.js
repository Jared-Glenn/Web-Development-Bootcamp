// for (let i = 1; i<=10;i++) {
//     console.log(i)
// }

// for (let i = 0; i<=20;i += 2) {
//     console.log(i)
// }

// for (let i = 100; i>=0; i -= 1) {
//     console.log(i)
// }

// const animals = ['lions', 'tigers', 'bears', 'oh my'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     let row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(seatingChart[i][j])
//     }
// }

// let count = 0;

// while (count<10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the Secret Code ...");

// while (guess !== SECRET) {
//     guess = prompt("Enter the Secret Code ...");
// }
// console.log("CONGRATS! YOU GOT IT!")

// let input = prompt("Hey, say something!")

// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me" || input.toLowerCase() === "stop copying me!") break;
// }

// ____________________________


// let maximum = parseInt(prompt("Enter a number!"))
// let attempts = 1;

// while (!maximum) {
//     maximum = parseInt(prompt("enter a valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum + 1);

// let guess = prompt("Enter your first guess!");

// while (parseInt(guess) !== targetNum) {
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:")
//     } else {
//         guess = prompt("Too low! Enter a new guess:")
//     }
//     if (guess == 'q') {
//         console.log("Better luck next time!");
//         break;
//     } else {
//         console.log(`You got it! It took you ${attempts} guesses.`);
//         break;
//     }
// }

// ______________________________________


const animals = ['lions', 'tigers', 'bears', 'oh my'];

for (let animal of animals) {
    console.log(animal)
}

// With objects use For ... In , instead of For ... Of .

// Object.keys(objectLiteral)
// Object.values(objectLiteral)
// Object.entries(objectLiteral)
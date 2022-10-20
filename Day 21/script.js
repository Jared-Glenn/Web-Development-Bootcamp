const square = function (num) {
    return num * num;
}

console.log(square(7))

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f){
    for (let i = 0; i <= 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

function makeBetweenFunc(min, max){
    return function (num) {
        return num >= min && num <= max;
    }
}

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube(num){
        console.log(`So you know, Pi is ${this.PI}.`)
        return num ** 3;
    }
}

// Both square and cube are valid ways to write methods. cube is written in
// a shorthand.

// TRY AND CATCH

try {
    hello.toUpperCase();
}
catch {
    console.log("ERROR!")
}
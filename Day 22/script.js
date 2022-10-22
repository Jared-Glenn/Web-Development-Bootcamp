const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function print(num) {
    console.log(num);
}

numbers.forEach(print)

numbers.forEach(function (el) {
    if (el% 2 === 0) {
        console.log(el)
    }
})

// MAP is like list comprehension in Python!

const texts = ['rofl', 'lol', 'omw', 'ttyl']

const caps = texts.map(function(t) {
    return t.toUpperCase();
})

print(caps)


const add = (x, y) => {
    return x + y;
}

// Implicit returns ONLY return something if there is only one expression.


const rollDie = () => Math.floor(Math.random() * 6) + 1


setTimeout(() => {
    console.log("HELLO!!!")
}, 3000 )


const id = setInterval(() => {
    console.log(Math.random())
}, 4000);

// clearInterval can turn a timer off. Simply obtain the id (shown above) and call clearInterval on it. clearInterval(id)


filtered = numbers.filter(n => {
    return n < 10;
});

function validUserNames(usernames) {
    usernames.filter(name => name.length < 10)
  }


  // SOME and EVERY methods

numbers.every(number => number <= 20)

//TESTS IF EVERY NUMBER IN THE ARRAY MEETS THE GIVEN CRITERIA -- TRUE OR FALSE

numbers.some(number => number <= 10)

//TESTS IF AT LEAST ONE NUMBER IN THE ARRAY MEETS THE GIVEN CRITERIA -- TRUE OR FALSE


// REDUCE

newNumbers = [3, 5, 7, 8, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

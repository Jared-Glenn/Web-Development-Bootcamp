function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

/// SPREAD = ...

nums = [13, 28, 92, 1, 77, 43, 76, 12]


console.log(...nums)

const cats = ["Mocha", "Archie"]
const dogs = ["Buddy", "Kizmet"]
const hamsters = ["Grace"]

const allPets = [...cats, ...dogs, ...hamsters]

// Can combine objects, but order matters! If they both have the same key, the later object will overwrite the value.


// REST  = ...

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}


// DESTRUCTURING ARRAYS

const scores = [99937, 89945, 87429, 73999, 63322, 63221]

const highScore = scores[0];
const secondHighScore = scores[1];

// const [gold, silver] = scores;

const [gold, silver, bronze, ...everyoneElse] = scores;


const user = {
    email: 'harvey@gmail.com',
    password: 'password',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
}

const {email, firstName, lastName} = user;

const{born: birthYear} = user;

const {favoriteCup: cup = "N/A"} = user;



// Destructuring on the way into a function:

movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}.`
})
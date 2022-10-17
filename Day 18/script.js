// Object:

const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    workoutsThisWeek : '5 of 7',
};

const person = {
    firstName : 'Mick',
    lastName : 'Jagger',
    isFunny : true,
    favColors  : [
        'red',
        'orange',
    ]
}

person.isFunny = false
person["firstName"] = 'Moveslike'

// array = list
// object = dictionary

console.log(person["firstName"])
// Must be a string!!!
person.firstName
// Must NOT be a string!!!

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:

let fullAddress = `${restaurant['address']}, ${restaurant['city']}, ${restaurant['state']}, ${restaurant['zipcode']}`


const comments = [
    {username: 'Tammy', text: 'lolololololol', votes: 9},
    {username: 'Fishboi', text: 'glub glub', votes : 12387}]
    
comments[1].text
"glub glub" 
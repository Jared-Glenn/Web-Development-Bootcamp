const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift()
planets.push("Saturn")
planets.unshift("Mercury")

planets.concat(other_bodies)
planets.includes("Venus")
planets.indexOf("Earth")
planets.reverse()

planets.slice(2)
// Slices from 2 to the end.
planets.slice(2, 5)
// Slices from 2 to 5 (not including 5).

// Splice has three arguments. (where_to_put_it, how_many_to_delete, new_item)
planets.splice(1, 0, 'The Moon')

const gameBoard = [["X", "O", "X"], ["O",null, "X"], ["O", "O", "X"]]



// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = "Hugo"

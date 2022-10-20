// function funcName() {
//     //do something
// }

function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// singSong()


function greet(person) {
    console.log(`Hi, ${person}`);
}


function capitalize(word) {
    let theRest = word.slice(1, word.length)
    let firstLetter = word[0].toUpperCase()
    let capWord = firstLetter + theRest
    return capWord
}


function sumArray(array) {
    let total  = 0;
    for (let num of array) {
        total += num
    }
    return total
}


const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


function returnDay(num) {
    if (num >= 1 && num <=7) {
        return daysOfTheWeek[num-1]
    }
    else {
        return null
    }
}

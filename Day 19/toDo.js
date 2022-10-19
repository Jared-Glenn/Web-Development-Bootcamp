
const toDoList = []

let request = prompt("Welcome to the ToDo List!\nWhat can I do for you?").toLowerCase()

while (request !== "quit") {
    if (request === "new") {
        const change = prompt("What would you like to add to your ToDo List?")
        toDoList.push(change)
        console.log(`${change} added to list.`)
    }
    else if (request === "list") {
        console.log("*******************")
        for (i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`)
        }
        console.log("*******************")
    }
    else if (request === "delete") {
        const change = parseInt(prompt("What is the index of the item you want to remove?"))
        const item = toDoList[change]
        toDoList.splice(change, 1)
        console.log(`Good job! ${item} checked off your list!`)
    }
    request = prompt("What else can I do for you?").toLowerCase()
}

console.log("Thank you for using the ToDo List!")
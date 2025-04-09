// Create a function personInfo that logs the name and age of a person. Using the call() method, call the function with a specific this context (an object with properties name and age).

function personInfo(){

    return `Name: ${this.Name}, age: ${this.age}`

}

let obj={
    Name:"Shasha",
    age:23
}
let obj1={
    Name:"Anuj",
    age:28
}
let obj2={
    Name:"Bheem",
    age:31
}

console.log(personInfo.call(obj))
console.log(personInfo.call(obj1))
console.log(personInfo.call(obj2))


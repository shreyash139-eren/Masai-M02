// function Animal(){
//     this.type="Animal"
// }
// Animal.prototype.sound=function(){
//     console.log(`Animal sound`)
// }

// function Dog(name){
//     Animal.call(this)
    
// }
// Dog.prototype.sound=function(){
//     console.log(`Bark`)
// }
// Object.setPrototypeOf(Dog,Animal)

// let myDog=new Dog("popo")
// console.log(myDog)
// myDog.sound()
// console.log(Object.getPrototypeOf(Dog))


class Animal{
    constructor(type){
        this.type="Animal"
    }
    sound(){
        console.log(`Animal sound`)
    }
}
class Dog extends Animal{
    constructor(type){
        super(type)
    }
    sound(){
        console.log(`Bark`)
    }
}
let myDog=new Dog()
console.log(myDog)
myDog.sound()
console.log(Object.getPrototypeOf(myDog))
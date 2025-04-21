

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
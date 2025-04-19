function Animal(name,legs){
    this.name=name
    this.legs=legs
}
Animal.prototype.sound=function(){
    console.log(`Animal sound`)
}
function Dog(name,legs){
let obj=new Animal(name,legs)
return obj
}
Dog.prototype.sound=function(){
    console.log("Bark")
}

Object.setPrototypeOf(Dog,Animal)
let myDog=new Dog("Tommy",4)
console.log(myDog)

console.log(Object.getPrototypeOf(myDog))
myDog.sound()
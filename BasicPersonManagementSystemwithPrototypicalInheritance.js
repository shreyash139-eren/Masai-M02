class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

class Employee extends Person{
    constructor(name,age,jobTitle){
        super(name,age)
        this.jobTitle=jobTitle
    }
    work(){
        console.log(`${this.name} is working as a ${this.jobTitle}.`)
    }
}

let person1=new Person("Alice",26)
let employee1=new Employee("John", 28 ,"Developer")
person1.introduce()
employee1.introduce()
employee1.work()
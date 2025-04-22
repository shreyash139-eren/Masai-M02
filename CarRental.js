class Car{
    constructor(make,model,year,isAvailable=true){
        this.make=make
        this.model=model
        this.year=year
        this.isAvailable=isAvailable
    }
}

class Customer{
    constructor(name,rentedCars=[]){
        this.name=name
        this.rentedCars=rentedCars
    }
    Rent(obj){
        if(obj.isAvailable===true){
            this.rentedCars.push(obj)
            obj.isAvailable=false
        }
        else{
            console.log(`Car is not available.`)
        }
    }

    Return(car,customer){
        setTimeout(()=>{
            car.isAvailable=true
            customer.rentedCars.pop()
            console.log("Car returned succeessfuly.")
        },2000)
    }
}
class PremiumCustomer extends Customer{
    constructor(name,rentedCars,discoutRate){
        super(name,rentedCars)
        this.discoutRate=discoutRate
    }
}
function Price(car,customer){
    let price=50
    if(car.model==="SUV" && customer.discoutRate>0){
        console.log(`Price per day: ${price=80-(80*customer.discoutRate/100)}`)
    }
    else if(car.model==="SUV"){
        console.log(`Price per day: ${price=80}`)
    }
    else if(car.model==="Coupe" && customer.discoutRate>0){
        console.log(`Price per day: ${price=60-(60*customer.discoutRate/100)}`)
    }
    else if(car.model==="Coupe"){
        console.log(`Price per day: ${price=60}`)
    }
    else{
        console.log(`Price per day: ${price}`) 
    }
}
function Maintenance(car){
    car.isAvailable=false
    setTimeout(()=>{
        car.isAvailable=true
        console.log(`Maintenance complete.`)
    },5000)
}




let car1=new Car("Toyota","Coupe",1992,true)
let car2=new Car("Mahindra","SUV","2019",true)
let car3=new Car("Tata","Punch",2022,true)
let customer1=new Customer("Alice")
let customer2=new PremiumCustomer("John",[],10)
console.log(customer1)
customer1.Rent(car1)
console.log(customer1)
customer2.Rent(car2)
console.log(customer2)
Price(car1,customer1)
Price(car2,customer2)
customer1.Return(car1,customer1)
console.log(customer1)
Maintenance(car3)
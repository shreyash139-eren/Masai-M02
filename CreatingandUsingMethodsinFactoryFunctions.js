function CreateCar(make,model,year){
    let obj={}
    obj.make=make
    obj.model=model
    obj.year=year
    obj.describeCar=function(){
        return (`This car is a ${this.year} ${this.make} ${this.model}.`)
    }
    return obj
}
let car1 =CreateCar("Toyota", "Camry", 2022);
console.log(car1.describeCar())

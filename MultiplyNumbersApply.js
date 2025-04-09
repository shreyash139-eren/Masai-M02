function multiplyNumbers(num1,num2){
    console.log(this.num1*this.num2)
}
let obj1={
        num1:9,
        num2:15
}
let obj2={
    num1: -7,
    num2: -5
}
let obj3={
    num1:0,
    num2:12
}
let obj4={
    num1:2**5,
    num2:5
}

multiplyNumbers.apply(obj1)
multiplyNumbers.apply(obj2)
multiplyNumbers.apply(obj3)
multiplyNumbers.apply(obj4)
function createEmployee(name,role,salary){
   let obj={}
   obj.name=name
   obj.role=role
   obj.salary=salary
   obj.introduce=function(){
      return `Hello, I am ${this.name}, working as a ${this.role}.`
   }
 return obj
}
let employee1=createEmployee("Alice","Developer",60000)
console.log(employee1.introduce())
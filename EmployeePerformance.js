let Input= [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 3, rating: 2.8 }
    ]
    function employeePerformance(){
        Input=Input.filter((ele)=>{
            if(ele.tasksCompleted>5){
                return ele
            }
        }).map((ele)=>{
            if(ele.rating>4.5){
                delete ele.tasksCompleted
                ele.performance="Excellent"
                return ele
            }
            else if(ele.rating>=3 && ele.rating<=4.5){
                delete ele.tasksCompleted
                ele.performance="Good"
                 return ele
            }
            else{
                delete ele.tasksCompleted
                ele.performance="Needs Improvement"
                return ele
            }
        }).sort((a,b)=>{
            return (b.rating-a.rating)
            
        })
        return Input
    }
console.log(employeePerformance())

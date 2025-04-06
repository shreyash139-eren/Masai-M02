let arr=[
{ "name": "Alice", "marks": 58 },
{ "name": "Bob", "marks": 85 },
{ "name": "Charlie", "marks": 92 },
{ "name": "David", "marks": 45 },
{ "name": "Emma", "marks": 76 },
{ "name": "Frank", "marks": 63 },
{ "name": "Grace", "marks": 89 },
{ "name": "Hannah", "marks": 95 },
{ "name": "Ian", "marks": 54 },
{ "name": "Jack", "marks": 79 },
{ "name": "Kate", "marks": 67 },
{ "name": "Leo", "marks": 88 },
{ "name": "Mia", "marks": 91 },
{ "name": "Nathan", "marks": 72 },
{ "name": "Olivia", "marks": 82 }
]

function processStudents(){
    let narr = arr.filter((ele)=>{
        if(ele.marks>60){
            return ele
        }
    }).sort((a,b)=>{
       return b.marks-a.marks
    }).map((ele)=>{
        return ele.name
    })
    return narr
}
console.log(processStudents())







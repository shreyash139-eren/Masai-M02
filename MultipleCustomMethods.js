


function filterEvenNumbers(arr){

    let narr=arr.filter((ele)=>{
        return ele%2===0
    }).sort((a,b)=>{
        return a-b
    })
    return narr

}


function sumOfArray(arr){

    let narr=arr.reduce((acc,cur)=>{
        return acc+cur
    },0)
    return narr

}


function sortAndConcat(arr1, arr2){

    arr1=arr1.sort((a,b)=>{
        return a-b
    })
    arr2=arr2.sort((a,b)=>{
        return a-b
    })
    let narr=arr1.concat(arr2).sort((a,b)=>{
        return a-b
    })
    return narr

}

let arr=[23,54,65,44,22,98,4,6,55]
let arr1=[2,3,7,6,8,1]
let arr2=[8,54,34,12,33,88]

console.log(filterEvenNumbers(arr))
console.log(sumOfArray(arr))
console.log(sortAndConcat(arr1,arr2))
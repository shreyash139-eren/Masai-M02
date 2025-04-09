// Given an array of integers [15, 30, 45, 60, 75, 90], write a function extractAndReverse that performs the following tasks:

// Use the slice method to extract a subarray from the third element (inclusive) to the fifth element (exclusive).
// Reverse the extracted subarray and return it.
// The original array should remain unchanged. The function should return the reversed subarray.


function extractAndReverse(arr){

    let narr=arr.slice(3,5).sort((a,b)=>{
        return b-a
        })
        return narr

}

let arr=[15, 30, 45, 60, 75, 90]
console.log(extractAndReverse(arr))
console.log(arr)



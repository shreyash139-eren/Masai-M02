let Input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
let obj={}

Input=Input.reduce((acc,curr)=>{
    if(obj[curr]){
        obj[curr]++
    }
    else{
        obj[curr]=1
    }
},"")
console.log(obj)

// Use reduce() to group the categories and count how many times each category appears.
// Return the resulting object.
// After creating the object, use Object.entries() and sort() to sort the categories by their counts in descending order and return an array of sorted categories.
async function ErrorHandling(){
    try{
        let res=await fetch("https://fakestoreapi.com/products")
        let data=await res.json()
        return data
        }
    
    catch(err){
        console.log("Failed to fetch products!")
    }
}

async function Show(){
    let arr=[]
    let data=await ErrorHandling()
    let total=data.filter((ele)=>{
         arr.push(ele.price)
         return arr
    })
    console.log(data)
    let Total=arr.reduce((acc,cur)=>{
        return acc+cur
    },0)
    console.log(`Total sum of the Products:${Total}`)
}
Show()
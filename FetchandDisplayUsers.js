let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
myFetch
.then((res)=>{
    return res.json()
})
.then((res)=>{
    let narr=res.filter((ele)=>{
        console.log( ele.name)
    })
})
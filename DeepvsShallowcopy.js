


    function deepClone(obj){

        let clone=JSON.parse(JSON.stringify(obj))
        clone.hobbies=[...obj.hobbies, "coding"]
        console.log("clone:",clone)
        console.log("original",obj)
    }

    let obj={
        name: "Alice",
       hobbies: ["reading", "traveling"] 
       }
       deepClone(obj)
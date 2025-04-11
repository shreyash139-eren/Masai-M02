 let count=0
 function loading(){
   
    let id=setInterval(()=>{
        count++
        console.log("Loading...")
        
        if(count==5){
        clearInterval(id)
        console.log("Loaded successfully!")
    }
    },1000)

    
}

loading()
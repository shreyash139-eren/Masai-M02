function fetchData(){
    
        let number= Math.random()
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                if(number>0.5){
                    res("Resolved successfully!") 
                }
                else{
                   rej(new Error("Rejected due to an error!"))
                }
            },1000)
        })

        }

        async function fetchDataHandler(){
            try{
                let result= await fetchData()
                console.log("Success:",result)
            }
            catch(error){
                console.log("Error fetching data:",error.message)
            }
        }

fetchDataHandler()


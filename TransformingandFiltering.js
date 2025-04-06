let Input= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

    function processProducts(){
        let name=Input.map((ele)=>{
            return ele.name
        })
        let final=Input.forEach((elem)=>{
            if(elem.price>50){
                console.log(`${elem.name} is above $50`)
            }
            else if(elem.price==50){
                console.log(`${elem.name} is $50`)
            }
            else{
                console.log(`${elem.name} is below $50`)
            }
        })
    }
    processProducts()







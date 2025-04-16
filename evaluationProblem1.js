
  
  function createOrderManager(){
    let orderList=[]
    let obj={
        addOrders: function(order){
            orderList.push(order)
            return orderList
        },
        updateOrders: function(id){
            for(let i=0;i<orderList.length;i++){
            if(id===orderList[i].id){
                return orderList[i].status
            }
        }
        return "No order from this ID"
        },

        filterOrders: function(status){
            let FilteredOrders = orderList.filter((ele,i)=>{
               if(status===ele[i].status){
                return orderList
               }
            })
            return FilteredOrders
        },

        sortOrders: function(by){
            for(let i=0;i<orderList.length;i++){
                if(by===date){

                }
            }
        },

        getTotalRevenue: function(order){
            let sum=0
            for(let i=0;i<order.length;i++){
            sum+=order[i].items[0].price
            }
            return sum
        },

        exportOrders: function(arr){
           let Uplist=JSON.stringify(order)
           return Uplist
        }
    }
    


    console.log(obj.addOrders(order))
    console.log(obj.updateOrders(1))
  }
let order=[
        {
         id: 1, 
         customerName: "Alice", 
         items: [{ name: "Laptop", price: 1000, quantity: 1 }], 
         status: "pending", 
         createdAt: new Date("2024-03-01") 
        },
        {
            id: 2, 
            customerName: "Bob", 
            items: [{ name: "Phone", price: 500, quantity: 2 }], 
            status: "shipped", 
            createdAt: new Date("2024-03-02")
        }
]
createOrderManager(order)


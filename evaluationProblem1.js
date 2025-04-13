
  
  function createOrderManager(){
    let orderList=[]
    let obj={
        addOrders: function(order){
            
            
            orderList.push(order)
            return orderList
        },
        status:"Order recieved",
        updateOrders: function(id){
            for(let i=0;i<order.length;i++){
            if(id===order[i].id){
             order.status=this.status
                return order.status
            }
        }
        return "No order from this ID"
        },

        filterOrders: function(status){
            let FilteredOrders = orderList.filter((ele,i)=>{
               if (ele[i].status===status){
                return ele
               }
            })
            return FilteredOrders
        },

        sortOrders: function(by){
           if(by===orderList.createdAt){
            let sorr=orderList.sort((a,b)=>{
                return a-b
            })
           }
        },

        getTotalRevenue: function(order){
            
        },

        exportOrders: function(arr){
           let Uplist=JSON.stringify(order)
           return Uplist
        }
    }
    


    return obj.getTotalRevenue()
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
console.log(createOrderManager(order))
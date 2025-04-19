function createInventoryItem(name,category,price){
    let obj={}
    obj.name=name
    obj.category=category
    obj.price=price
    obj.describeItem=function(){
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`)
    }
   return obj
}

function addItemDiscount(Item,discountPercent){
    let obj={}
    obj.item=item
    obj.discountedPercent=discountPercent
    obj.applyDiscount=function(){
        let discPrice=this.item.price-(this.item.price/discountPercent)
        console.log(`Discounted Price for ${this.item.name} : ${discPrice}`)
    }
    return obj
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem()
const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
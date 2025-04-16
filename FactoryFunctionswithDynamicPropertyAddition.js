function createInventoryItem(name,category,price){
    let obj={}
    obj.name=name
    obj.category=category
    obj.price=price
    obj.describeItem=function(){
        console.log(`Item: ${this.name}, Category: ${this.category}`)
    }
    obj.addItemDiscount=function(obj,discPer){
        console.log(`Discounted Price for ${obj.name}: ${obj.price-obj.price*(discPer/100)}`)
    }
    return obj
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem()
// Output: Item: Laptop, Category: Electronics, Price: 1500

item.addItemDiscount(item,10)